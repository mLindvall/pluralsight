/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * PrimaryKey.java
 * Aug 06, 2019
 */
package com.michaellindvall.pluralsight.annotation;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @author mlindvall
 */
@Retention(RetentionPolicy.RUNTIME)
public @interface PrimaryKey {
    String name();
}
