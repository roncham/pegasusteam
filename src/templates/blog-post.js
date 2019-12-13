import React from "react";
//import { Helmet } from 'react-helmet';
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default ({ data }) => {  
  const post = data.markdownRemark;
  return (
    <React.Fragment>
    <Layout>
      <Header />
      <section className="container">
        <div className="row">
          <div className="column is-8 is-offset-2">
            <section className="blog-content">
            <h1 className="is-size-2">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </section>
          </div>
        </div>
      </section>
    </Layout>
    <Footer />
    </React.Fragment>
    )
  }
  
  export const query = graphql`
    query BlogPostBySlug($slug: String!) {
      markdownRemark(frontmatter: { slug: { eq: $slug } }) {  
        html
        frontmatter {
          title
          slug
        }
      }
    }
  `