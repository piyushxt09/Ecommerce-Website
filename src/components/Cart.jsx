import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Cart.css'
const Cart = () => {
    const cartItems = localStorage.getItem('cartItems');
    const items = JSON.parse(cartItems);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const TotalCost = localStorage.getItem('totalCost');
        if (TotalCost) {
            setTotal(parseFloat(TotalCost));
        }
    }, [])

    const value = 30;

    return (
        <div>
            <Navbar />
            <div className="Cart">
                <div className="Cart-Border">
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
                {items && items.length > 0 ? (
                    <div className="CartItems">
                        {items.map((item, index) => (
                            <div key={item.id} className='div'>
                                <div className='AllCarts'>
                                    <div className='CartItem'>
                                        <div>
                                            <img src={item.images[0]} alt={item.title} />
                                        </div>
                                        <div>
                                            <h2>{item.title}</h2>
                                            <p>Price: ${item.price}</p>
                                            <p className='Remove'>Remove</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='quantity'>
                                    <input type="text" placeholder='1' />
                                </div>
                                <div className='price'>
                                    ${item.price}
                                </div>
                            </div>
                        ))}
                        <hr />
                        <div className='allTotal'>
                            <h2 style={{fontWeight: '400' ,marginTop: '-10px'}}>Subtotal:   ${total}</h2>
                            <h2 style={{fontWeight: '400' , marginTop: '-10px'}}>Tax:       ${value}</h2>
                            <h1 style={{fontWeight: '600', marginTop: '-5px'}}>Total:     ${total + value}</h1>
                        </div>
                    </div>
                ) : (
                    <div>No cart items</div>

                )}
            </div>
        </div>
    );
}

export default Cart
