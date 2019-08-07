/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * EntityManagerImpl.java
 * Aug 06, 2019
 */
package com.michaellindvall.pluralsight.orm;

import com.michaellindvall.pluralsight.util.ColumnField;
import com.michaellindvall.pluralsight.util.Metamodel;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.concurrent.atomic.AtomicLong;

/**
 * @author mlindvall
 */
public abstract class AbstractEntityManager<T> implements EntityManager<T> {
    private AtomicLong idGenerator = new AtomicLong(0L);

    @Override
    public void persist(final T t) throws SQLException, IllegalAccessException {
        Metamodel metamodel = Metamodel.of(t.getClass());

        String sql = metamodel.buildInsertRequest();
        try (PreparedStatement statement = preparedStatementWith(sql).andParameters(t);) {
            statement.executeUpdate();
        }
    }

    @Override
    public T find(final Class<T> clss, final Object primaryKey) throws SQLException, InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException {
        Metamodel metamodel = Metamodel.of(clss);
        String sql = metamodel.buildSelectRequest();
        try(PreparedStatement statement = preparedStatementWith(sql).andPrimarykey(primaryKey);) {
            ResultSet resultSet = statement.executeQuery();
            return buildInstanceFrom(clss, resultSet);
        }
    }

    private T buildInstanceFrom(final Class<T> clss, final ResultSet resultSet) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, SQLException {
        Metamodel metamodel = Metamodel.of(clss);
        T t = clss.getConstructor().newInstance();
        final Field primaryKeyField = metamodel.getPrimaryKey().getField();
        String primaryKeyColumnName = metamodel.getPrimaryKey().getName();
        Class<?> primaryKeyType = primaryKeyField.getType();
        resultSet.next();
        if (primaryKeyType == long.class) {
            long primaryKey = resultSet.getInt(primaryKeyColumnName);
            primaryKeyField.setAccessible(true);
            primaryKeyField.set(t, primaryKey);
        }

        for (ColumnField columnFeld : metamodel.getColumns()) {
            Field field = columnFeld.getField();
            field.setAccessible(true);
            Class<?> columnType = columnFeld.getType();
            String columnName = columnFeld.getName();
            if (columnType == int.class) {
                int value = resultSet.getInt(columnName);
                field.set(t, value);
            } else if (columnType == String.class) {
                String value = resultSet.getString(columnName);
                field.set(t, value);
            }
        }
        return t;
    }

    private PreparedStatementWrapper preparedStatementWith(final String sql) throws SQLException {
        Connection connection = buildConnection();
        PreparedStatement statement = connection.prepareStatement(sql);
        return new PreparedStatementWrapper(statement);
    }

    public abstract Connection buildConnection() throws SQLException;

    private class PreparedStatementWrapper {
        private PreparedStatement statement;

        public PreparedStatementWrapper(final PreparedStatement statement) {
            this.statement = statement;
        }

        public PreparedStatement andParameters(T t) throws SQLException, IllegalAccessException {
            Metamodel metamodel = Metamodel.of(t.getClass());
            Class<?> primaryKeyType = metamodel.getPrimaryKey().getType();
            if (primaryKeyType == long.class) {
                long id = idGenerator.incrementAndGet();
                statement.setLong(1, id);
                final Field field = metamodel.getPrimaryKey().getField();
                field.setAccessible(true);
                field.set(t, id);
            }
            for (int columnIndex = 0; columnIndex < metamodel.getColumns().size(); columnIndex++) {
                ColumnField columnField = metamodel.getColumns().get(columnIndex);
                Class<?> fieldType = columnField.getType();
                Field field = columnField.getField();
                field.setAccessible(true);
                final Object value = field.get(t);
                if (fieldType == int.class) {
                    statement.setInt(columnIndex + 2, (int) value);
                } else if (fieldType == String.class) {
                    statement.setString(columnIndex + 2, (String) value);
                }
            }
            return statement;
        }

        public PreparedStatement andPrimarykey(final Object primaryKey) throws SQLException {
            if (primaryKey.getClass() == Long.class) {
                statement.setLong(1, (Long) primaryKey);
            }
            return statement;
        }
    }
}
