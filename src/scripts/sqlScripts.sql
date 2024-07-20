-- DDL Queries 

-- Creating Store Table
CREATE TABLE Store (
    store_id SERIAL PRIMARY KEY,
    store_name varchar(50),
    address varchar(50)
);

-- Creating Book Table
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    book_title varchar(300) Not Null,
    book_description varchar(1000),
    book_author varchar(50) Not Null,
    book_publisher varchar(50) Not Null,
    book_pages int,
    created_on timestamp Not Null,
    created_by varchar(50) Not Null,
    store_id int REFERENCES Store (store_id)
);

-- DML Queries

-- Inserting an Entity
INSERT INTO Store (store_name, address) VALUES (``, ``);