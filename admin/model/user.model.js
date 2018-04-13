const mongoose = require('mongoose'); //引入模型
var mongoosePaginate = require('mongoose-paginate'); //引入数据分页 模块

var UserSchema = new mongoose.Schema({ //定义模板
    name: String,
    password: String,
    age: Number,
    gender: String,
    city: String
});

UserSchema.plugin(mongoosePaginate);


//const User = mongoose.model('User', { name: String }); //数据模型 自建user表


//module.exports = User;
module.exports = mongoose.model('User', UserSchema); // Model.paginate()