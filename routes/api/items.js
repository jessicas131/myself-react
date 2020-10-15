var express = require('express');
var router = express.Router();
var itemsCtrl = require('../../controllers/api/items');

router.use(require('../../config/auth'));
router.get('/', checkAuth, itemsCtrl.index);
router.get('/:id', checkAuth, itemsCtrl.show);
router.post('/', checkAuth, itemsCtrl.create);
router.delete('/:id', checkAuth, itemsCtrl.delete);
router.put('/:id', checkAuth, itemsCtrl.update);


function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router; 