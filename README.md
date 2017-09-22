#greetingWebForm

Greeting web-form application

## Getting the git repository from GitHub into you machine (either by cloning the original or making a fork);

- Find the github repository on: "https://github.com/zukelwa20/greetingWebForm.git";
- Clone it in you local machine using: "git clone <name of the repo>" or Fork it to your local;

## Development of file structure;

- File structure organisation is organized in the manner of clean code and exposed the statics files;
- Organized my Views separatelty from the public files;
- Create your JS files inline with your views and public folder;
- But on the same directory with your folders;

## Run the server of the application on localhost;

- Start the server on localhost listening on *"process.env.PORT || 3000";*

## Install nodemon to run it on your console;  

- Use the command "npm install nodemon";
- This command allows you to run your application locally;

## Installing any system software

- Like NodeJS and MongoDB;
- npm install node
- npm install mongoDB

## Create the json file to keep your dependencies;

 - All the dependencies are kept in JSON file
 "version": "1.0.0",
 "description": "greeting application",
 "main": "index.js",
 "dependencies": {
   "body-parser": "^1.17.2",
   "express": "^4.15.4",
   "express-flash": "git://github.com/RGBboy/express-flash.git",
   "express-handlebars": "^3.0.0",
   "express-session": "^1.15.5",
   "mongoose": "^4.11.9",

  Note: *Run all these packages to update with the command npm init
  to check if all these are installed;*

## The .gitignore file is created to ignore the modules when the files are push to github;

 - Create the file that ingnore all the module into the local directory.

## Do all Configurations of your installetion;

  - Configure all packages that need to be used

*eg  const express = require('express');
  const exphbs = require('express-handlebars');
  const bodyParser = require('body-parser');
  const session = require('express-session');
  const flash = require('express-flash');*

## All routes are created in the index.js file separate from the functionality;
-All routes are created in the index.js file;

## Greet.js file contain all the functionality of the code;

#### greet.js consists of  
- takesname function :
Note: *takes in a name, goes to database and looks for the name,
if not found create it than return it, if found just return it.*

- showForm
Note *function to show the main form*

-greetNames
Note: *function to display names greeted*

- allGreeted function
Note: *All people greeted, you can use "allGreeted" on different route to show all the names*

- counting function

Note: *Counts all names that has been greeted and
  render the msg and the laterstcounter*


- greetedTimes function
Note: *this function goes to the data base and find the greeted name value and the counter
To show how many times the person has been greeted*

- compileGreeting
Note: *Takes in a name and a Language and compiles a greeting*

- resetFun function
Note: *Deletes the names entered to greeted route from the data base*


## Running the tests with mocha;

 - First install mocha
 - Run mocha command on the terminal to to check if test or functions are passing.

## Run it local using nodemon
 - command "nodemon <index.js>" or you can just run by nodemon

## Hosted on Heroku and it uses mlab to manage my data;

- makho-greetings.herokuapp.com
