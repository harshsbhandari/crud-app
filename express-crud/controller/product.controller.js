const Product = require("../models/product.model")

const addProduct = async (req, res) => {
    const newProduct = new Product(req.body)
    try {
        await newProduct.save()
        res.send("New product added")
    }
    catch (error) {
        res.send("Error in adding new product")
    }
}

const getAllProducts = async (req, res) => {
    try {
        const list = await Product.find()
        res.json(list)
    }
    catch (error) {
        res.send("Error while fetching all the products")
    }
}

const deleteProduct = async (req, res) => {
    try {
        const itemToBeDeleted = req.params.productName
        const flag = await Product.findOneAndDelete({ name: itemToBeDeleted })

        if (flag)
            res.send("Product delete successfully")
        else
            res.send("Product did not exist")
    }
    catch (error) {
        res.send("Error while deleting the product")
    }
}

const updateProduct = async (req, res) => {
    try {
        const itemToBeUpdated = req.params.productName
        const updatedProduct = req.body

        const flag = await Product.findOneAndUpdate({ name: itemToBeUpdated }, updatedProduct)
        
        if (flag)
            res.send("Product updated successfully")
        else
            res.send("Product did not exist")
    }
    catch (error) {
        res.send("Error while updating the product")
    }
}

module.exports = {addProduct, getAllProducts, deleteProduct, updateProduct}