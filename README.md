# express-endpoints

Express middleware to request all registered routes from from a web service

## Usage

~~~js
var express = require('express');
var endpoints = require('express-endpoints');

// Create a new express app:
var app = express();

// Add a route to query all endpoints:
app.get('/endpoints', endpoints());

// Calling `/endpoints` will respond with a JSON formatted string like this:
// 
// {
//   "/": ["GET"],
//   "/other": ["GET", "POST"],
//   "/healthcheck": ["GET"],
//   "/endpoints": ["GET"],
//   "/all.*/": ["PUT", "POST"]
// }
~~~

## License

MIT
