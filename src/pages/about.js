import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="About" />
        <h2>About</h2>
      </Layout>
    )
  }
}

export default BlogIndex
