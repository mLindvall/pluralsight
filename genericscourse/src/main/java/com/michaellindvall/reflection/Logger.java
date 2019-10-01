package com.michaellindvall.reflection;

public class Logger {
    private String value;

    public Logger(Integer value) { 
        this.value = Integer.toString(value);
    }
    public void log() {
        System.out.println(this.value);
    }
}