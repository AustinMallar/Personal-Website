import React from "react"

import { Link } from "gatsby"

const Post = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const slug = node.fields.slug
  const date = node.frontmatter.date
  const description = node.frontmatter.description
  const excerpt = node.excerpt

  return (
    <div>
      <h3>
        <Link to={slug}>{title}</Link>
      </h3>
      <small>{date}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: description || excerpt,
        }}
      />
    </div>
  )
}

export default Post
