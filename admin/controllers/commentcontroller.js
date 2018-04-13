var mongoose = require('mongoose');
const Com = require('../model/commentmodel'); //数据模型


//增
exports.create = function(req, res, next) {
        const com = new Com(req.body); //req.bod代表是post的数据提交，并且参数从body是获取
        com.save().then((data) => {
            //数据保存后，用json形式进行输出
            res.json(data)
        })
    }
    // //修
exports.update = function(req, res, next) {
    //先查找一个id值
    //params  :参数
    const id = req.params.id;
    Com.findByIdAndUpdate(id, { $set: req.body }, { new: false }).then(data => {
        res.json(data);
    });
};
//5acd5ad366f3271a1839711e
// //删除
exports.remove = function(req, res, next) {
    var id = req.params.id;
    Com.findByIdAndRemove(id, function(err, data) {
        res.json({ message: "数据删除成功" });
    })
}

exports.removes = function(req, res, next) {
    var ids = req.body.ids;
    ids = ids.split(",");
    console.log(ids);
    if (ids.length > 0) {
        Com.remove({ _id: { $in: ids } }).then(() => {
            res.json({ 'message': '多条记录删除成功' });
        })
    }
}

//查找

exports.list = function(req, res, next) {
    var page = req.body.page ? req.body.page : 1;
    var rows = req.body.rows ? req.body.rows : 5;
    var queryCondition = {};

    if (req.body.text && req.body.text.trim().length > 0) {
        text = req.body.text;

        queryCondition = {
            text: new RegExp(text, 'i')
        };
    }

    if (req.body.cateId && req.body.cateId.trim().length > 0) {
        cateId = req.body.cateId;
        queryCondition = Object.assign(queryCondition, {
            cateId: cateId
        });
    }

    Com.paginate(queryCondition, { page: +page, limit: +rows }, function(
        err,
        result
    ) {
        result.rows = result.docs;
        delete result.docs;
        res.json(result);
    });
};