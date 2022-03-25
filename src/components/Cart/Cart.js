import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import "./Cart.css";
import AddedToCart from '../AddedToCart/AddedToCart';

const Cart = () => {
    return (
        <div className='cart'>
            <h2>selected Bags</h2>
            <AddedToCart />
            <button className='chooseBtn'>Choose 1 For Me <FontAwesomeIcon icon={faCheck} /></button>
            <br />
            <button className='resetBtn'>Clear All <FontAwesomeIcon icon={faTrash} /></button>
        </div>
    );
};

export default Cart;