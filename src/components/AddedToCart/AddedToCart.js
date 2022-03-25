import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./AddedToCart.css";

const AddedToCart = () => {
    return (
        <div className='addedToCart'>
            <img src="https://splendid-ganache-90bb08.netlify.app/images/a.jpg" alt="Product Image" className="addedProductImage" />
            <h3>Name: </h3>
            <p className='deleteToCart'><FontAwesomeIcon icon={faTrash} /></p>
        </div>
    );
};

export default AddedToCart;