import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="footer p-10 justify-evenly">
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