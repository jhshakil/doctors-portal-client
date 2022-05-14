import React from 'react';
import { Link } from 'react-router-dom';
import footerImage from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footerImage})`
        }} className="footer p-10 justify-evenly">
            <div>
                <span className="footer-title">Services</span>
                <Link to='/' className="link link-hover">Design</Link>
                <Link to='/' className="link link-hover">Design</Link>
                <Link to='/' className="link link-hover">Design</Link>
                <Link to='/' className="link link-hover">Design</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to='/' className="link link-hover">Design</Link>
                <Link to='/' className="link link-hover">Design</Link>
                <Link to='/' className="link link-hover">Design</Link>
                <Link to='/' className="link link-hover">Design</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link to='/' className="link link-hover">Design</Link>
            </div>
        </footer>
    );
};

export default Footer;