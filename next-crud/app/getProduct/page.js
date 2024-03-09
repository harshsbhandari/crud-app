'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function getProduct() {
    const [listOfProducts, setListOfProducts] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/product")
                setListOfProducts(response.data)
            }
            catch (error) {
                console.error('Error fetching products:', error.message);
            }
        }
        fetchProduct()
    }, [])

    return (
        <>
            <h1>All products list</h1>
            
            {listOfProducts.map(product => (
                <li key={product._id}>{product.name}</li>
            ))}
        </>
    )
}
