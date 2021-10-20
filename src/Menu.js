import React from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
    return(
        <>
        <Link exact to="/">Home</Link> |
        <Link exact to="/about">About</Link>  |
        <Link exact to="/contact">Contact</Link> |
        <Link exact to="/demo">Demo</Link> |
        <Link exact to="/felix">Felix</Link> |
       <Link exact to="/user">User</Link> |
       <Link exact to="/info">Info</Link> |
       <Link exact to="/function">Function</Link> |
       <Link exact to="/service">Service</Link> |
       <Link exact to="/product">Product</Link>

        </>
    );
}
export default Menu;


