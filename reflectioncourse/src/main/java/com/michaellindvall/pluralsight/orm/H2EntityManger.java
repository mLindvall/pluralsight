/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * H2EntityManger.java
 * Aug 07, 2019
 */
package com.michaellindvall.pluralsight.orm;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * @author mlindvall
 */
public class H2EntityManger<T> extends AbstractEntityManager<T> {

    public Connection buildConnection() throws SQLException {
        return DriverManager.getConnection(
                "jdbc:h2:C:\\Users\\mlin014\\Desktop\\pluralsight-training\\reflectioncourse\\db-files\\db-pluralsight",
                "sa", "");
    }

}
