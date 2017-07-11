var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var Teacher = require('../models/teacher');
var config = require('./main');

module.exports = function(passport) {
	var opts = {};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
	opts.secretOrKey = config.secret;
	passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
		Teacher.findOne({id: jwt_payload.id}, (err, teacher) => {
			if (err) {
				return done(err, false);
			}
			if (teacher) {
				done(null, teacher);
			} else {
				done(null, false);
			}
		});
	}));
};