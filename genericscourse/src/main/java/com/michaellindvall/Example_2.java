package com.michaellindvall;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

import com.michaellindvall.before.AgeComparator;
import com.michaellindvall.models.Person;

public class Example_2 {

    public static void main(String... args) {
        Person donDraper = new Person("Don Draper", 89);
        Person peggyOlson = new Person("Peggy Olson", 65);
        Person bertCooper = new Person("Bert Cooper", 100);
        List<Person> madMen = new ArrayList<>();
        madMen.add(donDraper);
        madMen.add(peggyOlson);
        madMen.add(bertCooper);

        final Person yougestCastMember = min(madMen, new AgeComparator());
        System.out.println(yougestCastMember);

        List<Integer> numbers = new ArrayList<>();
        numbers.addAll(Arrays.asList(1,3,4,5));

        System.out.println(min(numbers, Integer::compare));
    }

    public static <T> T min(List<T> values, Comparator<T> comparator) {
        if (values.isEmpty()) {
            throw new IllegalArgumentException("List is empty, cannot find minimum");
        }

        T lowestElement = values.get(0);
        for (int i = 1; i < values.size(); i++) {
            final T element = values.get(i);
            if (comparator.compare(element, lowestElement) < 0) {
                lowestElement = element;
            }
        }

        return lowestElement;
    }
}