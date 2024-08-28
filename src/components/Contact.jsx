import {React, useState} from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
        // Here you can add the logic to send the form data to a server or an email
    };

    return (
        <div className="contact-container">
            <Link to='/'><button style={{padding: '10px 30px', fontSize: '18px', position: 'absolute', top:'50px', border: 'none', cursor: 'pointer', color: 'var(--primary-color)'}}>Back</button></Link>
            <div className="contact-form">
                <h2>Get in touch</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="How can we help you*"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div className="contact-info">
                <h2>Contact us</h2>
                <p>
                    <strong>Address:</strong> 198 West 21th Street, Suite 721 delhi 110017
                </p>
                <p>
                    <strong>Phone:</strong> +1235 2355 98
                </p>
                <p>
                    <strong>Email:</strong> chauhanluckey4@gamil.com
                </p>
                <p>
                    <strong>Website:</strong> myportfolioxt09.netlify.app
                </p>
            </div>
        </div>
    );
}

export default Contact
