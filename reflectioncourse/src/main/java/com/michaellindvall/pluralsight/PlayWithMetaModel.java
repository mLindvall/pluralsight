/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * PlayWithMetaModel.java
 * Aug 06, 2019
 */
package com.michaellindvall.pluralsight;

import com.michaellindvall.pluralsight.model.Person;
import com.michaellindvall.pluralsight.util.ColumnField;
import com.michaellindvall.pluralsight.util.Metamodel;
import com.michaellindvall.pluralsight.util.PrimaryKeyField;

import java.util.List;

/**
 * @author mlindvall
 */
public class PlayWithMetaModel {
    public static void main(String[] args) {

        Metamodel metamodel = Metamodel.of(Person.class);

        PrimaryKeyField primaryKeyField = metamodel.getPrimaryKey();
        List<ColumnField> columnFields = metamodel.getColumns();

        System.out.println("Primary key name = " + primaryKeyField.getName() +
                ", type = " + primaryKeyField.getType().getSimpleName());

        columnFields.forEach( c -> {
            System.out.println("column key name = " + c.getName() +
                                       ", type = " + c.getType().getSimpleName());
        });
    }
}
