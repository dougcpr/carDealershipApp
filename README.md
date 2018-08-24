# Car Dealership App (8.24.18)

Domain: Car Dealership

Interface: Web UI (SPA)

Platform: Node JS

Backend: JavaScript

FrontEnd: Angular 6


### Client Setup

To start the client side application, navigate to the root project directory

Install the packages

`npm install`

Serve the developer instance, by default it goes to localhost:4200

`ng serve`

----
### Server Setup

I created a mongodump of the data. In order to import the data into your personal mongodb

`mongorestore --db database_name path_to_bson_file`

The .bson file is found inside `./server/dump/Personal-DB`
Your database name is whatever you named your database.

To start the server, navigate to the server directory with

`cd server`

Install the packages

`npm install`

Start the server

`npm start`
