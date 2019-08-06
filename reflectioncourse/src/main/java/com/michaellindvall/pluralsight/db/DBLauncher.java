/**
 * (c) Save-a-lot
 *
 * @author mlin014
 * DBLauncher.java
 * Aug 06, 2019
 */
package com.michaellindvall.pluralsight.db;

import org.h2.tools.Server;

import java.sql.SQLException;

/**
 * @author mlin014
 */
public class DBLauncher {

    public static void main(String[] args) throws SQLException {
        Server.main();
        System.out.println("DB Launched");
    }
}
