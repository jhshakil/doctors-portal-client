import React from 'react';
import { Link } from 'react-router-dom';
import footerImage from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footerImage})`
        }} class="footer p-10 justify-evenly">
            <div>
                <span class="footer-title">Services</span>
                <Link to='/' class="link link-hover">Design</Link>
                <Link to='/' class="link link-hover">Design</Link>
                <Link to='/' class="link link-hover">Design</Link>
                <Link to='/' class="link link-hover">Design</Link>
            </div>
            <div>
                <span class="footer-title">Company</span>
                <Link to='/' class="link link-hover">Design</Link>
                <Link to='/' class="link link-hover">Design</Link>
                <Link to='/' class="link link-hover">Design</Link>
                <Link to='/' class="link link-hover">Design</Link>
            </div>
            <div>
                <span class="footer-title">Legal</span>
                <Link to='/' class="link link-hover">Design</Link>
            </div>
        </footer>
    );
};

export default Footer;