import React, { Component } from 'react';
//import config from '../../config';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import ThemeContext from '../context/ThemeContext';

import '../assets/sass/pteam.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <ThemeContext.Consumer>
            {theme => (
              <div className={theme.dark ? 'dark' : 'light'}>
              
              <>
              <Helmet
                  title={data.site.siteMetadata.title}
                  meta={[
                    { name: 'description', content: 'We build websites using the latest technologies like GatsbyJS for building static JAMstack websites and WordPress websites.' },
                    { name: 'keywords', content: 'gatsby, gatsbyjs, jamstack websites, wordpress websites' },
                  ]}
                >
                  <html lang="en" />
                </Helmet>
                <div className={'page-top'}>{children}</div>
              </>
              </div>
            )}
          </ThemeContext.Consumer>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooter: PropTypes.bool,
  noHeader: PropTypes.bool,
  noSiteHeader: PropTypes.bool,
  activeLink: PropTypes.string,
};

export default Layout;
