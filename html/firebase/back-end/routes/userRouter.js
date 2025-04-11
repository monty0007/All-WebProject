const userCtrl=require('../controller/userCtrl')
const router = require('express').Router()

router.post('/infor',userCtrl)

module.exports = router