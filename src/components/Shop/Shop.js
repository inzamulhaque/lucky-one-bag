import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [addCart, setAddcart] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleAddCart = (id) => {
        const checkProduct = addCart.find(product => product.id === id);
        if (addCart.length === 4) {
            alert("already 4 product added");
        } else if (checkProduct) {
            alert("already added this product");
        } else {
            const clickedProduct = products.find(product => product.id === id);
            setAddcart([...addCart, clickedProduct]);
        }
    }

    const handleselectOne = () => {
        if (addCart.length !== 0) {
            const selectedindex = Math.floor(Math.random() * addCart.length);
            const oneItem = addCart.find((product, index) => index === selectedindex);
            setAddcart([oneItem]);
        }
    }

    const handleclearAll = () => {
        setAddcart([]);
    }

    const handledeleteOneItem = (id) => {
        const newItems = addCart.filter((product) => product.id !== id);
        setAddcart([...newItems]);
    }

    const handlers = { handleselectOne, handleclearAll, handledeleteOneItem };
    return (
        <div className='shop'>
            <div className="productsContainer">
                {
                    products.map(product => <Product key={product.id} product={product} clickHandler={handleAddCart} />)
                }
            </div>
            <div className="cartContainer">
                <Cart products={addCart} handlers={handlers} />
            </div>
        </div>
    );
};

export default Shop;