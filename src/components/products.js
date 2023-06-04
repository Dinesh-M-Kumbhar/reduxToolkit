import React, { useState, useEffect } from 'react'
import { add } from "../store/cartSlice"
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../store/productSlice";
const Products = () => {
    const { data: product, status } = useSelector((state) => state.product)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const addHandle = (product) => {
        dispatch(add(product));
    }

    // console.log(data)
    return (
        <div className="cardContainer">
            {
                product && product.map(product => {
                    const { image, price, id, title } = product
                    return <div className="card" key={id}>
                        <img className="cardImg" src={image}></img>
                        <p>{title}</p>
                        <p>Price:{price}</p>
                        <button onClick={() => addHandle(product)} className="btn">Add to Cart</button>
                    </div>
                })
            }
        </div>
    )
}

export default Products
