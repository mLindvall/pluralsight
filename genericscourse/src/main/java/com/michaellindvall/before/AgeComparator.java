package com.michaellindvall.before;

import java.util.Comparator;

import com.michaellindvall.models.Person;

public class AgeComparator implements Comparator<Person> {

    public int compare(Person o1, Person o2) {
        return Integer.compare(o1.getAge(), o2.getAge());
    }

}