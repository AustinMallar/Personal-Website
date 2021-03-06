/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/austin.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div style={{ margin: "2rem 0 4rem 0" }}>
      <p className="bio-text">Hey! My name is Austin.</p>
      <p className="bio-text">
        I am the Lead Technology Consultant at{" "}
        <a
          style={{ fontWeight: "600" }}
          href="//www.longhouse.co/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Longhouse Media
        </a>
        . I also play in the rock band{" "}
        <a
          style={{ fontWeight: "600" }}
          href="//servoband.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Servo
        </a>
      </p>
    </div>
  )
}

export default Bio
