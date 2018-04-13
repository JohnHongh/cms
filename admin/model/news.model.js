const mongoose = require('mongoose'); //引入模型
var mongoosePaginate = require('mongoose-paginate'); //引入数据分页 模块

var NewsSchema = new mongoose.Schema({ //定义模板
    title: String,
    desc: String,
    cateId: mongoose.Schema.ObjectId
});

NewsSchema.plugin(mongoosePaginate);


//const User = mongoose.model('User', { name: String }); //数据模型 自建user表


//module.exports = User;
module.exports = mongoose.model('News', NewsSchema); // Model.paginate()