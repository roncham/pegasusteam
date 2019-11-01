import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
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
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <section className="blog-page">
              <div className="blog-list-container">
                <div className="container">
                  <h1 classname="bump">PegasusTeam Blog</h1>
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div className="post card" key={node.id}>
                      <Link to={node.frontmatter.slug}>
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