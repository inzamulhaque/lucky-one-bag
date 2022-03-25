import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = ({ product }) => {
    const { name, price, image } = product;
    return (
        <div className='product'>
            <div className="productImage">
                <img src={image} alt="Product Image" />
            </div>
            <div className="productInfo">
                <h3>Name: {name}</h3>
                <p>Price: {price}</p>
                <button className='addCartBtn'>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Product;