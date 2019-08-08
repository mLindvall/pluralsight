/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * PlayWithMethodHandle.java
 * Aug 08, 2019
 */
package com.michaellindvall.pluralsight;

import com.michaellindvall.pluralsight.model.PersonTwo;

import java.lang.invoke.MethodHandle;
import java.lang.invoke.MethodHandles;
import java.lang.invoke.MethodHandles.Lookup;
import java.lang.invoke.MethodType;

/**
 * @author mlindvall
 */
public class PlayWithMethodHandle {
    public static void main(String[] args) throws Throwable {
        Lookup lookup = MethodHandles.lookup();
        MethodType emptyConstructorMethodType = MethodType.methodType(void.class);
        MethodHandle emptyConstructor =  lookup.findConstructor(PersonTwo.class, emptyConstructorMethodType);
        PersonTwo p = (PersonTwo) emptyConstructor.invoke();
        System.out.println(p);


        MethodType constructorMethodType = MethodType.methodType(void.class, String.class, int.class);
        MethodHandle constructor =  lookup.findConstructor(PersonTwo.class, constructorMethodType);
        PersonTwo p2 = (PersonTwo) constructor.invoke("James", 28);
        System.out.println(p2);

        final MethodType nameGetterMethodType = MethodType.methodType(String.class);
        final MethodHandle nameGetter = lookup.findVirtual(PersonTwo.class, "getName", nameGetterMethodType);

        String name = (String) nameGetter.invoke(p2);
        System.out.println(name);

        final MethodType nameSetterMethodType = MethodType.methodType(void.class, String.class);
        final MethodHandle nameSetter = lookup.findVirtual(PersonTwo.class, "setName", nameSetterMethodType);

        nameSetter.invoke(p2, "Linda");
        System.out.println(p2);

        // below will throw IllegalAccessException and the commented out code will fix it with java 9
//        Lookup privateLookup = MethodHandles.privateLookupIn(PersonTwo.class, lookup);
        final MethodHandle nameReader = lookup.findGetter(PersonTwo.class, "name", String.class);
        String name2 = (String) nameReader.invoke(p2);
        System.out.println(name2);

    }
}
