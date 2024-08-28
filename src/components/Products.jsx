import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import '../App.css';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [rotatingProducts, setRotatingProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [itemIds, setItemIds] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [Total, setTotal] = useState(0);

    const rotatingContainerRef = useRef(null); // Ref for the rotating container

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://api.escuelajs.co/api/v1/products', {
                    params: {
                        offset: 0,
                        limit: 50, // Load more than needed initially for demonstration
                    },
                });

                setProducts(response.data);
                setRotatingProducts(response.data.slice(0, 10)); // First 10 products for rotation
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Handle rotating the first 10 products every 3 seconds with smooth scrolling
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % 10;

                if (rotatingContainerRef.current) {
                    const container = rotatingContainerRef.current;
                    const itemWidth = container.scrollWidth / rotatingProducts.length;
                    container.scrollTo({
                        left: itemWidth * newIndex,
                        behavior: 'smooth', // Smooth scrolling
                    });
                }

                return newIndex;
            });
        }, 2000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [rotatingProducts]);

    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        const savedPrice = localStorage.getItem('totalCost');
    
        if (savedPrice) {
          setTotal(parseFloat(savedPrice)); // Parsing the cart value to float
        }
        if (savedCartItems) {
          try {
            setCartItems(JSON.parse(savedCartItems)); // Parsing the cart items from JSON string
          } catch (error) {
            console.error('Error parsing saved cart items:', error);
          }
        }
      }, []);

    // Handle updating the rotating products array
    useEffect(() => {
        setRotatingProducts((prevProducts) => {
            if (products.length > 10) {
                return [
                    ...prevProducts.slice(1),
                    products[(currentIndex + 10) % products.length],
                ];
            }
            return prevProducts;
        });
    }, [currentIndex, products]);

    // Handle scrolling to load more products
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading || !hasMore) {
                return;
            }
            setPage((prevPage) => prevPage + 1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;




    function CartAdd(itemId) {
        const item = products.find((item) => item.id === itemId);
        if (item) {
          const updatedCartItems = [...cartItems, item];
          setCartItems(updatedCartItems);
          const updatedTotalCost = Total + item.price;
          setTotal(updatedTotalCost);
    
          // Save the updated cart state to localStorage
          localStorage.setItem('totalCost', updatedTotalCost.toFixed(2));
          localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Correctly stringify the cart items
          alert('Item added to the cart!');
        }
      }



    return (
        <div>
            <Navbar />
            <div className="rotating-container" ref={rotatingContainerRef}>
                {rotatingProducts.map((product, index) => (
                    <div key={index} className='items'>
                        <img src={product.images[0]} alt="" />
                        <h2>{product.title}</h2>
                        <h5>{product.category.name}</h5>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
            <div className="products-list">
                {products.map((product) => (
                    product.images[0] ? (
                        <div key={product.id}>
                            <img src={product.images[0]} alt={product.title} />
                            <h2>{product.title}</h2>
                            <p>Price: ${product.price}</p>
                            <button onClick={() => CartAdd(product.id)}> Add to cart</button>
                        </div>
                    ) : null // Return null to render nothing if no image is available
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
