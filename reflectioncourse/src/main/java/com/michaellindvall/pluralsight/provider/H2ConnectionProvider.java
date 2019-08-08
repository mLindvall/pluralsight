/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * H2ConnectionProvider.java
 * Aug 08, 2019
 */
package com.michaellindvall.pluralsight.provider;

import com.michaellindvall.pluralsight.annotation.Provides;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * @author mlindvall
 */
public class H2ConnectionProvider {

    @Provides
    public Connection buildConnection() throws SQLException {
        return DriverManager.getConnection(
                "jdbc:h2:C:\\Users\\mlin014\\Desktop\\pluralsight-training\\reflectioncourse\\db-files\\db-pluralsight",
                "sa", "");
    }
}
