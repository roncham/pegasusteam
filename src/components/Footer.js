import React from 'react';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/">Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/about">About</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/#contact">Contact</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/privacy">Privacy</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <p>&copy; <Link to="/">PegasusTeam</Link> {new Date().getFullYear()}. All Rights Reserved.</p>
        <div>
          
        </div>
      </div>
    </footer>
  );
}
