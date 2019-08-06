/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * PersonClassReflection.java
 * Aug 06, 2019
 */
package com.michaellindvall.pluralsight;

import com.michaellindvall.pluralsight.model.Person;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Arrays;
import java.util.stream.Stream;

/**
 * @author mlindvall
 */
public class PersonClassReflection {
    public static void main(String[] args) throws NoSuchMethodException, NoSuchFieldException, ClassNotFoundException {
        String personClassName = "com.michaellindvall.pluralsight.model.Person";
        Class<?> clss = Class.forName(personClassName);
        System.out.println("Person class = " + personClassName);

        Field[] fields = clss.getFields();
        Field[] declaredFields = clss.getDeclaredFields();
        System.out.println("# declared fields = " + declaredFields.length);
        System.out.println(Arrays.toString(declaredFields));
        System.out.println();
        System.out.println("# fields = " + fields.length);
        System.out.println(Arrays.toString(fields));
        System.out.println();

        Method method = clss.getMethod("setName", String.class);
        Method[] methods = clss.getMethods();
        Method[] declaredMethods = clss.getDeclaredMethods();
        System.out.println("method = " + method);
        System.out.println("# methods = " + methods.length);
        for (Method m : methods) {
            System.out.println(m);
        }
        System.out.println();
        System.out.println("# declared methods = " + declaredMethods.length);
        for (Method m : declaredMethods) {
            System.out.println(m);
        }

        System.out.println();
        System.out.println("Declared Static Methods");
        Arrays.stream(declaredMethods)
                .filter(m -> Modifier.isStatic(m.getModifiers()))
                .forEach(System.out::println);

        System.out.println();
        Constructor constructor = clss.getConstructor();
        Constructor[] declaredConstructors = clss.getDeclaredConstructors();
        Constructor[] constructors = clss.getConstructors();
        System.out.println("constructor = " + constructor);
        System.out.println("# constructors = " + constructors.length);
        Arrays.stream(constructors).forEach(System.out::println);
        System.out.println();
        System.out.println("# declared constructors = " + declaredConstructors.length);
        Arrays.stream(declaredConstructors).forEach(System.out::println);

        System.out.println();
        Field field = clss.getDeclaredField("name");
        int modifiers = field.getModifiers();
        boolean isPublic = Modifier.isPublic(modifiers);
        System.out.println("name is a public field = " + isPublic);


    }
}
