import { Link } from 'react-router-dom'
import amLogo from '../assets/IMG-20260306-WA0432.svg'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <Link to="/" className="footer-logo">
                        <img src={amLogo} alt="Ajmal Mukhtar" className="footer-logo-img" />
                        <span className="footer-logo-text">AJMAL MUKHTAR</span>
                    </Link>

                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#services">Services</a>
                        <a href="#about">About</a>
                        <a href="#reviews">Reviews</a>
                        <a href="#whyus">Why Us</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-divider"></div>

                    <p className="footer-copy">
                        Copyright &copy; 2026{' '}
                        <a href="https://ajmalmukhtar.com" target="_blank" rel="noopener noreferrer">
                            ajmalmukhtar.com
                        </a>{' '}
                        | Powered by{' '}
                        <a href="https://ajmalmukhtar.com" target="_blank" rel="noopener noreferrer">
                            ajmalmukhtar.com
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
