import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./AddedToCart.css";

const AddedToCart = ({ showProduct, deleteFn }) => {
    const { id, name, image } = showProduct;
    return (
        <div className='addedToCart'>
            <img src={image} alt="Product Image" className="addedProductImage" />
            <h5>{name} </h5>
            <p onClick={() => deleteFn(id)} className='deleteToCart'><FontAwesomeIcon icon={faTrash} /></p>
        </div>
    );
};

export default AddedToCart;