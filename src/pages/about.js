import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <Layout>
    <>
      <SEO />
      <Helmet>
        <title>About</title>
        <link rel="canonical" href="https://pegasusteam.com/about" />
      </Helmet>
      
    </>
      <Header />

      <div className="container">
        <div className="row">
          <div className="column is-8 is-offset-2">
            <section className="about">
              <div className="about-content">
                <div className="container">
                  <h1 className="section-heading has-text-centered">About Us</h1>
                  <p>We help small to medium sized businesses and non-profits transform their business by building an affordable modern website so you can make more money and have more time to focus on what matters.</p>
                  <p><hr /></p>
                  <p>I have been building HTML websites since 1996. WordPress sites since 2005. For the past two decades I have created websites for myself, friends as well as for clients.</p>
                  <p>My wife and I have both been involved in Internet Marketing in one form or another since we first got computers in the mid 90’s. Although we followed the usual path of joining various programs and being disappointed, we have pretty much learned our lessons and now focus on building the web. One site at a time.</p>
                  <p>I first met my wife online around 1999. We had a long distance relationship and formed PegasusTeam and worked together online for 4 years before we finally made the plunge and got married. We both relocated here to Las Vegas and have been enjoying our life and business ventures together!</p>
                  <Link to="/contact" aria-label="Go to contact form" className="btn button is-info">Hire Us!</Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    <Footer />
    </Layout>
  )
}

export default AboutPage
