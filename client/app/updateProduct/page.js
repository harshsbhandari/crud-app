'use client'

import React, { useState } from 'react';
import axios from 'axios';

export default function updateProduct() {
    const [nameOfProduct, setNameOfProduct] = useState([])
    const [priceOfProduct, setPriceOfProduct] = useState([])
    const [descriptionOfProduct, setDescriptionOfProduct] = useState([])

    const updateProduct = async (e) => {
        e.preventDefault()

        try {
            axios.put(`http://localhost:3000/api/product/${nameOfProduct}`, {
                price: priceOfProduct,
                description: descriptionOfProduct
            })

            setNameOfProduct("")
            setPriceOfProduct("")
            setDescriptionOfProduct("")
        }
        catch (error) {
            console.error("Error while updating the product", error.message)
        }
    }

    return (
        <div>
            <form onSubmit={updateProduct}>
                <label>Name - </label>
                <input type="text" value={nameOfProduct} onChange={(e) => setNameOfProduct(e.target.value)} />
                
                <label>Price - </label>
                <input type="text" value={priceOfProduct} onChange={(e) => setPriceOfProduct(e.target.value)} />

                <label>Description - </label>
                <input type="text" value={descriptionOfProduct} onChange={(e) => setDescriptionOfProduct(e.target.value)} />

                <button type="submit">Update Product</button>
            </form>
        </div>
    )
}