var mongoose = require('mongoose');
const Cate = require('../model/catemodel'); //数据模型


//增
exports.create = function(req, res, next) {
        const cate = new Cate(req.body); //req.bod代表是post的数据提交，并且参数从body是获取
        cate.save().then((data) => {
            //数据保存后，用json形式进行输出
            res.json(data)
        })
    }
    // //修
exports.update = function(req, res, next) {
    //先查找一个id值
    //params  :参数
    const id = req.params.id;
    Cate.findByIdAndUpdate(id, { $set: req.body }, { new: false }).then(data => {
        res.json(data);
    });
};
//5acd5ad366f3271a1839711e
// //删除
exports.remove = function(req, res, next) {
    var id = req.params.id;
    var ids = [];
    Cate.findOne({ _id: id }, function(err, doc) {
        if (doc) {
            ids = [doc._id];
            doc.getChildren(function(err, docs) {
                for (var i = 0; i < docs.length; i++) {
                    ids.push(docs[i]._id)
                }

                Cate.remove({ _id: { $in: ids } }).then(data => {
                    res.json({ respond: '删除数据成功' })
                })
            });
        }
    })
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

exports.list = function(req, res, next) {
    var type = req.params.type;
    Cate.find({ type: type }, function(err, data) {
        var rpTree = reverseTree(data, null);
        //console.log(data);
        res.json(rpTree);
    })
}