'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var config = require('./server_config/main');
var Teacher = require('./models/teacher');
var jwt = require('jsonwebtoken');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

//and remove cacheing so we get the most recent comments
  // res.setHeader('Cache-Control', 'no-cache');
  next();
});

// Log requests to console
app.use(morgan('dev'));

app.use(passport.initialize());
require('./server_config/passport')(passport);

// API group routes
var teachersRoutes = express.Router();
var apiRoutes = express.Router();

// Register new teachers
teachersRoutes.post('/register', function(req, res) {
	if(!req.body.email || !req.body.password) {
		res.json({success: false, message: 'Please enter email and password'});
	} else {
		var newTeacher = new Teacher({
			email: req.body.email,
			password: req.body.password
		});

		newTeacher.save(function(err) {
			if (err) {
				return res.json({success: false, message: 'That email address already exists'});
			}
			res.json({success: true, message: 'New teacher successfully created !'});
		});
	}
});

apiRoutes.post('/login', function(req, res) {
	Teacher.findOne({
		email: req.body.email
	}, function(err, teacher){
		if (err) throw err;
		if (!teacher) {
			res.send({ success: false, message: 'Authentication failed. Teacher does not exist.'});
		} else {
			// Check if password matches
			teacher.comparePassword(req.body.password, function(err, isMatch) {
				console.log('isMatch : ', isMatch);
				console.log('err : ', err);
				if (isMatch && !err) {
					// Create token
					var token = jwt.sign(teacher, config.secret, {
						expiresIn: 10080 // in seconds (10080 = 1 week)
					});
					res.json({success: true, token: 'JWT ' + token});
				} else {
					res.send({success: false, message: 'Authentication failed. Password did not match.'});
				}
			});
		}
	});
});

apiRoutes.get('/dashboard', passport.authenticate('jwt', {session: false}), function(req, res) {
	res.send('It worked ! Teacher id is : ' + req.user._id);
});

apiRoutes.get('/', function(req, res) {
	res.json({ message: 'API Initialized !!'});
});

app.use('/teachers', teachersRoutes);
app.use('/api', apiRoutes);

app.get('/', function(req, res) {
	res.send('Welcome to the server home page !');
});

app.listen(port, function() {
	console.log('api running on port ' + port);
});