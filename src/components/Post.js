import React from "react"

import SinglePostStyles from "./styles/SinglePostStyles"
import { Link } from "gatsby"

const Post = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const slug = node.fields.slug
  const date = node.frontmatter.date
  const description = node.frontmatter.description
  const excerpt = node.excerpt

  return (
    <Link to={slug}>
      <SinglePostStyles>
        <h3>
          <Link to={slug}>{title}</Link>
        </h3>
        <small>{date}</small>
        <p
          dangerouslySetInnerHTML={{
            __html: description || excerpt,
          }}
        />
      </SinglePostStyles>
    </Link>
  )
}

export default Post
