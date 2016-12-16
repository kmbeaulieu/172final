//category model goes here
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
// needed?	ids:{
	//	type: Array
	//}
	name:{
		type: String,
		required: true
	}

});


module.exports = mongoose.model('category', CategorySchema);
