import React from 'react';
import { Link } from "gatsby";
//import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WpPage = () => {
    return (
      <Layout>
      <Header />
      <section className="wordpress">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="container">
                <div className="section-heading text-center">
                  <h2>WordPress Websites</h2>
                  <p className="text-muted">
                  WordPress powers over a third of the top 100 sites on the web making it a great choice for your website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        
        <div class="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="feature-item">
                <h2><i class="fab fa-wordpress"></i> Professional WordPress Installation & Setup</h2>
                <p className="text-muted">
                Having a Professional looking website will give your visitors a great first impression, helping you build your online presence.
                </p>
              </div>
              <div className="feature-item">
                <h2><i class="fas fa-sync"></i> WordPress Blog Transfers</h2>
                <p className="text-muted">
                Already have a self hosted WordPress blog and just need it transferred to a new host? No problem! We’ve got you covered.
                </p>
              </div>
              <div className="feature-item">
                <h2><i class="fas fa-edit"></i> WordPress Tweaks</h2>
                <p className="text-muted">
                  Tweaks are the little changes or 'tweaks' you need done to your site that can be completed within an hour or two. You tell us what changes you would like done and we make the required changes. Leaving you free to take care of business.
                </p>
                <p className="text-muted">
                We offer minor tweaks such as installing premium themes, install/setup plugins, adding social media icons, minor theme tweaks…
                </p>
              </div>
              <div className="feature-item">
                <h2><i class="fas fa-download"></i> WordPress Automatic Backups</h2>
                <p className="text-muted">
                Full backups of your entire site and your SQL database. Monthly, weekly or daily backup management is available.
                </p>
              </div>
              <div className="feature-item">
                <h2><i class="far fa-life-ring"></i> World Class Support</h2>
                <p className="text-muted">
                We pride ourselves on providing quick accurate support. Our goal is to resolve any issues that may arise in the fastest time possible.
                </p>
              </div>
              <p><Link to="/#contact" aria-label="Go to contact form">Let's Get Started >></Link></p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </Layout>
    )
}

export default WpPage