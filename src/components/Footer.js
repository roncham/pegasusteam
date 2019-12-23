import React from 'react';
import { Link } from 'gatsby';
import Scroll from './Scroll';

import Social from '../components/Social';
import ImageG from '../assets/images/gatsby.png';
import ImageWP from '../assets/images/wordpress.png';
import ImageSS from '../assets/images/squarespace.png';
import ImageD from '../assets/images/druplicon-48.png';


export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="columns">
        {/* Left Widget */}
          <div className="column">
            <h2 className="has-text-left">Systems We Use</h2>
          <div className="bump">&nbsp;</div>
          <div className="columns  is-mobile">
            <div className="column">
              <div className="has-text-left">
                <p>&nbsp; <img src={ImageG} alt="GatsbyJs" /> Gatsby JS</p>
                <br />
                {/*<p>&nbsp;<img src={ImageD} alt="GatsbyJs" /> Drupal </p>*/}
              </div>
            </div>
            <div className="column">
              <div className="has-text-left">
                <p><img src={ImageWP} alt="WordPress" /> WordPress</p>
                <br />
                <p><img src={ImageSS} alt="SquareSpace" /> SquareSpace</p>
              </div>
            </div>
          </div>
        </div>

      {/* Center Widget */}
          <div className="column">
            <h2 className="has-text-left">Quick Links</h2>
            <div className="bump">&nbsp;</div>
            <div className="has-text-left">
              <ul>
                <li><a className="alist is-size-5" href="/" aria-label="Go to homepage">
                  Home
                </a></li>
                <li><a className="alist is-size-5" href="/about" aria-label="Go to about page">
                  About
                </a></li>
                <li>
                  <a className="alist is-size-5" href="/work" aria-label="Go to our work">
                    Work
                </a></li>
                <li>
                  <a className="alist is-size-5" href="/contact" aria-label="Go to contact us">
                  Contact
                </a></li>
                <li><a className="alist is-size-5" href="/ongoing-success" aria-label="Go to success plan">
                  Ongoing Success
                </a></li>
                <li><a className="alist is-size-5" href="/work" aria-label="Go to our work">
                  Work
                </a></li>
                <li><a className="alist is-size-5" href="/static-websites" aria-label="Go to static websites">
                  Static Websites
                </a></li>
                <li><a className="alist is-size-5" href="/wordpress-websites" aria-label="Go to wordpress websites">
                  WordPress Websites
                </a></li>
              </ul>
            </div>
          </div>

        {/* Right Widget */}
          <div id="contact" className="column">
            <h2 className="has-text-left">Reach Out</h2>
            <div className="bump">&nbsp;</div>
          <form name="contact" className="form" method="POST" encType="application/x-www-form-urlencoded" netlify-honeypot="bot-field" data-netlify="true">

            <p className="hidden">
              <label>Don’t fill this out if you're human:</label> 
              <input name="bot-field" name="form-name" value="ontact" readOnly />
            </p>

            <div className="field">
              <div className="control has-icons-left">
                <input type="text" name="name" id="name" aria-label="Name" 
                placeholder="Your Name..."
                className="input form-control" />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <div className="control has-icons-left">
                <input type="email" name="email" id="email" aria-label="email"
                placeholder="Your email address..." 
                className="input form-control" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input type="text" name="subject" id="subject" aria-label="subject"
                placeholder="Enter a Subject..."
                className="input form-control" />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <textarea name="message" id="message" rows="5" aria-label="message"
                placeholder="Your Message..."
                className="form-control textarea" />
              </div>
            </div>
            <div className="field">
              <div className="control has-text-centered">
                <button type="submit" className="btn button is-info is-centered is-size-6">Send</button>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>

      {/* Footer Menu */}
      <div className="container">
        <hr />
        <ul className="footer-nav list-inline">
          <li className="list-inline-item">
            <Link to="/" aria-label="Go to homepage">Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/about" aria-label="Go to about page">About</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/contact" aria-label="Go to contact form">Contact</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/privacy" aria-label="Go to privacy page">Privacy</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/blog" aria-label="Go to blog page">Blog</Link>
          </li>
        </ul>
        <div>&nbsp;</div>
        <div>
          <p>&copy; <Link to="/" aria-label="Go to homepage">PegasusTeam</Link> {new Date().getFullYear()}. All Rights Reserved.</p>
        </div>
        <div>
        <Social />
        <Scroll
          type="id"
          element="top">
            <a className="btn button is-info is-small" href="#top" title="Scroll to top" aria-label="Scroll to top">
            <i class="fas fa-angle-double-up"></i>
            </a>
          </Scroll>

        </div>
      </div>
    </footer>
  );
}
