### Schema

-- CREATE DATABASE burgers_db;
-- USE burgers_db;
-- Since im using free version of JAWSDB

USE yzdbmjxmr0x85ibr;
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
