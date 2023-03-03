DROP DATABASE IF EXISTS tuner_app_database;
CREATE DATABASE tuner_app_database; 

\c tuner_app_database; 

DROP TABLE songs;
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT, 
    is_favorite BOOLEAN
);
