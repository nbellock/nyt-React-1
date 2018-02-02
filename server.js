/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
const express = require('express'); // Server
const bodyParser = require ('body-parser'); // JSON Middleware
const logger = require('morgan'); // REST Logger
const mongoose = require('mongoose'); // MongoDB ORM
const routes = require("./routes");

/////////////////////////////////////////////// /* Variables */ //////////////////////////////////////////////////////////
let PORT = process.env.PORT || 8080;
let mongooseConnection = mongoose.connection;

/////////////////////////////////////////////// /* Initialize Express */ //////////////////////////////////////////////////////////
let app = express();
app.use(routes); // Add routes, both API and View

/////////////////////////////////////////////// /* Express Middleware */ //////////////////////////////////////////////////////////
app.use(bodyParse.urlencoded({extended: false})); // Use body-parser for handling form submissions
app.use(bodyParser.json()); // Allows For JSON Interactions Between Client & Server
app.use(express.static("client/build")); // Serve Static / React Pages


/////////////////////////////////////////////// /* Mongoose Configurations*/ //////////////////////////////////////////////////////////
mongoose.Promise = global.Promise; // Set up promises with mongoose

mongoose.connect( // Connect to the Mongo DB
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

mongooseConnection.on('error', console.error.bind(console, 'connection error:'));

mongooseConnection.once('open', function() {
  console.log(`Sucessfully Connected to Mongo DB !`); // If Connection is successful, Console.log(Message)
});

/////////////////////////////////////////////// /* Start Server */ //////////////////////////////////////////////////////////
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
