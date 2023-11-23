const express=require('express')
const { adminlogin,addProduct, getProducts,editProduct,deleteProduct, getSingleProduct, userSignUp, userlogin, getUsers, deleteUser} = require('../controllers/logic')


const router=new express.Router()

router.post('/admin/login',adminlogin)
router.post('/admin/add-product',addProduct)
router.get('/product-access',getProducts)
router.put('/product-update/:id',editProduct)
router.delete('/product-delete/:id',deleteProduct)
router.get('/one-product/:id',getSingleProduct)
router.post('/user-signUp',userSignUp)
router.post('/user-login',userlogin)
router.get('/user-access',getUsers)
router.delete('/user-delete/:id',deleteUser)






//export router
module.exports=router