import React from "react"

import FooterStyles from "./styles/FooterStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

const footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        <div className="social-links">
          <FontAwesomeIcon className="social-icon" icon={faTwitter} />
          <FontAwesomeIcon className="social-icon" icon={faGithub} />
        </div>
      </div>
    </FooterStyles>
  )
}

export default footer
