var express = require('express');
var router = express.Router();
var dataCtrl = require('../controllers/catecontrollers');

router.post('/data', dataCtrl.create);

router.put('/data/:id', dataCtrl.update);

router.delete('/data/:id', dataCtrl.remove);

router.get('/list/:type', dataCtrl.list);

module.exports = router;