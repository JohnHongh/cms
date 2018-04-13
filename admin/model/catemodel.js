 const mongoose = require('mongoose');
 materializedPlugin = require('mongoose-materialized');

 var Cateschema = new mongoose.Schema({
     type: Number,
     text: String, //符合easyUI的格式，必须是text
     parentId: mongoose.Schema.ObjectId //添加分类时 将点击元素的ID作为parentID
 })

 //const User = mongoose.model('User',{name:String,gender:String});
 Cateschema.plugin(materializedPlugin);
 module.exports = mongoose.model('Cate', Cateschema);