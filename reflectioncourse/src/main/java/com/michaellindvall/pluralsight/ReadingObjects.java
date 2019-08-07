/**
 * (c) Save-a-lot
 *
 * @author mlin014
 * ReadingObjects.java
 * Aug 07, 2019
 */
package com.michaellindvall.pluralsight;

import com.michaellindvall.pluralsight.model.Person;
import com.michaellindvall.pluralsight.orm.EntityManager;

/**
 * @author mlin014
 */
public class ReadingObjects {
    public static void main(String[] args) throws Exception {
        EntityManager<Person> entityManager = EntityManager.of(Person.class);

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
