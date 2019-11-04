import React from 'react';
import { Link } from "gatsby"
//import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

const JamstackPage = () => {
    return (
      <Layout>
      <Header />
      <section className="jamstack">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="container">
              <div className="section-heading text-center">
                <h2>JAMstack Websites</h2>
                <p className="text-muted">
                  Static websites aren't a solution for every business owner. We'll work with you to decide if a JAMStack website is right for you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container">
          <div className="row">
            <div className="col-sm my-auto">
              <div className="feature-item">
                <h2><i class="fas fa-tachometer-alt"></i> JAMstack Websites Are Faster</h2>
                <p className="text-muted">
                  Using a static site generator like Gatsby can increase your speed 3% up to 10%. This increase in speed equals far better performance. Better performance leads to better ranking in Google, where most sites get the majority of their traffic from. It also means better SEO (Search Engine Optimization).
                </p>
              </div>
            </div>
            <div className="col-sm">
              <div className="feature-item">
                <h2><i class="fas fa-chart-line"></i> JAMStack Website Performance</h2>
                <p className="text-muted">
                  It's possible to achieve perfect scores of 100 in Chrome Audits. The audits measure your sites speed (performance), Accessibility, Best Practices, SEO and Progressive Web App.
                </p>
                <p className="text-muted">
                  We'll make sure you get the best possible scores meaning you will get more traffic and better rankings.
                </p>
              </div>
            </div>
            <div className="col-sm">
              <div className="feature-item">
                <h2><i class="fab fa-wordpress"></i> Headless CMS</h2>
                <p className="text-muted">
                  Do you want the convenience of WordPress on the backend and a static site on the front? We can do that too.
                </p>
                <p className="text-muted">
                  Having a static site on the frontend gives you all the benefits of having a static site.
                </p>
                <p className="text-muted">
                  While having WordPress on the backend gives you the ease of managing your content.
                </p>
              </div>
            </div>
          </div>
          <p><Link to="/#contact" aria-label="Go to contact form">Let's Get Started >></Link></p>
        </div>
      </section>
      <Footer />
      </Layout>
    )
}

export default JamstackPage
