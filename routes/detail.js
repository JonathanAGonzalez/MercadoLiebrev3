const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

router.get('/detail/:id/:category',productsController.index)


module.exports = router;