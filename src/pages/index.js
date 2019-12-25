import React from 'react';
import { Link } from "gatsby"
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';

import demo1 from '../assets/images/phone-screen-1.jpg';

const IndexPage = () => (
  <Layout>
    <>
      <Helmet>
        <title>PegasusTeam</title>
        <link rel="canonical" href="https://pegasusteam.com" />
        <meta name="google-site-verification" content="t5x9UI-JDMZO1fbGQZGAOhWjaiYC_oVMob8lJzNL3Ps" />
        <meta name="description" content="We build websites using the latest technologies like GatsbyJS for building static JAMstack websites, Drupal and WordPress websites." />
        <meta name="keywords" content= "gatsby, gatsbyjs, drupal websites, jamstack websites, wordpress websites, web design, pegasusteam" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PegasusTeam" />
        <meta property="og:description" content="We build websites using the latest technologies like GatsbyJS for building static JAMstack websites and WordPress websites." />
        <meta property="og:url" content="https://pegasusteam.com" />
        <meta property="og:site_name" content="PegasusTeam" />
        <meta property="og:image" content="https://pegasusteam.com/static/mci-fbook-shared.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="We build websites using the latest technologies like GatsbyJS for building static JAMstack websites, Drupal and WordPress websites." />
        <meta name="twitter:title" content="PegasusTeam" />
      </Helmet>
    </>
    <Header />

    <header className="masthead hero is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="column is-8 is-offset-2">
            <div className="header-content">
              <h1>
                Transform Your Business
              </h1>
              <h2>
                We help small to medium sized businesses transform their business by building fast, secure and affordable websites using modern technologies.
              </h2>
              <div className="bump"></div>
                <Link to="/#contact" className="btn btn-outline btn-xl is-size-6">
                  Get A Quote!
                </Link>
              </div>
            </div>
          </div>
        <div className="overlay"></div>
      </div>
    </header>

    <section className="testimonials text-center" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="column has-text-centered">
            <h2 className="section-heading">
              Building & Maintaining Websites Since 1996
            </h2>
            <p className="">
            Our passion is listening to clients ideas, thinking through solutions and coming up with creative designs.<br />
            Most Importantly, we keep it simple.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="services" id="services">
      <div className="container">
        <div className="section-heading has-text-centered">
          <h2>What We Do</h2>
          <p className="text-muted">
            We know our core strengths, stick to our guns and hone our skills. Most Importantly, we stay focused.
          </p>
        </div>
        <div className="columns">
          <div className="column">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="WordPress web design" />
                  </div>
                </div>
              </div>
            </div>
          </div>
              
          <div className="column">
            <div className="card is-halfheight">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <i className="fas fa-chart-line is-4"></i>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Ongoing Success Plan</p>
                    <div className="content">
                      <p>All websites require some loving care. Whether it's making small tweaks, updating plugins or the software that powers your site.</p>
                      <p className="text-muted">
                        We'll monitor your site and make sure everything is working properly and is updated in a timely matter.
                      </p>
                      <p>
                        <Link to="/ongoing-success" className="btn button is-info btn-xl is-size-6" aria-label="Read more about Ongoing Success">
                        Learn More!
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bump">&nbsp;</div>

              <div className="card is-halfheight">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <i className="fas fa-server is-4"></i>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">Static Websites</p>
                    </div>
                  </div>
                  <div className="content">
                  <p>
                  With JAMstack your website will be fast and gives you better SEO ranking capabilities. JAM stands for JavaScript, APIs, and Markdown.
                  </p>
                  <p className="text-muted">
                    Your customers will enjoy the speed of the site while you enjoy happy customers and more traffic.
                  </p>
                  <p><Link to="static-websites" className="btn button is-info btn-xl is-size-6" aria-label="Read more about Static websites">Learn More!</Link></p>
                </div>
              </div>
            </div>
          </div>
            
            <div className="column">
              <div className="card is-halfheight">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <i className="fas fa-mobile is-4"></i>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">Progressive Web Apps</p>

                      <div className="content">
                        <p>
                          Your website will function similar to a desktop or mobile app. Allowing your customers to install your website as an app right on their phone or dektop.
                        </p>
                        <p className="text-muted">
                          Whether you choose a Static website or WordPress site we can turn your website into a PWA.
                        </p>
                        <p>
                          <Scroll type="id" element="contact">
                            <a href="#contact" className="btn button is-info btn-xl is-size-6" aria-label="Get started">
                              Get Started!
                            </a>
                          </Scroll>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bump">&nbsp;</div>

              <div className="card is-halfheight">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <i className="fab fa-wordpress is-4"></i>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">WordPress Websites</p>
                    </div>
                  </div>

                  <div className="content">
                <p>
                  WordPress powers over a third of the top 100 sites on the web making it a great choice for your website. Easy to use, but does require a bit more regular maintenance.
                </p>
                <p className="text-muted">
                  We will make sure your website is secure with the best security plugins.
                </p>
                <p><Link to="/wordpress-websites" className="btn button is-info btn-xl is-size-6" aria-label="Read more about WordPress websites">Learn More!</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            Stop waiting.
            <br />
            Let's start building.
          </h2>
          <Scroll type="id" element="contact">
            <a href="#contact" className="btn btn-outline btn-xl">
              Get A Quote!
            </a>
          </Scroll>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <section className="testimonials">
      <div className="container">
        <div className="column is-8 is-offset-2">
          <h2 className="section-heading has-text-centered">What Clients Say</h2>
          <div className="card">
            <div className="card-content">
              <p className="title is-4">Marie G.</p>
              <p className="subtitle is-6">Gray's Virtual Office</p>
                <p><em>“Ron bailed me out of an infuriating battle with a poorly designed, and even more poorly supported WordPress theme, and crafted a simple beautiful website for me. As a business owner selling my services online, there’s nothing worse than being ashamed of my website!! He was very easy to work with, he worked fast, and communicated efficiently. I’d work with him again in a heartbeat, and have already recommended him to others in my business circles.”</em>
              </p>
            </div>
          </div>
          <div className="bump">&nbsp;</div>
          <div className="card">
            <div className="card-content">
              <p className="title is-4">Carol B.</p>
              <p className="subtitle is-6">Tonetix</p>
                <p><em>“Ron, You are an absolute star! Thank you so much. I can honestly say I have never had such amazing service ever! It is so refreshing and such a pleasure to deal with you.”</em>
              </p>
            </div>
          </div>
        </div>
        <div className="column is-6 is-offset-3">
          <div className="bump">&nbsp;</div>
          <div className="has-text-centered">
            <p>We would love to work with you.</p>
            <p>We pride ourselves on providing quick accurate support.</p>
            <p>
              We'll Take Care Of Your Website ~ You Take Care Of Your Business
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
