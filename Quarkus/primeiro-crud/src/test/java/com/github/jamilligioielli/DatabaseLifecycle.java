package com.github.jamilligioielli;

import java.util.Map;

import org.testcontainers.containers.MySQLContainer;

import io.quarkus.test.common.QuarkusTestResourceLifecycleManager;

public class DatabaseLifecycle implements QuarkusTestResourceLifecycleManager {
    public static MySqlContainer<?> MYSQL = new MySQLContainer<>("mysql/mysql-server:8.0.19");

    @Override
    public Map<String, String> start() {
        MYSQL.start();
        Map<String, String> properties = new HashMap<>();
        properties.put("quarkus.datasource.url", MYSQL.getJdbcUrl());
        properties.put("quarkus.datasource.username", MYSQL.getJdbcUsername());
        properties.put("quarkus.datasource.password", MYSQL.getJdbcPassword());
        return null;
    }

    @Override
    public void stop() {
        if (MYSQL != null) {
            MYSQL.stop();
        }
    }
}
