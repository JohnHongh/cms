var express = require('express');
var router = express.Router();

var dataCtrl = require('../controllers/user.controller'); //引入user数据控制器

//分配路由(路由自定义)
router.post('/data', dataCtrl.create); //添加

router.delete('/data/:id', dataCtrl.remove); //删除

router.put('/data/:id', dataCtrl.update); //修改

router.get('/list', dataCtrl.list); //查询

router.post('/data/removes', dataCtrl.removes); //删除多跳

router.post('/login', dataCtrl.login);

module.exports = router;