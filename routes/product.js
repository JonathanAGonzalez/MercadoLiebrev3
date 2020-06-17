const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

router.get('/add', productsController.create);
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.update);
router.get('/ok', productsController.modificado);
router.post("/detail/:id", productsController.delete)







router.get('/detail/:id/:category', productsController.index)



module.exports = router;