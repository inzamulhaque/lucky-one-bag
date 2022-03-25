import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = () => {
    return (
        <div className='product'>
            <div className="productImage">
                <img src="https://splendid-ganache-90bb08.netlify.app/images/k.jpg" alt="Product Image" />
            </div>
            <div className="productInfo">
                <h3>Name: </h3>
                <p>Price: </p>
                <button className='addCartBtn'>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Product;