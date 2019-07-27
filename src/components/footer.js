import React from "react"

import FooterStyles from "./styles/FooterStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faCodepen,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        <div className="social-links">
          <span style={{ fontSize: "1.5rem", marginRight: "1rem" }}>
            Follow Me:
          </span>
          <a
            className="social-icon"
            target="_blank"
            href="//codepen.com/austinmallar"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCodepen} />
          </a>
          <a
            className="social-icon"
            target="_blank"
            href="//github.com/austinmallar"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="social-icon"
            target="_blank"
            href="//www.linkedin.com/in/austin-mallar-92b545124/"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </FooterStyles>
  )
}

export default footer
