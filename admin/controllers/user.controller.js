const mongoose = require('mongoose');
const User = require('../model/user.model'); //引入数据模型
var MongoClient = require('mongodb').MongoClient;


//控制器里面控制数据

//增
exports.create = function(req, res, next) { //暴露接口
    const user = new User(req.body); // 实例化对象，获取body提交的数据
    user.save().then(data => {
        res.json(data); //数据保存 用json形式输出
    })
}

//删
exports.remove = function(req, res, next) {
    var id = req.params.id;
    User.findByIdAndRemove(id, function(err, data) {
        res.json({ message: "数据删除成功" });
    })
}

//删除多个
exports.removes = function(req, res, next) {
    var ids = req.body.ids;
    ids = ids.split(",");
    //console.log(ids);
    if (ids.length > 0) {
        User.remove({ _id: { $in: ids } }).then(() => {
            res.json({ 'message': '多条记录删除成功' });
        })
    }
}


//改
exports.update = function(req, res, next) {
    //3种引入参数方式：req.body  req.query  req.params
    const id = req.params.id; //查找一个id值
    User.findByIdAndUpdate(id, { $set: req.body }, { new: false }).then(user => {
        //参2：修改值   参3：新数据默认不添加
        res.json(user);
    })
}

//查-----数据的分页
exports.list = function(req, res, next) {
    var page = req.query.page ? req.query.page : 1;
    var rows = req.query.rows ? req.query.rows : 6;
    //console.log(req.query.rows)
    var querycondition = {};

    if (req.body.name && req.body.name.trim().length > 0) { //查询条件 根据name值查询
        name = req.query.name;
        querycondition = {
            name: new RegExp(name, 'i')
        };
    }
    //console.log(querycondition);

    User.paginate(querycondition, { page: +page, limit: +rows }, function(err, result) {
        result.rows = result.docs; //将数据库json数据改成符合easyUI的数据格式 
        delete result.docs;
        //console.log(result.rows);
        res.json(result);
    });
}


exports.login = function(req, res, text) {
    var DB_CONN_STR = 'mongodb://localhost:27017';
    var username = req.body.username; //post方式获取表单value值
    var password = req.body.password;
    MongoClient.connect(DB_CONN_STR, function(err, client) {
        // console.log(client); 打印出MongoClient对象 代表连接成功
        var db = client.db('cms');
        var coll = db.collection('users');
        //console.log(coll); //collection 对象
        coll.find({ name: username, password: password }).toArray(function(err, results) {
            if (results.length !== 0) {
                //res.json(results);
                res.redirect('http://127.0.0.1:8020/front/index.html');
            } else {
                res.send('用户名或密码错误');
            }
        })
    })
}