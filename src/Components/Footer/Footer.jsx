import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>About</li>
                        <li>Services</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 75154 96847</li>
                        <li>chefhat@gmail.com</li>
                    </ul>
                </div>
                <hr />
            </div>
            <p>@2024 All rights reserved</p>
        </div>
    );
};

export default Footer;
