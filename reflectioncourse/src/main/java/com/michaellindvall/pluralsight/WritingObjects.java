/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * WritingObjects.java
 * Aug 06, 2019
 */
package com.michaellindvall.pluralsight;

import com.michaellindvall.pluralsight.beanmanager.BeanManager;
import com.michaellindvall.pluralsight.model.Person;
import com.michaellindvall.pluralsight.orm.EntityManager;
import com.michaellindvall.pluralsight.orm.ManagedEntityManager;

/**
 * @author mlindvall
 */
public class WritingObjects {
    public static void main(String[] args) throws Exception {
        BeanManager beanManager = BeanManager.getInstance();
        EntityManager<Person> entityManager = beanManager.getInstance(ManagedEntityManager.class);

        Person linda = new Person(31, "Linda");
        Person james = new Person(24, "James");
        Person susan = new Person(34, "Susan");
        Person john = new Person(33, "John");

        System.out.println(linda);
        System.out.println(james);
        System.out.println(susan);
        System.out.println(john);

        System.out.println("Writing to DB");

        entityManager.persist(linda);
        entityManager.persist(james);
        entityManager.persist(susan);
        entityManager.persist(john);


        System.out.println(linda);
        System.out.println(james);
        System.out.println(susan);
        System.out.println(john);
    }
}
