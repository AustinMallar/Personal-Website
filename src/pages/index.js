import React from "react"

import Bio from "../components/bio"
import Posts from '../components/Posts'
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} >
        <SEO title="Home" />
        <Bio />
      <Posts />
      </Layout>
    )
  }
}

export default BlogIndex

