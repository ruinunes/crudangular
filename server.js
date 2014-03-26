/* jslint node: true */
'use strict';

var express = require('express');
var people  = require('./routes/people');
var server  = express();
var portNumber = 9000;
var baseURL = '/';

server.use(express.json());
server.use(express.urlencoded());
server.use(express.static(__dirname + '/app'));

server.get(baseURL    + 'people',     people.findAll);
server.get(baseURL    + 'people/:id', people.findById);
server.post(baseURL   + 'people',     people.addPerson);
server.put(baseURL    + 'people/:id', people.updatePerson);
server.delete(baseURL + 'people/:id', people.deletePerson);

server.listen(portNumber);//get the server app running...
console.log('\nNode server listening on port ' + portNumber);

//basic error handling
server.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, '500 - Internal server error');
});