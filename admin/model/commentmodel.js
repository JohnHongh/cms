const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');


var Commentschema = new mongoose.Schema({
    text: String, //符合easyUI的格式，必须是text
    content: String,
    cateId: mongoose.Schema.ObjectId //添加分类时 将点击元素的ID作为parentID
})

Commentschema.plugin(mongoosePaginate);
module.exports = mongoose.model('Comment', Commentschema);