package com.michaellindvall.reflection;

public class Example_4 {

    public static void main(String... strings) {
        Injector injector = new Injector().with("Hello World!!");
        injector.with(100);


        Logger logger = injector.newInstance(Logger.class);

        logger.log();
    }
}