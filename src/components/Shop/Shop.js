import React from 'react';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    return (
        <div className='shop'>
            <div className="productsContainer">
                <Product />
                <Product />
                <Product />
            </div>

            <div className="cartContainer">
                cart Container
            </div>
        </div>
    );
};

export default Shop;