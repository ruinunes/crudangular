/* jslint node: true */
'use strict';

/*
HTTP/1.1 RFC, for REST API reference
http://www.w3.org/Protocols/rfc2616/rfc2616.html
In this example case, each exports function, deals with a dummy object dataset.
*/



exports.findAll = function(req, res) {
  res.send(data);
};



exports.findById = function(req, res) {

  var person = data[req.params.id];

  res.send(
    {
      id: req.params.id,
      name: person.name,
      job: person.job,
      email: person.email,
      enabled: person.enabled
    }
  );

};



exports.addPerson = function(req, res) {

  if(!req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('email')){
    res.statusCode = 400;
    return res.send('Error 400: Bad request, POST syntax incorrect.');
  }

  //TODO improve sanitization/validation
  var newPerson = {};
  newPerson.id = data.length;
  newPerson.name = req.body.name;
  newPerson.job = req.body.job;
  newPerson.name = req.body.email;
  newPerson.enabled = req.body.enabled;

  console.log('Added a person.');
  data.push(newPerson);
  res.statusCode = 201;
  res.send('');

};



exports.updatePerson = function(req, res) {

  if(!req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('email')){
    res.statusCode = 400;
    return res.send('Error 400: Bad request, PUT syntax incorrect.');
  }

  var found = false;
  var id = req.params.id;
  for (var i = data.length - 1; i >= 0; i--) {
    if(data[i].id == id) {
      found = true;
      break;
    }
  }

  if(found) {
    console.log('Updating person: ' + id);
    data[i].name = req.body.name;
    data[i].job = req.body.job;
    data[i].email = req.body.email;
    data[i].enabled = req.body.enabled;
    res.statusCode = 200;
    return res.send('');
  }

  res.statusCode = 410;
  return res.send('Error 410: resource no longer available.');

};



exports.deletePerson = function(req, res) {

  var id = req.params.id;

  for (var i = data.length - 1; i >= 0; i--) {

    if(data[i].id.toString() == id){
      data.splice(i,1);
      console.log('Person deleted.');
      res.statusCode = 200;
      return res.send(true);
    }

  }

  res.statusCode = 404;
  return res.send(false);

};



//dummy people data
var data = [
      {
        "id": 0,
        "name": "Ron Burgundy",
        "job": "Anchorman",
        "email": "ron@address.com",
        "enabled": true
      },
      {
        "id": 1,
        "name": "Veronica Corningstone",
        "job":"Network Co-anchor",
        "email": "veronica@address.com",
        "enabled": true
      },
      {
        "id": 2,
        "name": "Brian Fantana",
        "job": "Field Reporter",
        "email": "fantana@address.com",
        "enabled": true
      },
      {
        "id": 3,
        "name": "Brick Tamland",
        "job":"Weatherman",
        "email": "username@address.com",
        "enabled": true
      },
      {
        "id": 4,
        "name": "Champ Kind",
        "job":"Sportscaster",
        "email": "username@address.com",
        "enabled": false
      },
      {
        "id": 5,
        "name": "Ed Harken",
        "job":"News Director",
        "email": "username@address.com",
        "enabled": true
      }
    ];
