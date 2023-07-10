import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon className="icon" />
          </a>
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Scouters New Era. Todos los derechos reservados.
        </p>
        <div className="footer-links">
        <Link to="/AvisoLegal" className='footer-link'>Política de Privacidad</Link>
        </div>
      </div>
    </footer>
  );
};
