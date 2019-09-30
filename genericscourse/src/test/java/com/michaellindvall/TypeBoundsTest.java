package com.michaellindvall;

import static org.junit.Assert.assertEquals;

import com.michaellindvall.type_bounds.SortedPair;

import org.junit.Test;

public class TypeBoundsTest {

    @Test
    public void shouldRetainOrderOfOrderedPair() {
        SortedPair<Integer> pair = new SortedPair<Integer>(1, 2);
        assertEquals(1, pair.getFirst().intValue());
        assertEquals(2, pair.getSecond().intValue());
    }    

    @Test
    public void shouldFlipOrderOfOrderedPair() {
        SortedPair<Integer> pair = new SortedPair<Integer>(2,1);
        assertEquals(1, pair.getFirst().intValue());
        assertEquals(2, pair.getSecond().intValue());
    }    

}