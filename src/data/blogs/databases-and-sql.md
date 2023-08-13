---
title: "Databases and SQL"
thumbnail: "https://miro.medium.com/max/692/0*qm9j2GwJlgk-8adS.jpg"
date: "27 Sep, 2020"
author:
  name: "Devansh Baldwa"
  avatar: "https://miro.medium.com/fit/c/262/262/2*KA7hYyaXrUTbMnySgq3NNA.jpeg"
tags: ["Database", "MySQL", "Sql", "Rdbms", "Query"]
---

This article will help you gain a basic understanding of Databases, SQL, and Queries.

### Understanding Databases

A database can be defined as “any collection of related information”. Database Management Systems(DBMS) help users create and maintain a database. It helps in managing large amounts of info, importing/exporting data, in backups, etc. Any software application interacts with DBMS to create, read/retrieve, update, and delete (C.R.U.D) information.

There are two types of databases -

1. Relational Databases (SQL) —

![](https://miro.medium.com/max/692/0*qm9j2GwJlgk-8adS.jpg)

A **Relational Database** is a collection of **data** items with pre-defined relationships between them. These items are organized as a set of tables with columns and rows. Tables are used to hold information about the objects to be represented in the **database**. Data is organized into one or more tables where each table has rows and columns and a unique key that identifies each row. Popular **examples** of standard **relational databases** include Microsoft SQL Server, Oracle **Database**, MySQL, and IBM DB2.

2. Non-Relational Database (NoSQL) —

![](https://miro.medium.com/max/760/0*q_DRb0bAzNMRJxmm.png)

A **non**-**relational database** is a **database** that does not use the tabular schema of rows and columns found in most traditional **database** systems. Instead, **non**-**relational databases** use a storage model that is optimized for the specific requirements of the type of **data** being stored. Popular **examples** of standard **non-relational databases** include MongoDB, DocumentDB, Cassandra, Couchbase, Redis, and Neo4j.

### SQL vs NoSQL

![](https://miro.medium.com/max/584/0*GFD6cJMIAX3EItA1)

### Database Queries

**Database Queries** are requests made to DBMS for specific information. For example, Google Search is a query. In RDBMS, we generally write queries in MySQL. In Non-RDBMS, we write queries based on the DBMS we are using.

Example — In a database of Natural numbers, we query for odd numbers less than 10, then we get 1, 3, 5, 7, 9 as the result of the query.

### Structured Query Language (SQL)

SQL is a hybrid of 4 languages -

1. Data Query Language (DQL) — Used to query the database for information and get info stored in the database.
2. Data Definition Language (DDL) — Used for defining database schemas(layouts).
3. Data Control Language (DCL) — Used for controlling the access to data in database and for users & permissions management.
4. Data Manipulation Language (DML) — Used for inserting, updating and deleting data from the database.

### Datatypes in SQL

There are mainly 5 datatypes in SQL i.e.

1. INT — Used for integers
2. DECIMAL(M, N) — Used for decimal numbers, where M is the total number of digits and N is the number of digits after decimal places.
3. VARCHAR(a) — Used for character arrays i.e. strings, where ‘a’ is the length of the string.
4. BLOB — It stands for Binary Large Object. It's a structure that can store large amounts of binary data. It is used for images and files to be stored in the database.
5. TIMESTAMP — Generally used for recording when insertion/extraction from the database happens. The format is ‘YYYY-MM-DD HH:MM: SS’

![](https://miro.medium.com/max/1040/0*YdSfuwcU146tL4jx.jpg)

### Tables and Keys

In a Database Table, the columns generally represent a single attribute, whereas a row represents a data entry.

Whenever we create a table in the Relational Database, we have a special attribute that uniquely defines a row in the database which is called the Primary key. A primary key with no mapping is called the Surrogate key, and the one with mappings is called the Natural key.

Whenever we create a table in the Relational Database, we have a special attribute that uniquely defines a row in the database which is called the Primary key. A primary key with no mapping is called the Surrogate key, and the one with mappings is called the Natural key.

![](https://miro.medium.com/max/512/0*bYQnWQH2XirXgEKo)

A foreign key is an attribute that we can store on a database table that will link to another database table. A foreign key is a primary key if we consider another table. The foreign key helps us to define relationships between tables.

![](https://miro.medium.com/max/700/0*oz-Yu26SmlJT3CyD.gif)

The complicit key is a key that needs two attributes i.e. two columns. These two attributes combine together to form a Primary key, i.e. a complicit key is always a primary key.

The key which has multiple attributes to uniquely identify rows in a table is called a composite key. The difference between compound and the composite key is that any part of the compound key can be a foreign key, but the composite key may or maybe not a part of the foreign key.

### Creating Database Tables

The standard syntax to create Database Tables in SQL is,

```sql
CREATE TABLE student(
student_id INT PRIMARY KEY,
name VARCHAR(20) NOT NULL,
subject VARCHAR(20)
);
```

In the code above,

- student → Name of the Table
- student_id, name, subject → Name of Columns of the Table
- PRIMARY KEY is used for the column which will be the Primary Key of the Table.
- INT, VARCHAR is used to specify the Datatype of a Column.
- NOT NULL is used so that an element of a column is never NULL.
- PRIMARY KEY has a NOT NULL constraint by itself.

### Deleting Database Tables

The standard syntax to delete Database Tables in SQL is,

```sql
DROP TABLE student;
```

where ‘student’ is the name of Database Table we want to delete.

### Altering Database Tables

To add a column to the table,

```sql
ALTER TABLE student ADD gpa DECIMAL(3,2);
```

To remove a column from the table,

```sql
ALTER TABLE student DROP COLUMN gpa;
```

### Inserting Data in Tables

We can Insert Data like,

```sql
INSERT INTO student VALUES(1,'Devansh','Programming');
```

Suppose if one of the values is null, then,

```sql
INSERT INTO student(student_id,name) VALUES(7,'Dhoni');
```

Here, the subject will be NULL.

We can have a UNIQUE constraint (while defining a table) which ensures that all values in a column are different. The primary key has a unique constraint by itself.

```sql
address INT UNIQUE
```

If we want to have a default value for a column i.e. if we do not give a value,it will have a default, then

```sql
subject VARCHAR(20) DEFAULT 'undecided'
```

### Update & Delete

To update a table,

```sql
UPDATE student
SET subject='Math'
WHERE subject='Programming' OR subject='Physics';
```

In the code above,

- UPDATE → used to update a Database Table
- student → Name of the Table
- SET → to set the change we want to make
- WHERE → to give a condition to find the row of the table
- OR → to update when this or that is satisfied
- AND can also be used; to update when this and that are satisfied

To delete from a table,

```sql
DELETE FROM student
WHERE student_id = 7;
```

The above code will delete the complete row where student_id is 7.

### Queries

→The SELECT keyword tells the RDBMS that we want to get some information from it.

→ The \* is used to select and show all the columns,

```sql
SELECT student_id, name FROM student;
```

→ If we want the columns to be in Alphabetical order or in Numerical order,

```sql
SELECT name FROM student ORDER BY student_id DESC;
```

The above code will show the ‘name’ column with respect to the descending order of the ‘student_id’ column.

→ If we want only a specific number of rows, we can limit it like,

```sql
SELECT * FROM student LIMIT 5;
```

The above code will only give 5 rows of the database table.

→ With WHERE, we can use IN() to conditionalize and get only what we require like,

```sql
SELECT * FROM student WHERE name IN('Devansh','Dhoni');
```

### Nested Queries

We can combine multiple queries to get the required information like,

```sql
SELECT firstname, lastname
FROM employee
WHERE officecode IN(
SELECT officecode
FROM offices
WHERE country='India'
);
```

In the code above, firstname and lastname are the columns to be selected from the ‘employee’ table, wherein ‘officecode’ is obtained from another table name ‘offices’, for which there is a condition for the ‘country’.

### Conclusion

SQL has great utility to it and is very important to learn. This article has covered almost all the basics required to use SQL. To learn more about SQL you can refer,

→ [https://www.w3schools.com/sql/](https://www.w3schools.com/sql/)

→ [https://www.mysqltutorial.org/](https://www.mysqltutorial.org/)

→ [https://sqlzoo.net/](https://sqlzoo.net/)

Hope you have liked this article :-)
