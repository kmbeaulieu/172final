var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  address: {

  }
});

module.exports = mongoose.model('user', UserSchema);
