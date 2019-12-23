import React from 'react';
import { Link } from "gatsby"
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import demo1 from '../assets/images/phone-screen-1.jpg';

const JamstackPage = () => {
    return (
      <Layout>
        <>
          <Helmet>
            <title>Static Websites | PegasusTeam</title>
            <link rel="canonical" href="https://pegasusteam.com/static-websites" />
          </Helmet>
        </>
      <Header />
      <section className="jamstack">
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="container">
                <div className="section-heading has-text-centered">
                  <h2>Static Websites</h2>
                  <p className="text-muted">
                    Static websites aren't a solution for every business owner.<br />
                    We'll work with you to decide if a Static website is right for you.
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div class="container">
          <div className="columns">
            <div className="column">
              <div className=" feature-item text-right">
                <h2><i class="fas fa-tachometer-alt"></i> Static Is Fast</h2>
                <p className="text-muted">
                  Using a static site generator like Gatsby can increase your speed 3% up to 10%. This increase in speed equals far better performance.
                </p>
                <p className="text-muted">
                  Better performance leads to better ranking in Google, where most sites get the majority of their traffic from. It also means better SEO (Search Engine Optimization).
                </p>
              </div>
              <div className="feature-item text-right">
                <h2><i class="fas fa-chart-line"></i> Website Performance</h2>
                <p className="text-muted">
                  It's possible to achieve perfect scores of 100 in Chrome Audits. The audits measure your sites speed (performance), Accessibility, Best Practices, SEO and Progressive Web App.
                </p>
                <p className="text-muted">
                  We'll make sure you get the best possible scores meaning you will get more traffic and better rankings.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="device-container">
                <div className="device-mockup iphone6_plus portrait white">
                  <div className="device">
                    <div className="screen">
                      <img src={demo1} className="img-fluid" alt="WordPress web design" />
                    </div>
                    <div className="button"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
            <div className="feature-item">
                <h2><i class="fab fa-wordpress"></i> Progressive Web Apps</h2>
                <p className="text-muted">
                Your website will function similar to a desktop or mobile app. Allowing your customers to install your website as an app right on their phone.
                  </p> 
                  <p className="text-muted">
                  Whether you choose a Static site or WordPress site we can make it into a PWA. prefetching resources for other pages so clicking around the site feels incredibly fast.
                </p>
              </div>
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
        </div>
        <div className="bump"></div>
        <div className="column has-text-centered">
          <p>
            <Link className="btn button is-info btn-xl is-size-6" to="/contact" aria-label="Go to contact form">Let's Get Started >></Link>
          </p>
        </div>
      </section>
      <Footer />
      </Layout>
    )
}

export default JamstackPage
