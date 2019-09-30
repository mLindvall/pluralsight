package com.michaellindvall;

import java.util.ArrayList;
import java.util.List;

import com.michaellindvall.models.Person;

public class Example_3 {
    public static void main(String... args) {
        List<? super Object> objects = new ArrayList<>();
        objects.add(new Object());
        objects.add(new Person("Mike Lindvall", 35));
        System.out.println(objects);
    }
}