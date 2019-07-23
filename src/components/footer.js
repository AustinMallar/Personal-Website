import React from "react"

import FooterStyles from "./styles/FooterStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

const footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        <div className="social-links">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className="footer-text">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a style={{ fontWeight: "600" }} href="https://www.gatsbyjs.org">
            Gatsby
          </a>
        </div>
      </div>
    </FooterStyles>
  )
}

export default footer
