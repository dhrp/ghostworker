// Generated by CoffeeScript 1.6.3
(function() {
  var app, express;

  express = require('express');

  app = express();

  app.get('/', function(req, res) {
    var json;
    res.setHeader('Content-Type', 'application/json');
    json = {
      "Version": "0.2.2",
      "GitCommit": "5a2a5cc+CHANGES",
      "GoVersion": "go1.0.3"
    };
    return res.send(json);
  });

  app.listen(3001);

}).call(this);
