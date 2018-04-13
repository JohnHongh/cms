 const mongoose = require('mongoose');
 mongoosePaginate = require('mongoose-paginate')

 var Productschema = new mongoose.Schema({
     title: String,
     price: Number,
     data: String,
     cateId: mongoose.Schema.ObjectId
 })

 //const User = mongoose.model('User',{name:String,gender:String});
 Productschema.plugin(mongoosePaginate);
 module.exports = mongoose.model('Product', Productschema);