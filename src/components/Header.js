import React, { Component } from 'react';
import ThemeContext from "../context/ThemeContext"
import { Link } from "gatsby";
import logo from '../assets/images/PTlogo-trans.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  UNSAFE_componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <ThemeContext.Consumer>
      {theme => (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="/" id="#page-top">
          <img src={logo} className="img-fluid" alt="PegasusTeam" /> 
          </a>
          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${
              openMenu ? '' : 'collapsed'
            }`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            Menu&nbsp;
            <i className="fas fa-bars"></i>
          </button>

          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto text-right">
            <li className="nav-item">                
                  <Link className="nav-link" to="/" aria-label="Go to homepage">
                    Home
                  </Link>                
              </li>
              <li className="nav-item">                
                  <Link className="nav-link" to="/jamstack-websites" aria-label="Go to JamStack websites">
                  JAMStack Websites
                  </Link>                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/wordpress-websites" aria-label="Go to WordPress websites">
                    WordPress Websites
                  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#contact" aria-label="Go to contact form">
                    Contact
                  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" aria-label="Go to about page">
                  About
                </Link>
              </li>
              <button className="dark-switcher" onClick={theme.toggleDark} aria-label="Toggle Dark Mode." title="Toggle Dark Mode">
                {theme.dark ? <span>Light ☀</span> : <span>Dark ☾</span>}
              </button>
            </ul>
          </div>
        </div>
      </nav>
      )}
      </ThemeContext.Consumer>
    );
  }
}
