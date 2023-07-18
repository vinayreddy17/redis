const productController =require(`../controllers/productController.js`)

const router = require('express').Router()//doubt

router.post('/addProduct',productController.addProduct)

router.get('/allProducts',productController.getAllProducts)

router.get('/published',productController.getPublishedProduct)

router.get('/:id',productController.redisc,productController.getOneProduct)//used redis

router.put('/:id',productController.updateProduct)

router.delete('/deleteProduct',productController.deleteProduct)

module.exports = router




















