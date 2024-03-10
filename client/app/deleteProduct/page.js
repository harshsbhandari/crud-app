'use client'

import React, { useState } from 'react';
import axios from 'axios';

export default function deleteProduct() {
    const [nameOfProduct, setNameOfProduct] = useState([])

    const deleteProduct = async (e) => {
        e.preventDefault()

        try {
            axios.delete(`http://localhost:3000/api/product/${nameOfProduct}`)

            setNameOfProduct("")
        }
        catch (error) {
            console.error("Error while deleting the product", error.message)
        }
    }

    return (
        <div>
            <form onSubmit={deleteProduct}>
                <h1>Name the product you want to delete</h1>
                <label>Name - </label>
                <input type="text" value={nameOfProduct} onChange={(e) => setNameOfProduct(e.target.value)} />

                <button type="submit">Delete Product</button>
            </form>
        </div>
    )
}