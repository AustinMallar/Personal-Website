import React from "react"
import { graphql,useStaticQuery } from "gatsby"

import Post from "./Post"


const Posts = () => {

    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
              }
            }
          }
        }
      }
    `)

    const posts = data.allMarkdownRemark.edges
    return (
        <div>
        {posts.map(({ node }) => {
            return <Post key={node.fields.slug} node={node} />
            })}
        </div>
    )
}

export default Posts
