/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * EntityManager.java
 * Aug 06, 2019
 */
package com.michaellindvall.pluralsight.orm;

import java.lang.reflect.InvocationTargetException;
import java.sql.SQLException;

/**
 * @author mlindvall
 */
public interface EntityManager<T> {
    static <T> EntityManager<T> of(Class<?> clss) {
        return new H2EntityManger<>();
    }

    void persist(T linda) throws SQLException, IllegalAccessException;

    T find(Class<T> clss, Object primaryKey) throws SQLException, InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException;
}
