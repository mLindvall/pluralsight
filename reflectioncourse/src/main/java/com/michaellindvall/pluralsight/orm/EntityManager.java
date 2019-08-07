/**
 * (c) Save-a-lot
 *
 * @author mlin014
 * EntityManager.java
 * Aug 06, 2019
 */
package com.michaellindvall.pluralsight.orm;

import com.michaellindvall.pluralsight.model.Person;

import java.lang.reflect.InvocationTargetException;
import java.sql.SQLException;

/**
 * @author mlin014
 */
public interface EntityManager<T> {
    static <T> EntityManager<T> of(Class<?> clss) {
        return new EntityManagerImpl<>();
    }

    void persist(T linda) throws SQLException, IllegalAccessException;

    T find(Class<T> clss, Object primaryKey) throws SQLException, InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException;
}
