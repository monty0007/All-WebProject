const productCtrl = require('../controller/productCtrl')
const router = require('express').Router()

router.get('/products',productCtrl.getProducts)
router.post('/products',productCtrl.createProducts)

module.exports= router