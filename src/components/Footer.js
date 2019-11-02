import React from 'react';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/" aria-label="Go to homepage">Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/about" aria-label="Go to about page">About</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/#contact" aria-label="Go to contact form">Contact</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/privacy" aria-label="Go to privacy page">Privacy</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/blog" aria-label="Go to blog page">Blog</Link>
          </li>
        </ul>
        <p>&copy; <Link to="/" aria-label="Go to homepage">PegasusTeam</Link> {new Date().getFullYear()}. All Rights Reserved.</p>
        <div>
          
        </div>
      </div>
    </footer>
  );
}
