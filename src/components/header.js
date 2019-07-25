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
      siteLogo: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
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
      <div className="nav-bar">
        <div className="logo">
          <Link to="/">
            <Image
              fixed={data.siteLogo.childImageSharp.fixed}
              alt={data.site.siteMetadata.author}
            />
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link className="nav-link" activeClassName="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" activeClassName="active" to="about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="header-logo-wrap">
          <Link to="/">
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={data.site.siteMetadata.author}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
          </Link>
        </div>
      </div>
    </HeaderStyles>
  )
}

export default Header
