import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default () => (
  <StaticQuery
    query = {graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                date
                slug
              }
              fields {  
                slug 
              }
              excerpt
            }
          }
        }
      }
    `}

    render={data => (
      <Layout>
        <>
          <Helmet>
            <title>Blog | PegasusTeam</title>
            <link rel="canonical" href="https://pegasusteam.com/blog" />
          </Helmet>
        </>
      <Header />

      <div className="container">
        <div className="row">
          <div className="column is-8 is-offset-2">
            <section className="blog-page">
              <div className="blog-list-container">
                <div className="container">
                  <h1 className="section-heading has-text-centered">PegasusTeam Blog</h1>
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div className="post card" key={node.id}>
                      <Link to={node.frontmatter.slug} aria-label="Go to article">
                        <h2>{node.frontmatter.title}{" "}</h2>
                        <p className="post-date">{node.frontmatter.date}</p>
                        <p className="text-muted">
                          {node.excerpt}
                        </p>
                        </Link>
                    </div>
                  ))}   
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    <Footer />
    </Layout>
    )}
  />
)