import React from 'react';
import { Link } from "gatsby"
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SuccessPage = () => {
    return (
      <Layout>
        <>
          <SEO />
          <Helmet>
            <title>Ongoing Success</title>
            <link rel="canonical" href="https://pegasusteam.com/ongoing-success" />
          </Helmet>
        </>
      <Header />
      <section className="services">
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="container">
                <div className="section-heading has-text-centered">
                  <h2>Ongoing Success Plan</h2>
                  <p className="text-muted">
                    We'll Take Care Of Your Website ~ You Take Care Of Your Business
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="card is-fullheight">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <h2><i className="fas fa-edit is-4"></i></h2>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">Content Updates</p>
                    </div>
                  </div>

                  <div className="content">
                    Need something changed or added to your website? You tell us what changes you would like done and we make the required changes. Leaving you free to take care of your business.
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
            <div className="card is-fullheight">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <h2><i className="fas fa-lock is-4"></i></h2>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">Website Security</p>
                    </div>
                  </div>

                  <div className="content">
                    Websites are popular targets. We'll install some of the best security software available to ensure your website is better protected from malware and viruses, to deter hackers and protect your visitors.
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
            <div className="card is-fullheight">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <h2><i className="fas fa-download"></i></h2>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">Scheduled Full Backups</p>
                    </div>
                  </div>

                  <div className="content">
                    Your full website will be backed up daily, weekly or monthly depending on how often you add new content. If your website should ever crash it can be restored in minutes using a backup.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="columns">
            <div className="column">
            <div className="card is-fullheight">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <h2><i className="fas fa-chart-line is-4"></i></h2>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">Analytics & Tracking</p>
                    </div>
                  </div>

                  <div className="content">
                    After setup you'll be able too see your traffic stats and know what is working and what isn't. Over time we can tweak your site so you see an increase in traffic and help your busines grow.
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
            <div className="card is-fullheight">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <h2><i className="fas fa-tachometer-alt is-4"></i></h2>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">Website Performance</p>
                    </div>
                  </div>

                  <div className="content">
                  If your site doesn't load in under 3 seconds your are losing traffic. We'll optimize your images and analize what is slowing down your website. Your website will be faster and retain more visitors.
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
            <div className="card is-fullheight">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <h2><i className="fas fa-server is-4"></i></h2>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">Software Updates</p>
                    </div>
                  </div>

                  <div className="content">
                    Keeping the software up to date is one of the most important things when running a website. Not only does it help keep hackers at bay it also keeps your website running smoothly and looking good.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bump">&nbsp;</div>
        <div className="column has-text-centered">
          <p>No Contracts ~ Cancel Anytime</p>
          <p>Starting at $100/Mo</p>
          <p>
            <Link className="btn button is-info btn-xl is-size-6" to="/contact" aria-label="contact us">Yes! Let's Get Started >></Link>
          </p>
        </div>
      </section>
      <Footer />
      </Layout>
    )
}

export default SuccessPage
