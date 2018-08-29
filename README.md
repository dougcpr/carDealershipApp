# Car Dealership App (8.24.18)

Domain: Car Dealership

Interface: Web UI (SPA)

Platform: Node JS

Backend: JavaScript

FrontEnd: Angular 6

![Alt Text](https://imgur.com/a/uWNHUAa)



### Client Setup

To start the client side application, navigate to the root project directory

After cloning the package:

`git checkout 3149d05067337d5d5750bf6d2e00c05895d90d35`

This is version that is submitted for the project. I have been working on this throughout the weekend to learn how about n computations.

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
