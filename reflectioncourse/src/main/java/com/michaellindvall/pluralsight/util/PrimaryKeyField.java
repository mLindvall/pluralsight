/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * PrimaryKeyField.java
 * Aug 06, 2019
 */
package com.michaellindvall.pluralsight.util;

import com.michaellindvall.pluralsight.annotation.PrimaryKey;

import java.lang.reflect.Field;

/**
 * @author mlindvall
 */
public class PrimaryKeyField {
    private Field field;

    public PrimaryKeyField(final Field field) {
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
