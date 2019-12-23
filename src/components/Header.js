import React, { Component } from 'react';
import ThemeContext from "../context/ThemeContext"
import logo from '../assets/images/PTlogo-trans.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
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
    const {} = this.state;
    return (
      <ThemeContext.Consumer>
      {theme => (
        <nav id="top" className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src={logo} className="img-fluid" alt="PegasusTeam" /> 
            </a>
      
            <label role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" htmlFor="nav-toggle-state">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </label>
          </div>
          <input type="checkbox" id="nav-toggle-state" />
      
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/" aria-label="Go to homepage">
                Home
              </a>
              <a className="navbar-item" href="/about" aria-label="Go to about page">
                  About
                </a>
                <a className="navbar-item" href="/contact" aria-label="Go to contact us">
                  Contact
                </a>
                <a className="navbar-item" href="/ongoing-success" aria-label="Go to success plan">
                  Ongoing Success
                </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  Web Design
                </a>
        
                <div className="navbar-dropdown">
                  <a className="navbar-item" href="/static-websites" aria-label="Go to static websites">
                    Static Websites
                  </a>
                  <a className="navbar-item" href="/wordpress-websites" aria-label="Go to wordpress websites">
                    WordPress Websites
                  </a>
                </div>
                </div>
                <a className="navbar-item" href="/work" aria-label="Go to our work">
                  Work
                </a>
              </div>
            
      
            <div className="navbar-end">
              <div className="navbar-item">
              <a className="button dark-switcher" onClick={theme.toggleDark} aria-label="Toggle Dark Mode." title="Toggle Dark Mode">
                {theme.dark ? <span>☀</span> : <span>☾</span>}
              </a>
              </div>
            </div>
          </div>
        </nav>
      )}
      </ThemeContext.Consumer>
    );
  }
}
