'use client'

import React, { useState } from 'react';
import axios from 'axios';

export default function addProduct() {
    const [nameOfProduct, setNameOfProduct] = useState([])
    const [priceOfProduct, setPriceOfProduct] = useState([])
    const [descriptionOfProduct, setDescriptionOfProduct] = useState([])

    const addProduct = async (e) => {
        e.preventDefault()
        
        try {
            axios.post("http://localhost:3000/api/product", {
                name: nameOfProduct,
                price: priceOfProduct,
                description: descriptionOfProduct
            })

            setNameOfProduct("")
            setPriceOfProduct("")
            setDescriptionOfProduct("")
        }
        catch (error) {
            console.error("Error while adding product", error.message)
        }
    }
    
    return (
        <div>
            <h1>Add new product</h1>
            <form onSubmit={addProduct}>
                <label>Name - </label>
                <input type="text" value={nameOfProduct} onChange={(e) => setNameOfProduct(e.target.value)} />
                
                <label>Price - </label>
                <input type="text" value={priceOfProduct} onChange={(e) => setPriceOfProduct(e.target.value)} />

                <label>Description - </label>
                <input type="text" value={descriptionOfProduct} onChange={(e) => setDescriptionOfProduct(e.target.value)} />

                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}