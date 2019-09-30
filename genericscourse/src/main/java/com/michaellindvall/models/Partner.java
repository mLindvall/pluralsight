package com.michaellindvall.models;

import lombok.ToString;

@ToString
public class Partner extends Person {

    public Partner(final String name, final int age) {
        super(name, age);
    }

}