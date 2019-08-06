import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import BlogPostTemplateStyles from "../components/styles/BlogPostTemplateStyles"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <BlogPostTemplateStyles>
          <h1 className="post-title">{post.frontmatter.title}</h1>
          <p className="post-date">{post.frontmatter.date}</p>
          <Img
            className="featured-image"
            sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
          />
          <div className="post-body">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>

          <ul className="post-nav">
            <li className="prev-post">
              {previous && (
                <Link to={`posts${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li className="next-post">
              {next && (
                <Link to={`posts${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </BlogPostTemplateStyles>
      </>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
