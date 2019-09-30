package com.michaellindvall.models;

import lombok.ToString;

@ToString
public class Employee extends Person {

    public Employee(final String name, final int age) {
        super(name, age);
    }
}