var express = require('express');
var router = express.Router();
var itemsCtrl = require('../../controllers/api/items');

// router.use(require('../../config/auth'));
router.get('/', itemsCtrl.index);
router.get('/:id', itemsCtrl.show);
router.post('/', itemsCtrl.create);
router.delete('/:id', itemsCtrl.delete);
router.put('/:id', itemsCtrl.update);

module.exports = router; 