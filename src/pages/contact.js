import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
    return (
      <Layout>
        <>
          <Helmet>
            <title>Contact us | PegasusTeam</title>
            <link rel="canonical" href="https://pegasusteam.com/contact" />
          </Helmet>
        </>
      <Header />
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="column">
                <div className="section-heading has-text-centered">
                  <h2>Contact Us</h2>
                  <div className="column is-6 is-offset-3">
                  <form name="contact-us" className="form" method="POST" encType="application/x-www-form-urlencoded" netlify-honeypot="bot-field" data-netlify="true">

                    <p className="hidden">
                      <label>Don’t fill this out if you're human:</label> 
                      <input name="bot-field" name="form-name" value="contact" />
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
                        <button type="submit" className="btn button is-info is-centered is-size-6">Let's Chat!</button>
                      </div>
                    </div>
                    </form>
            
                  <div className="bump">&nbsp;</div>
                  <p>We would love to work with you.</p>
                  <p>We pride ourselves on providing quick accurate support.</p>
                  <p>
                     We'll Take Care Of Your Website ~ You Take Care Of Your Business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </Layout>
    )
}

export default ContactPage
