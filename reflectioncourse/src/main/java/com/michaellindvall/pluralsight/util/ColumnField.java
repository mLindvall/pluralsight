/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * ColumnField.java
 * Aug 06, 2019
 */
package com.michaellindvall.pluralsight.util;

import java.lang.reflect.Field;

/**
 * @author mlindvall
 */
public class ColumnField {
    private Field field;

    public ColumnField(final Field field) {
        this.field = field;
    }

    public String getName() {
        return field.getName();
    }

    public Class<?> getType() {
        return field.getType();
    }

    public Field getField() {
        return field;
    }
}
