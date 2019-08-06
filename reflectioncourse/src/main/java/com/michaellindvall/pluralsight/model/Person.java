/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * Person.java
 * Aug 06, 2019
 */
package com.michaellindvall.pluralsight.model;

/**
 * @author mlindvall
 */
public class Person {
    private int age;
    private String name;

    public Person() {}
    public Person(final int age, final String name) {
        this.age = age;
        this.name = name;
    }

    public static Person of(final int age, final String name) {
        return new Person(age,name);
    }

    public int getAge() {
        return age;
    }

    public void setAge(final int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Person{" +
                "age=" + age +
                ", name='" + name + '\'' +
                '}';
    }
}
