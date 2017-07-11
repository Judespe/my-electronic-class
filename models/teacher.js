var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var config = require('../server_config/main');

// db config
mongoose.connect(config.database);

// Define how the teacher data will be stored in MongoDB
var TeacherSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	} 
});

// Saves teacher's password hashed
// TeacherSchema.pre('save', function(next) {
// 	var teacher = this;
// 	if (this.isModified('password') || this.isNew) {
// 		bcrypt.genSalt(10, function(err, salt) {
// 			if (err) {
// 				return next(err);
// 			}
// 			bcrypt.hash(teacher.password, salt, function(err, hash) {
// 				if (err) {
// 					return next(err);
// 				}
// 				teacher.password = hash;
// 				next();
// 			});
// 		});
// 	} else {
// 		return next();
// 	}
// });

// Comparison between password input (pw) and database password
TeacherSchema.methods.comparePassword = function(pw, callback) {
	// Comparison with bcrypt
	// bcrypt.compare(pw, this.password, function(err, isMatch) {
	// 	if (err) {
	// 		return callback(err);
	// 	}
	// 	callback(null, isMatch);
	// });

	// Comparison without encrypting
	var teacherPassword = this.password;
	(function(err, isMatch) {
		if (pw !== teacherPassword) {
			return callback (err);
		}
		callback(null, true);
	})();
};

module.exports = mongoose.model('Teacher', TeacherSchema);
