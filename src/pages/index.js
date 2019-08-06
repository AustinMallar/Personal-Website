import React from "react"

import Bio from "../components/bio"
import Posts from "../components/Posts"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    return (
      <>
        <SEO title="Home" />
        <Bio />
        <h2 style={{ marginBottom: "1.5rem" }}>
          Recent <span style={{ color: "#086CE4" }}>Posts</span>
        </h2>
        <Posts />
      </>
    )
  }
}

export default BlogIndex
