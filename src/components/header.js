import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import HeaderStyles from "./styles/HeaderStyles"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      avatar: file(absolutePath: { regex: "/austin.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <HeaderStyles>
      <div className="container">
        <h1 className="site-title">
          <Link className="site-link" to="/">
            {data.site.siteMetadata.title}
          </Link>
        </h1>
        <div className="header-logo-wrap">
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={data.site.siteMetadata.author}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </div>
      </div>
    </HeaderStyles>
  )
}

export default Header
