/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * Person.java
 * Aug 06, 2019
 */
package com.michaellindvall.pluralsight.model;

import com.michaellindvall.pluralsight.annotation.Column;
import com.michaellindvall.pluralsight.annotation.PrimaryKey;

/**
 * @author mlindvall
 */
public class Person {

    @PrimaryKey(name="k_id")
    private long id;

    @Column(name="c_age")
    private int age;

    @Column(name="c_name")
    private String name;

    public Person() {
    }

    public Person(final int age, final String name) {
        this.age = age;
        this.name = name;
    }

    public static Person of(final int age, final String name) {
        return new Person(age, name);
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

    public long getId() {
        return id;
    }

    public void setId(final long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", age=" + age +
                ", name='" + name + '\'' +
                '}';
    }
}
