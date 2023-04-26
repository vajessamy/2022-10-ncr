
// Require statements are here to allow access to certain modules that we have in our application. These modules can then be used anywhere in the file that they are required in.
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config();

// database connection
require('./config/database');

// This creates our express app using the express module we required on line 2. This adds all of the methods and other functionality to our app so we can then use it to process any request that comes in to our server.
const app = express();

// This line uses the information stored in our require statement for morgan to create a logger. This will put some output into our console every time a request is made to our server. This is really good for tracking what exactly is happening when a request comes through! The 'dev' part just means it's using some special code for development purposes.
app.use(logger('dev'));

// This line tells express to use our express.json() method to convert any data given to our backend via a req.body into usable json code. (JSON stands for JavaScript Object Notation) This allows us to use the data we get from the frontend to do stuff with it on the backend, usually for interfacing with our database!
app.use(express.json());

// app.use tells us it's a middleware
// favicon tells us we're using the data stored in the serve-favicon require statement above
// path.join tells express that we're looking for a specific file path for serve-favicon
// __dirname is just a standard parameter telling path that we're looking for a specific directory with the name 'build'
// the third parameter in this method tells path that we're looking for a file named 'favicon.ico' inside of the previous directory.
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));

// app.use tells us it's a middleware
// express.static tells express that the following path is where to go for any static files (such as pictures or other media)
// path.join tells express that we're looking for a specific file path for the static folder
// __dirname is just a standard parameter telling path that we're looking for a specific directory with the name 'build;
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));

// API ROUTES GO HERE ONCE WE HAVE THEM
app.use('/api/users', require('./routes/api/users'));


// FOLLOWING IS THE CATCH ALL ROUTE:
// The catch all route is put at the end of the file because it is there for any route that wasn't used by our express backend. This means that no matter what the url has at the end of it, if it's a get request this route will catch it and do something with it.
// the * in the path is used as a 'wildcard' in programming, usually to denote that anything can go there.
app.get('/*', (req, res) => {
  // res.sendFile sends a file back to the front end when the route is hit.
  // path.join tells express that we're looking for a specific file path
  // __dirname is just a standard parameter telling path that we're looking for a specific directory with the name 'build'.
  // 'index.html' is the specific file that we're looking for inside of the 'build' folder. This is the file that is going to be sent to the front end!
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// This line sets the port that we are going to use in our app.listen. process.env.PORT is used first to catch if there is a port specified in our config vars when we actually deploy our project. If there is none, it automatically uses the port of 3001.
const port = process.env.PORT || 3001;

// app.listen tells our express app to run on a specific port, and the function after that port tells express to run a certain function once that connection has been made. In this case, we're just logging that it is running on whatever port we are using.
app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
 
