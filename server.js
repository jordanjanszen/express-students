// Require modules
const express = require('express');
const path = require('path'); // path is a core Node module 
const studentDB = require('./data/student-db');

// Create the Express app
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// This is a Node method that builds a properly formatted path from segment strings passed to it.


// Mount middleware (app.use)


// Mount routes
app.get('/', function(req, res, next) {
    res.redirect('/home');
});
app.get('/home', function(req, res, next) {
    res.render('home');
});
app.get('/students', function(req, res, next) {
    res.render('students/index', {
        students: studentDB.getAll()
    });
});

// Tell the app to listen on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
});

