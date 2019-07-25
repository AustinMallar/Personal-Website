import React from "react"

import Bio from "../components/bio"
import Posts from "../components/Posts"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" />
        <Bio />
        <h2 style={{ marginBottom: "1.5rem" }}>
          Recent <span style={{ color: "#086CE4" }}>Posts</span>
        </h2>
        <Posts />
      </Layout>
    )
  }
}

export default BlogIndex
