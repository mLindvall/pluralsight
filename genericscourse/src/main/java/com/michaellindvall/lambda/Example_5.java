package com.michaellindvall.lambda;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import com.michaellindvall.models.Person;

public class Example_5 {

    public static void main(String... args) {
        final Person donDraper = new Person("Don Draper", 89);
        final Person peggyOlson = new Person("Peggy Olson", 75);
        final Person bertCooper = new Person("Bert Cooper", 100);

        Predicate<Person> isOld = person -> person.getAge() > 80;
        System.out.println(isOld.test(peggyOlson));
        System.out.println(isOld.test(bertCooper));

        List<Person> people = new ArrayList<>();
        people.add(peggyOlson);
        people.add(bertCooper);
        people.add(donDraper);

        Map<Boolean, List<Person>> oldAndYoungPeople = people.stream().collect(Collectors.partitioningBy(isOld));
        System.out.println(oldAndYoungPeople);

        Map<Boolean, Long> oldAndYoungPeopleCount = people.stream()
                .collect(Collectors.partitioningBy(isOld, Collectors.counting()));
        System.out.println(oldAndYoungPeopleCount);
    }
}