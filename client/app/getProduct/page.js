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
            <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {listOfProducts.map(product => (
                <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                </tr>
                ))}
            </tbody>
            </table>
                        
            {/* {listOfProducts.map(product => (
                <li key={product._id}>{product.name}</li>
            ))} */}
        </>
    )
}
