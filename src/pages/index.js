import React from 'react';
import { Link } from "gatsby"
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';

const IndexPage = (props) => (
  <Layout>
    <>
      <SEO />
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://pegasusteam.com" />
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
            <div className="section-heading has-text-centered">
              <h2>
                Building & Maintaining Websites Since 1996
              </h2>
            </div>
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
                    <Img fluid={props.data.imagePh1.childImageSharp.fluid} alt="WordPress web design" />
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
                <p><em>"Ron bailed me out of an infuriating battle with a poorly designed, and even more poorly supported WordPress theme, and crafted a simple beautiful website for me. As a business owner selling my services online, there’s nothing worse than being ashamed of my website!! He was very easy to work with, he worked fast, and communicated efficiently. I’d work with him again in a heartbeat, and have already recommended him to others in my business circles."</em>
              </p>
            </div>
          </div>
          <div className="bump">&nbsp;</div>
          <div className="card">
            <div className="card-content">
              <p className="title is-4">Carol B.</p>
              <p className="subtitle is-6">Tonetix</p>
                <p><em>"Ron, You are an absolute star! Thank you so much. I can honestly say I have never had such amazing service ever! It is so refreshing and such a pleasure to deal with you."</em>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <p className="title is-4">Cody H.</p>
              <p className="subtitle is-6">Snake River Solace CBD</p>
                <p><em>"We reached out to to Ron and his team. He addressed many things with our website after looking into it. He recommended several things and after he re-adjusted them our site is running Faster. He even was able to work with our Web guy as a team and really dig into the operating side of it. We also had a Web App created by him also which has an impact into our overall sales online and many customers enjoy being able to use it, verses having to go the website. If there was ever an issue or need for anything, I would want Ron and his team to take care of me as he and his company operated fast and effective. Very happy with all."</em>
              </p>
            </div>
          </div>
        </div>
        
        <div className="bump">&nbsp;</div>
        <div className="column is-8 is-offset-2">
          <h2 className="section-heading has-text-centered">Past Clients</h2>
          <div className="columns is-mobile">
            <div className="column">
              <Img fluid={props.data.client1.childImageSharp.fluid} alt="Marsh CReek" />
            </div>
            <div className="column">
              <Img fluid={props.data.client2.childImageSharp.fluid} alt="SR Solace" />
            </div>
            <div className="column">
              <Img fluid={props.data.client3.childImageSharp.fluid} alt="Haleamano" />
            </div>
            <div className="column">
              <Img fluid={props.data.client4.childImageSharp.fluid} alt="EcoBlogs" />
            </div>
            <div className="column">
              <Img fluid={props.data.client5.childImageSharp.fluid} alt="Spartan Sports Nutrition" />
            </div>
          </div>
        </div>
        <div className="column is-6 is-offset-3">
          <div className="bump">&nbsp;</div>
          <div className="has-text-centered">
            <p><strong>How can we Transform Your Business?<br />
              Reach out below.</strong></p>
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

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    imagePh1: file(relativePath: { eq: "phone-screen-1.jpg" }) {
      ...fluidImage
    }
    client1: file(relativePath: { eq: "marshcreek_logo.jpg" }) {
      ...fluidImage
    }
    client2: file(relativePath: { eq: "srsolace_logo.jpg" }) {
      ...fluidImage
    }
    client3: file(relativePath: { eq: "haleamano_logo.png" }) {
      ...fluidImage
    }
    client4: file(relativePath: { eq: "ecoblogs_logo.jpg" }) {
      ...fluidImage
    }
    client5: file(relativePath: { eq: "spartan_logo.png" }) {
      ...fluidImage
    }
  }
`