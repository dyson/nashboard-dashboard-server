var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    nashboard_server = require('nashboard-server');

var auth = express.basicAuth(function(user, password) {
      return (user == "user" && password == "password") ? true : false;
    },'Nashboard');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 8000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.set("view options", {layout: false});
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', auth, routes.index);

app.listen();

nashboard_server.run(app);
