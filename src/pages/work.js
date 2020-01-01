import React from 'react';
import { Link } from "gatsby"
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const WorkPage = (props) => {
    return (
      <Layout>
        <>
          <SEO />
          <Helmet>
            <title>Work</title>
            <link rel="canonical" href="https://pegasusteam.com/work" />
          </Helmet>
        </>
      <Header />
      <section className="work">
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="container">
                <div className="section-heading has-text-centered">
                  <h2>Our work</h2>
                  <p className="text-muted">
                    Here is a selection of previous work we have done.
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
            <div class="card is-fullheight">
              <div class="card-image">
              <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Marsh Creek Inn" />
              </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Marsh Creek Inn</p>
                      <p class="subtitle is-6">GatsbyJs / React - Web App / PWA</p>
                    </div>
                  </div>

                  <div class="content">
                    <p>A fun project for a small Inn up in Alaska. The main attraction is Polar Bear viewing.</p>
                    <p>
                      <a href="https://marshcreekinnak.com" target="_blank" rel="noopener noreferrer">Visit Site ></a>
                    </p> 
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
            <div class="card is-fullheight">
              <div class="card-image">
              <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="Haleamano" />
              </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Haleamano</p>
                      <p class="subtitle is-6">WordPress - WooCommerce - Web App / PWA</p>
                    </div>
                  </div>

                  <div class="content">
                    <p>
                      An ongoing project for a local Hawaiian Roots and Reggae band in Las Vegas.
                    </p>
                    <p>
                      <a href="https://haleamano.com" target="_blank" rel="noopener noreferrer">Visit Site ></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
            <div class="card is-fullheight">
              <div class="card-image">
              <Img fluid={props.data.imageThree.childImageSharp.fluid} alt="Spartan Nutrition" />
              </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Spartan Nutrition</p>
                      <p class="subtitle is-6">WordPress - WooCommerce</p>
                    </div>
                  </div>

                  <div class="content">
                  <p>
                      A project for a local Nutrition supplements store in Las Vegas.
                    </p>
                    <p>
                      The owner sold the store to a chain store.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="columns">
            <div className="column">
            <Img fluid={props.data.imageFour.childImageSharp.fluid} alt="Aala Handyman" />
            </div>
            <div className="column">
            <Img fluid={props.data.imageFive.childImageSharp.fluid} alt="Bookclub" />
            </div>
            <div className="column">
            <Img fluid={props.data.imageSix.childImageSharp.fluid} alt="Ecoblogs" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="columns">
            <div className="column">
            <Img fluid={props.data.imageSeven.childImageSharp.fluid} alt="Grays Virtual" />
            </div>
            <div className="column">
            <Img fluid={props.data.imageEight.childImageSharp.fluid} alt="Hawaii Questions" />
            </div>
            <div className="column">
            <Img fluid={props.data.imageNine.childImageSharp.fluid} alt="The Secret Quotes" />
            </div>
          </div>
        </div>

        <div className="bump">&nbsp;</div>
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

export default WorkPage

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
    imageOne: file(relativePath: { eq: "marshcreek-devices.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "haleamano_devices.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "spartan_new.jpg" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "aalahandyman_screen.png" }) {
      ...fluidImage
    }
    imageFive: file(relativePath: { eq: "bookclubs_screen.png" }) {
      ...fluidImage
    }
    imageSix: file(relativePath: { eq: "ecoblogs_screen.png" }) {
      ...fluidImage
    }
    imageSeven: file(relativePath: { eq: "grays_virtual.png" }) {
      ...fluidImage
    }
    imageEight: file(relativePath: { eq: "HiQ_screen.png" }) {
      ...fluidImage
    }
    imageNine: file(relativePath: { eq: "secretq_screen.png" }) {
      ...fluidImage
    }
  }
`