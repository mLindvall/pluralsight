/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * Metamodel.java
 * Aug 06, 2019
 */
package com.michaellindvall.pluralsight.util;

import com.michaellindvall.pluralsight.annotation.Column;
import com.michaellindvall.pluralsight.annotation.PrimaryKey;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

/**
 * @author mlindvall
 */
public class Metamodel {

    private final Class<?> clss;

    public static Metamodel of(final Class<?> clss) {
        return new Metamodel(clss);
    }

    public Metamodel(final Class<?> clss) {
        this.clss = clss;

    }

    public PrimaryKeyField getPrimaryKey() {
        Field[] fields = clss.getDeclaredFields();
        for (Field field : fields) {
            PrimaryKey primaryKey = field.getAnnotation(PrimaryKey.class);
            if (primaryKey != null) {
                PrimaryKeyField primaryKeyField = new PrimaryKeyField(field);
                return primaryKeyField;
            }
        }
        throw new IllegalArgumentException("No primary key found in class " + clss.getSimpleName());
    }

    public List<ColumnField> getColumns() {
        List<ColumnField> columnFields = new ArrayList<>();
        Field[] fields = clss.getDeclaredFields();
        for (Field field : fields) {
            Column column = field.getAnnotation(Column.class);
            if (column != null) {
                ColumnField columnField = new ColumnField(field);
                columnFields.add(columnField);
            }
        }
        return columnFields;
    }

    public String buildInsertRequest() {
        // insert into Person (id,name,age) value (?,?,?)
        final String columnElement = buildColumnNames();

        final String questionMarksElement = buildQuestionMarkElement();

        return "insert into " + this.clss.getSimpleName() +
                " (" + columnElement + ") values (" + questionMarksElement + ")";
    }

    public String buildSelectRequest() {
        // select id, name, age from Person where id = ?
        final String columnElement = buildColumnNames();
        return "select " + columnElement + " from " + this.clss.getSimpleName() +
                " Where " + getPrimaryKey().getName() + " = ?";
    }

    private String buildQuestionMarkElement() {
        final int numberOfColumns = getColumns().size() + 1;
        return IntStream.range(0, numberOfColumns)
                .mapToObj(index -> "?")
                .collect(Collectors.joining(", "));
    }

    private String buildColumnNames() {
        final String primateKeyColumnName = getPrimaryKey().getName();
        List<String> columnNames =
                getColumns().stream()
                        .map(ColumnField::getName)
                        .collect(Collectors.toList());
        columnNames.add(0, primateKeyColumnName);
        return String.join(", ", columnNames);
    }

}
