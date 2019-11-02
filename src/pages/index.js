import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';

import demo1 from '../assets/images/phone-screen-1.jpg';
import demo2 from '../assets/images/phone-screen-2.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
              Transform Your Business
              </h1>
              <h3 className="mb-5">We help small to medium sized businesses transform 
              their business by building fast, secure and affordable websites using modern technologies.</h3>
              <Scroll type="id" element="contact">
                <a href="#contact" className="btn btn-outline btn-xl">
                Get A Free Quote!
                </a>
              </Scroll>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="JAMStack web design" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="testimonials text-center" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              Building Websites Since 1996
            </h2>
            <p>
            Our passion is listening to clients ideas, thinking through solutions and coming up with creative designs. Most Importantly, we keep it simple.
            </p>
            <hr />
            <div className="bump">
              <h2 className="section-heading">Testimonials</h2>
              <p>
                <em>“Ron bailed me out of an infuriating battle with a poorly designed, and even more poorly supported WordPress theme, and crafted a simple beautiful website for me. As a business owner selling my services online, there’s nothing worse than being ashamed of my website!! He was very easy to work with, he worked fast, and communicated efficiently. I’d work with him again in a heartbeat, and have already recommended him to others in my business circles.”</em> ~ Marie G. - Gray's Virtual Office
              </p>
              <p className="bump">
                <em>“Ron, You are an absolute star! Thank you so much. I can honestly say I have never had such amazing service ever! It is so refreshing and such a pleasure to deal with you.”</em> ~ Carol B. - Tonetix
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="services" id="services">
      <div className="container">
        <div className="section-heading text-center">
          <h2>What We Do</h2>
          <p className="text-muted">
          We know our core strengths, stick to our guns and hone our skills. Most Importantly, we stay focused.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo2} className="img-fluid" alt="WordPress web design" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h2>JAMstack Websites</h2>
                    <p className="text-muted">
                    With JAMstack your website will be fast and gives you better SEO ranking capabilities. JAM stands for JavaScript, APIs, and Markdown.
                    </p>
                    <p className="text-muted">
                    Your customers will enjoy the speed of the site while you enjoy happy customers and more traffic.
                    </p>
                    <p><Link to="jamstack-websites" aria-label="Read more about JamStack websites">Learn More >></Link></p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h2>WordPress Websites</h2>
                    <p className="text-muted">
                    WordPress powers over a third of the top 100 sites on the web making it a great choice for your website. Easy to use, but does require a bit more regular maintenance.
                    </p>
                    <p className="text-muted">
                    We will make sure your website is secure with the best security plugins.
                    </p>
                    <p><Link to="wordpress-websites" aria-label="Read more about WordPress websites">Learn More >></Link></p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h2>Progressive Web App</h2>
                    <p className="text-muted">
                    Your website will function similar to a desktop or mobile app. Allowing your customers to install your website as an app right on their phone.
                    </p>
                    <p className="text-muted">
                    Whether you choose a JAMstack site or WordPress site we can make it into a PWA.
                    </p>
                    <p>
                      <Scroll type="id" element="contact">
                          <a href="#contact" aria-label="Get started">
                            Get Started!
                          </a>
                        </Scroll>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h2>Web Management</h2>
                    <p className="text-muted">
                      All websites require some maintenance. Whether it's making small tweaks, updating plugins or the software that powers your site.</p>
                    <p className="text-muted">
                      We'll monitor your site and make sure everything is working properly and is updated in a timely matter.
                    </p>
                    <p>
                      <Scroll type="id" element="contact">
                          <a href="#contact" aria-label="Get started">
                            Get Started!
                          </a>
                        </Scroll>
                    </p>
                  </div>
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
            Start building.
          </h2>
          <Scroll type="id" element="contact">
            <a href="#contact" className="btn btn-outline btn-xl">
              Get Started For Free!
            </a>
          </Scroll>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <section className="contact" id="contact">
      <div className="container">
        <h2>
          Let's Get Started!
        </h2>
        <div class="row justify-content-lg-center">
          <div className="col-lg-6">
            <form name="contact" className="form" method="POST" encType="application/x-www-form-urlencoded" netlify-honeypot="bot-field" data-netlify="true">

              <p class="hidden">
                <label>Don’t fill this out if you're human:</label> 
                <input name="bot-field" name="form-name" value="contact" />
              </p>

              <input type="text" name="name" id="name" aria-label="Name"
              placeholder="Your Name..."
              className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" /><br />

              <input type="email" name="email" id="email" aria-label="email"
              placeholder="Your email address..." 
              className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" /><br />

              <input type="text" name="subject" id="subject" aria-label="subject"
              placeholder="Enter a Subject..."
              className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" /><br />

              <textarea name="message" id="message" rows="5" aria-label="message"
              placeholder="Your Message..."
              className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" /><br />
              <button type="submit" className="btn btn-primary mx-auto">Request Free Quote Now!</button>
            </form>
            <p>We would love to work with you.</p>
            <p>We pride ourselves on providing quick accurate support.</p>
          </div>
        </div>
        <Social />
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
