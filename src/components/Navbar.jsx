import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
const Navbar = () => {
    return (
        <div className='Navbar'>
            <h2>Infinite Products</h2>
            <nav>
                <ul>
                    <li><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>

                    {/* Category Dropdown */}
                    <li className="dropdown">
                        <Link to='/category' style={{ textDecoration: 'none' }}><span style={{ cursor: 'pointer', textDecoration: 'none' }}>Category</span></Link>
                        <div className="dropdown-content">
                            <Link to="/products" style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>Clothes</Link>
                            <Link to="/products" style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>Electronics</Link>
                            <Link to="/products" style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>Shoes</Link>
                            <Link to="/products" style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>Books</Link>
                            <Link to="/products" style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>Phone</Link>
                        </div>
                    </li>

                    <li><Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>Products</Link></li>
                    <li><Link to="/contactForm" style={{ textDecoration: 'none', color: 'inherit' }}>Contact us</Link></li>
                </ul>
            </nav>
            <Link to='/cart'>
            <img src="cart1.svg" alt="" style={{ cursor: 'pointer' }} />
            </Link>
        </div>
    )
}

export default Navbar
