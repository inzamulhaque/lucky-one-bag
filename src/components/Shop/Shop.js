import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='shop'>
            <div className="productsContainer">
                {
                    products.map(product => <Product key={product.id} product={product} />)
                }
            </div>

            <div className="cartContainer">
                cart Container
            </div>
        </div>
    );
};

export default Shop;