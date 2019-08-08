/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * PersonTwo.java
 * Aug 08, 2019
 */
package com.michaellindvall.pluralsight.model;

/**
 * @author mlindvall
 */
public class PersonTwo {

    private String name;
    private int age;

    public PersonTwo() {
    }

    public PersonTwo(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public static PersonTwo of(String name, int age) {
        return new PersonTwo(name, age);
    }

    @Override
    public String toString() {
        return "PersonTwo{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(final int age) {
        this.age = age;
    }
}
