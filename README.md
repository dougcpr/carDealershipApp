# Car Dealership App

Domain: Car Dealership

Interface: Web UI (SPA)

Platform: Node JS

Backend: JavaScript

FrontEnd: Angular 6

![Alt Text](car_app.gif)


### Client Setup

To start the client side application, navigate to the root project directory

1. Install the packages

`npm install`

2. Serve the developer instance, by default it goes to localhost:4200

`ng serve`

----
### Server Setup

Setup on Mac:
1. You will need homebrew to install mongodb and run it.
Instructions can be found here: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

2. I have created a personal database called Personal-DB. You can use whatever name as long as is consistent with where you dump the data into in step 3.
I use a GUI interface called robo3T to assist in working with the collection in my databases. You can download the Robot 3T (non-studio) version here: https://robomongo.org/.

3. I created a mongodump of the data. In order to import the data into your personal mongodb

`mongorestore --db database_name path_to_bson_file`

The .bson file is found inside `./server/dump/Personal-DB`
Your database name is whatever you named your database.

4. To start the server, navigate to the server directory with

`cd server`

5. Install the packages

`npm install`

6. Start the server

`npm start`
