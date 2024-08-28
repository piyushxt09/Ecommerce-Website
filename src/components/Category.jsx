import React from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Category.css';

const Category = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get('https://api.escuelajs.co/api/v1/categories', {
                    params: {
                        offset: 0,
                        limit: 7,
                    }
                });
                setCategory(response.data);

            } catch (err) {
                console.log(err.message);
            }
        };

        fetchCategory();
    }, [])

    console.log(category)
    return (
        <div>
            <Navbar />
            <div style={{ marginTop: '100px' }} className='categoriesheading'>
                <h2 className='h2'>Categories</h2>
                <p>select the category, which you wanna buy!</p>
                {category ? (

                    <div className='Categories'>
                        {category.map((item, index) => (
                            <div key={index} className='categoryItem'>
                                <h2>{item.name}</h2>
                                <img src={item.image} alt="" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>loading...</div>
                )}
            </div>
        </div>
    )
}

export default Category;
