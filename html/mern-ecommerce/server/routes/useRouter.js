const userCtrl=require('../controllers/userCtrl')
const router=require('express').Router()
const auth=require('../middleware/auth')

router.post('/register',userCtrl.register)
router.post('/refreshtoken',userCtrl.refreshtoken)
router.post('/login',userCtrl.login)
router.get('/logout',userCtrl.logout)
router.get('/infor',auth,userCtrl.getUser)

module.exports=router