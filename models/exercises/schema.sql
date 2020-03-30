DROP DATABASE IF EXISTS exercises_db;
CREATE DATABASE exercises_db;

USE exercises_db;

CREATE TABLE IF NOT EXISTS exercises (
id INT AUTO_INCREMENT,
name VARCHAR(45) NOT NULL,
description VARCHAR(250) NOT NULL,
muscle_1 VARCHAR(65) NOT NULL,
muscle_2 VARCHAR(65) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS muscles_primary (
    id INT AUTO_INCREMENT,
    muscle_id INT NOT NULL,
    exercise_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS muscles_secondary (
    id INT AUTO_INCREMENT,
    muscle_id INT NOT NULL,
    exercise_id INT NOT NULL,
    PRIMARY KEY (id)
);
SELECT * FROM exercises;
