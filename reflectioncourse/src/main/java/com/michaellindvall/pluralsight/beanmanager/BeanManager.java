/**
 * (c) Michael Lindvall
 *
 * @author mlindvall
 * BeanManager.java
 * Aug 08, 2019
 */
package com.michaellindvall.pluralsight.beanmanager;

import com.michaellindvall.pluralsight.annotation.Inject;
import com.michaellindvall.pluralsight.annotation.Provides;
import com.michaellindvall.pluralsight.orm.EntityManager;
import com.michaellindvall.pluralsight.provider.H2ConnectionProvider;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Supplier;

/**
 * @author mlindvall
 */
public class BeanManager {
    private static BeanManager instance = new BeanManager();
    private final Map<Class<?>, Supplier<?>> registry = new HashMap<>();

    public static BeanManager getInstance() {
        return instance;
    }

    private BeanManager() {
        List<Class<?>> classes = Arrays.asList(H2ConnectionProvider.class);
        for (Class<?> clss : classes) {
            Method[] methods = clss.getDeclaredMethods();
            for (Method method : methods) {
                Provides provides = method.getAnnotation(Provides.class);
                if (provides != null) {
                    Class<?> returnType = method.getReturnType();
                    Supplier<?> supplier = () -> {
                        try {
                            if (!Modifier.isStatic(method.getModifiers())) {
                                final Object o = clss.getConstructor().newInstance();
                                return method.invoke(o);
                            } else {
                                return method.invoke(null);
                            }
                        } catch (Exception e) {
                            throw new RuntimeException(e);
                        }
                    };
                    registry.put(returnType, supplier);
                }
            }
        }


    }

    public <T> T getInstance(final Class<?> clss) {
        try {
            T t = (T) clss.getConstructor().newInstance();
            Field[] fields = clss.getDeclaredFields();
            for (Field field : fields) {
                Inject inject = field.getAnnotation(Inject.class);
                if (inject != null) {
                    final Class<?> injectionFieldType = field.getType();
                    Supplier<?> supplier = registry.get(injectionFieldType);
                    Object objectToInject = supplier.get();
                    field.setAccessible(true);
                    field.set(t, objectToInject);
                }
            }
            return t;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
