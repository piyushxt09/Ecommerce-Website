import React from 'react'
import Navbar from './Navbar';
import '../App.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='Home'>
                <div>
                    <h2>Welcome to Infite Products</h2>
                    <h3>"Discover unbeatable deals on the latest trends and <br />essentials—your one-stop shop for everything you love!"</h3>
                    <p>buy now! to get upto 40% off</p>
                    <Link to='/products'>
                        <button>Shop Now</button>
                    </Link>
                </div>
                <div className='ImageHome'>
                </div>
            </div>
            <div className="shiping">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#8C1AF6"><path d="M220.09-195.62q-42.78 0-73.05-30.37-30.27-30.38-30.27-73.78H67.69v-404.85q0-23.05 16.17-39.22Q100.02-760 123.08-760h538.23v147.77h85l146 195.61v116.85h-60.23q0 43.4-30.4 73.78-30.4 30.37-73.82 30.37-43.1 0-73.21-30.37-30.11-30.38-30.11-73.78H324.31q0 43.62-30.72 73.89-30.72 30.26-73.5 30.26Zm.45-30.76q30.54 0 51.77-21.24 21.23-21.23 21.23-51.76 0-30.54-21.23-51.77-21.23-21.23-51.77-21.23-30.54 0-51.77 21.23-21.23 21.23-21.23 51.77 0 30.53 21.23 51.76 21.23 21.24 51.77 21.24ZM98.46-330.54h21.23q8.54-30.08 36.89-51.46 28.35-21.38 63.49-21.38 33.61 0 62.69 21.11 29.09 21.12 37.62 51.73h310.16v-398.69H123.08q-9.23 0-16.93 7.69-7.69 7.69-7.69 16.92v374.08Zm629.85 104.16q30.54 0 51.77-21.24 21.23-21.23 21.23-51.76 0-30.54-21.23-51.77-21.23-21.23-51.77-21.23-30.54 0-51.77 21.23-21.23 21.23-21.23 51.77 0 30.53 21.23 51.76 21.23 21.24 51.77 21.24Zm-67-187.08h196l-127.93-168h-68.07v168ZM364.62-525.15Z" /></svg>
                    <div>
                        <h2>FREE SHIPPING</h2>
                        <p>Free shipping on all over BHARAT <br />
                            order or order above 100$</p>
                    </div>
                </div>
                <div>

                    <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#8C1AF6"><path d="M480-120q-66.54 0-124.73-24.92-58.19-24.93-101.81-68.54-43.61-43.62-68.54-101.81Q160-373.46 160-440h30.77q0 120.38 84.16 204.81 84.17 84.42 204.99 84.42 120.82 0 205.07-84.16 84.24-84.17 84.24-204.99 0-120.82-83.08-205.07-83.07-84.24-203.46-84.24h-22.77l69.93 69.92-22 21.23-107.77-108.54 109.3-108.53 21.77 21L457-760h23q66.54 0 124.73 24.92 58.19 24.93 101.81 68.54 43.61 43.62 68.54 101.81Q800-506.54 800-440t-24.92 124.73q-24.93 58.19-68.54 101.81-43.62 43.61-101.81 68.54Q546.54-120 480-120ZM292.54-327.69v-30.77h125.61v-64.23h-93.53v-35.39h93.53v-63.69H292.54v-30.77h126.03q13.51 0 21.93 8.42t8.42 20.97v166.07q0 12.55-8.41 20.97-8.42 8.42-21.93 8.42H292.54Zm261.23 0q-17.16 0-29.43-12.27-12.26-12.26-12.26-29.42v-141.47q0-17.16 12.26-29.42 12.27-12.27 29.43-12.27H626q17.16 0 29.43 12.27 12.26 12.26 12.26 29.42v141.47q0 17.16-12.26 29.42-12.27 12.27-29.43 12.27h-72.23Zm-1.69-30.77h75.61q4.62 0 6.93-2.31 2.3-2.31 2.3-6.92v-144.85q0-4.61-2.3-6.92-2.31-2.31-6.93-2.31h-75.61q-4.62 0-6.93 2.31-2.3 2.31-2.3 6.92v144.85q0 4.61 2.3 6.92 2.31 2.31 6.93 2.31Z" /></svg>
                    <div>
                        <h2>30 Days Return</h2>
                        <p>
                            Simply return it within <br />
                            30 days for an exchange
                        </p>
                    </div>
                </div>
                <div>

                    <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#8C1AF6"><path d="M530.77-453.85q-33.85 0-56.92-23.07-23.08-23.08-23.08-56.93 0-33.84 23.08-56.92 23.07-23.08 56.92-23.08t56.92 23.08q23.08 23.08 23.08 56.92 0 33.85-23.08 56.93-23.07 23.07-56.92 23.07ZM264.62-316.92q-22.25 0-38.82-16.57t-16.57-38.82v-323.07q0-22.25 16.57-38.82t38.82-16.57h532.3q22.25 0 38.82 16.57t16.57 38.82v323.07q0 22.25-16.57 38.82t-38.82 16.57h-532.3Zm49.23-30.77h433.84q0-30.46 21.79-52.16 21.79-21.69 52.06-21.69v-224.61q-30.46 0-52.16-21.79-21.69-21.79-21.69-52.06H313.85q0 30.46-21.79 52.15-21.79 21.7-52.06 21.7v224.61q30.46 0 52.15 21.79 21.7 21.79 21.7 52.06Zm420 132.31H163.08q-22.25 0-38.82-16.57t-16.57-38.82v-361.54h30.77v361.54q0 9.23 7.69 16.92 7.7 7.7 16.93 7.7h570.77v30.77ZM264.62-347.69H240V-720h24.62q-10 0-17.31 7.31-7.31 7.31-7.31 17.31v323.07q0 10 7.31 17.31 7.31 7.31 17.31 7.31Z" /></svg>
                    <div>
                        <h2>100% Payment Secure</h2>
                        <p>
                            Fast secure payment with <br />
                            UPI, Net Banking etc
                        </p>
                    </div>
                </div>

            </div>
            <div className='HomePhotos'>
                <div className='left'>
                    <div>
                        <div className='ecommerceweb'>
                            <p>INFINITE PRRODUCTS</p>
                            <h2>MEN'S TOP BRANDS</h2>
                            <Link to='/products'> <button>SHOP NOW</button></Link>
                        </div>
                        <div className='topbrand'>
                            <p>TOP BRANDS</p>
                            <h2>MEN'S COLLECTION</h2>
                            <Link to='/products'> <button>SHOP NOW</button></Link>
                        </div>
                    </div>
                    <div className='shoes'>
                        <p>FOR MEN'S ONLINE</p>
                        <h2>MEN'S SHOES</h2>
                        <Link to='/products'> <button style={{width: '160px'}}>SHOP NOW</button></Link>
                    </div>
                </div>
                <div className='right'>
                    <p>COLLECTION OF 2024</p>
                    <h2>MEN'S SHIRT</h2>
                    <Link to='/products'> <button style={{width: '160px'}}>SHOP NOW</button></Link>
                </div>
            </div>
            <div className='Footer'>
                <div>
                    <h2>INFINITE <br /> PRODUCTS</h2>
                    <input type="text" placeholder='Enter Your Email*' />
                    <br />
                    <button>Subscribe</button>
                    <p>Get monthly updates, offers <br />and gifts</p>
                </div>
                <div className='Socailmedia'>
                    <h2>SOCIAL MEDIA</h2>
                    <p>Phone: +1(0)000 0000 001</p>
                    <p>Email: chauhanluckey4@gmail.com</p>
                    <p>Address: 1234 Street Name City, AA 99999</p>
                    <div>
                        <i class="fa-brands fa-twitter" ></i>
                        <i class="fa-brands fa-youtube" ></i>
                        <i class="fa-brands fa-facebook" ></i>
                        <i class="fa-brands fa-instagram" ></i>
                    </div>
                </div>
                <div>
                    <h2>RECENT NEWS</h2>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Get In Touch</p>
                </div>
                <div>
                    <h2>LINKS</h2>
                    <p>Portfolio: myportfolioxt09.netlify.app</p>
                    <p>© 2024 piyushxt09. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
