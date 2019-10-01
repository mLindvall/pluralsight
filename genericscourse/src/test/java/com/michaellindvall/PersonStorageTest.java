package com.michaellindvall;

import static org.junit.Assert.assertEquals;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import com.michaellindvall.bounded.PersonLoader;
import com.michaellindvall.bounded.PersonSaver;
import com.michaellindvall.models.Employee;
import com.michaellindvall.models.Partner;
import com.michaellindvall.models.Person;

import org.junit.Before;
import org.junit.Test;

public class PersonStorageTest {

    private Partner donDraper = new Partner("Don Draper", 89);
    private Partner bertCooper = new Partner("Bert Coooper", 100);
    private Employee peggyOlson = new Employee("Peggery Olson", 65);

    private File file;
    private PersonSaver saver;
    private PersonLoader loader;

    @Test
    public void savesAndLoadsPerson() throws Exception {
        Person person = new Person("Bob", 20);
        saver.save(person);
        assertEquals(person, loader.load());
    }

    @Test
    public void savesAndLoadsArraysOfPeople() throws Exception {
        Person[] persons = new Person[2];
        persons[0] = donDraper;
        persons[1] = bertCooper;
        saver.saveAll(persons);

        assertEquals(donDraper, loader.load());
        assertEquals(bertCooper, loader.load());
    }

    @Test
    public void savesAndLoadsListOfPeople() throws Exception {
        List<Partner> persons = new ArrayList<>();
        persons.add(donDraper);
        persons.add(bertCooper);
        saver.saveAll(persons);

        assertEquals(donDraper, loader.load());
        assertEquals(bertCooper, loader.load());
    }

    @Test
    public void loadListsOfPeople() throws Exception {
        saver.save(donDraper);
        saver.save(peggyOlson);

        List<Object> people = new ArrayList<>();
        loader.loadAll(people);

        assertEquals(donDraper, people.get(0));
        assertEquals(peggyOlson, people.get(1));
    }

    @Before
    public void setUp() throws Exception
    {
        file = File.createTempFile("tmp", "people");
        saver = new PersonSaver(file);
        loader = new PersonLoader(file);
    }
}