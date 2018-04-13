const mongoose = require('mongoose');
const News = require('../model/news.model'); //引入数据模型

//控制器里面控制数据

//增
exports.create = function(req, res, next) {
        const news = new News(req.body); //req.bod代表是post的数据提交，并且参数从body是获取
        news.save().then((data) => {
            //数据保存后，用json形式进行输出
            res.json(data)
        })
    }
    // //修
exports.update = function(req, res, next) {
    //先查找一个id值
    //params  :参数
    const id = req.params.id;
    News.findByIdAndUpdate(id, { $set: req.body }, { new: false }).then(data => {
        res.json(data);
    });
};
//5acd5ad366f3271a1839711e
// //删除
exports.remove = function(req, res, next) {
    var id = req.params.id;
    News.findByIdAndRemove(id, function(err, data) {
        res.json({ message: "数据删除成功" });
    })
}

//删除多个
exports.removes = function(req, res, next) {
    var ids = req.body.ids;
    ids = ids.split(",");
    console.log(ids);
    if (ids.length > 0) {
        News.remove({ _id: { $in: ids } }).then(() => {
            res.json({ 'message': '多条记录删除成功' });
        })
    }
}

//查找

function reverseTree(data, pid) {
    var result = [],
        temp;
    var data = JSON.parse(JSON.stringify(data));
    //将数据模型转为普通的object
    for (var i in data) {
        if (data[i].parentId === pid) {
            result.push(data[i]);
            temp = reverseTree(data, data[i]._id);
            if (temp.length > 0) {
                data[i].children = temp;
            }
        }
    }
    return result;
}

/*exports.list = function(req, res, next) {
    var type = req.params.type;
    Product.find({ type: type }, function(err, data) {
        var rpTree = reverseTree(data, null);
        res.json(rpTree);
    })
} */

exports.list = function(req, res, next) {
    var page = req.body.page ? req.body.page : 1;
    var rows = req.body.rows ? req.body.rows : 5;
    var queryCondition = {};

    if (req.body.title && req.body.title.trim().length > 0) {
        title = req.body.title;

        queryCondition = {
            title: new RegExp(title, 'i')
        };
    }

    if (req.body.cateId && req.body.cateId.trim().length > 0) {
        cateId = req.body.cateId;
        queryCondition = Object.assign(queryCondition, {
            cateId: cateId
        });
    }
    //console.log(queryCondition)
    News.paginate(queryCondition, { page: +page, limit: +rows }, function(
        err,
        result
    ) {
        result.rows = result.docs;
        delete result.docs;
        res.json(result);
    });
}