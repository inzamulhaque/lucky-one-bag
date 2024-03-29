import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import "./Cart.css";
import AddedToCart from '../AddedToCart/AddedToCart';

const Cart = ({ products, handlers }) => {
    const { handleselectOne, handleclearAll, handledeleteOneItem } = handlers;
    return (
        <div className='cart'>
            <h2>selected Bags</h2>
            {
                products.map(product => <AddedToCart key={product.id} showProduct={product} deleteFn={handledeleteOneItem} />)
            }
            <button onClick={handleselectOne} className='chooseBtn'>Choose 1 For Me <FontAwesomeIcon icon={faCheck} /></button>
            <br />
            <button className='resetBtn' onClick={handleclearAll}>Clear All <FontAwesomeIcon icon={faTrash} /></button>
        </div>
    );
};

export default Cart;