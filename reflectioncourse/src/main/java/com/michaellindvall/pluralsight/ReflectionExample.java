/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * ReflectionExample.java
 * Aug 06, 2019
 */
package com.michaellindvall.pluralsight;

/**
 * @author mlindvall
 */
public class ReflectionExample {
    public static void main(String[] args) {
        String hello = "Hello";
        Class<?> helloClass = hello.getClass();

        String world = "World";
        Class<? extends String> worldClass = world.getClass();

        Class<?> stringClass = String.class;

        try {
            String className = "java.lang.String";
            Class<?> stringClass2 = Class.forName(className);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        Class<?> clss = "Hello".getClass();
        Class<?> superClss = clss.getSuperclass();
        Class<?>[] interfaces = clss.getInterfaces();

    }
}
