import React from "react"

import FooterStyles from "./styles/FooterStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

const footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        <div className="social-links">
          <span style={{ fontSize: "1.5rem", marginRight: "1rem" }}>
            Follow Me:
          </span>
          <a className="social-icon" href="//twitter.com/austin_mallar">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className="social-icon" href="//github.com/austinmallar">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </FooterStyles>
  )
}

export default footer
