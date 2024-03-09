const express = require("express")
const router = express.Router()
const productController = require("../controller/product.controller")

router.route("/product")
    .get(productController.getAllProducts)
    .post(productController.addProduct)

router.route("/product/:productName")
    .delete(productController.deleteProduct)
    .put(productController.updateProduct)

module.exports = router
