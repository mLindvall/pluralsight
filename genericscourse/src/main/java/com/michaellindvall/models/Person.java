package com.michaellindvall.models;

import java.util.Objects;

import lombok.Data;

@Data
public class Person {
    private final String name;
    private final int age;

    public Person(String name, int age) {
        Objects.requireNonNull(name);
        this.name = name;
        this.age = age;
    }

}