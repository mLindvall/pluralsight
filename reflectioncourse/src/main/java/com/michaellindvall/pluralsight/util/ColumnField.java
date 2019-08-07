/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * ColumnField.java
 * Aug 06, 2019
 */
package com.michaellindvall.pluralsight.util;

import com.michaellindvall.pluralsight.annotation.Column;

import java.lang.reflect.Field;

/**
 * @author mlindvall
 */
public class ColumnField {
    private Field field;
    private Column column;

    public ColumnField(final Field field) {
        this.field = field;
        this.column = field.getAnnotation(Column.class);
    }

    public String getName() {
        return column.name();
    }

    public Class<?> getType() {
        return field.getType();
    }

    public Field getField() {
        return field;
    }
}
