import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    console.log(products);


    const removeHandle = (productId) => {
        dispatch(remove(productId))
    }
    return (
        <div className='cardContainer'>
            {products.map((product) => {
                const { image, price, id, title } = product
                return <div className='card' key={id}>
                    <img className="cardImg" src={image}></img>
                    <p>{title}</p>
                    <p>Price:{price}</p>
                    <button onClick={() => removeHandle(id)} className="btn">Remove</button>
                </div>
            })}
        </div>
    )
}

export default Cart
