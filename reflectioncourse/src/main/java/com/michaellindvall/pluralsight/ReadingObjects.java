/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * ReadingObjects.java
 * Aug 07, 2019
 */
package com.michaellindvall.pluralsight;

import com.michaellindvall.pluralsight.beanmanager.BeanManager;
import com.michaellindvall.pluralsight.model.Person;
import com.michaellindvall.pluralsight.orm.EntityManager;
import com.michaellindvall.pluralsight.orm.ManagedEntityManager;

/**
 * @author mlindvall
 */
public class ReadingObjects {
    public static void main(String[] args) throws Exception {
        BeanManager beanManager = BeanManager.getInstance();
        EntityManager<Person> entityManager = beanManager.getInstance(ManagedEntityManager.class);

//        EntityManager<Person> entityManager = EntityManager.of(Person.class);

        Person linda = entityManager.find(Person.class, 1L);
        Person james = entityManager.find(Person.class, 2L);
        Person susan = entityManager.find(Person.class, 3L);
        Person john = entityManager.find(Person.class, 4L);

        System.out.println("Reading to DB");

        System.out.println(linda);
        System.out.println(james);
        System.out.println(susan);
        System.out.println(john);

    }
}
