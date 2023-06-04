import React from 'react'
import { Link } from "react-router-dom"
import Home from "./home";
import Cart from "./cart"
import { useSelector } from 'react-redux';


const Navbar = () => {
    const item = useSelector((state) => state.cart);
    return (
        <div className="NavDiv">
            <span>Logo</span>
            <Link to="/" element={<Home />}>Home</Link>
            <Link to="/cart" element={<Cart />}>Cart</Link>
            <span>CartCout = {item.length}</span>
        </div>
    )
}

export default Navbar
