/**
 * (c) Save-a-lot
 *
 * @author mlin014
 * WritingObjects.java
 * Aug 06, 2019
 */
package com.michaellindvall.pluralsight;

import com.michaellindvall.pluralsight.model.Person;
import com.michaellindvall.pluralsight.orm.EntityManager;

import java.sql.SQLException;
import java.sql.SQLOutput;

/**
 * @author mlin014
 */
public class WritingObjects {
    public static void main(String[] args) throws Exception {
        EntityManager<Person> entityManager = EntityManager.of(Person.class);

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
