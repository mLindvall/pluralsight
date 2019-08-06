/**
 * (c) Save-a-lot
 *
 * @author mlin014
 * EntityManagerImpl.java
 * Aug 06, 2019
 */
package com.michaellindvall.pluralsight.orm;

import com.michaellindvall.pluralsight.util.ColumnField;
import com.michaellindvall.pluralsight.util.Metamodel;

import java.lang.reflect.Field;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.concurrent.atomic.AtomicLong;

/**
 * @author mlin014
 */
public class EntityManagerImpl<T> implements EntityManager<T> {
    private AtomicLong idGenerator = new AtomicLong(0L);

    @Override
    public void persist(final T t) throws SQLException, IllegalAccessException {
        Metamodel metamodel = Metamodel.of(t.getClass());

        String sql = metamodel.buildInsertRequest();
        PreparedStatement statement = preparedStatementWith(sql).andParameters(t);
        statement.executeUpdate();
    }

    private PreparedStatementWrapper preparedStatementWith(final String sql) throws SQLException {
        Connection connection =
                DriverManager.getConnection(
                        "jdbc:h2:C:\\Users\\mlin014\\Desktop\\pluralsight-training\\reflectioncourse\\db-files\\db-pluralsight",
                        "sa", "");
        PreparedStatement statement = connection.prepareStatement(sql);
        return new PreparedStatementWrapper(statement);
    }

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
    }
}
