package com.michaellindvall.type_bounds;

import lombok.Getter;

public class SortedPair<T extends Comparable<T>> {

    @Getter
    private final T first;
    @Getter
    private final T second;

    public SortedPair(T left, T right) {
        if (left.compareTo(right) < 0) {
            this.first = left;
            this.second = right;
        } else {

            this.first = right;
            this.second = left;
        }
    }

}