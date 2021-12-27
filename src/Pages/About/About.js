import React from "react";

export default function About() {
  return (
    <div className="mt">
      <h2 className="bg-success text-info"> About</h2>
      <p>
        A CRUD app is a specific type of software application that consists of four basic operations; Create, Read, Update, Delete.,<br />

        At a high level, a CRUD apps consist of three parts; the database, user interface, and APIs.<br /><br />

        Database
        The database is where your data is stored. A database management system is used to manage the database. There are several different types of database management systems (DBMS) that can be categorized by how they store data; relational (SQL), Document (NoSQL). If you are deciding what DBMS to choose for your CRUD app, here’s a list of the 14 best database management systems . Going forward, our content will focus on SQL. SQL databases consist of tables. Tables consist of records. Records consist of fields. Fields consist of data.<br /><br />

        User Interface
        The user interface (UI) is what your users interact with. Due to the increasing popularity of applications, businesses are now prioritizing user interface design and user experience.<br /><br />

        APIs
        Finally, the APIs are how your application informs your database of what functions to perform. These functions can be modeled in different ways but they are designed to perform four basic CRUD operations; Create, Read, Update, Delete.<br /><br />


      </p>
    </div>
  );
}
