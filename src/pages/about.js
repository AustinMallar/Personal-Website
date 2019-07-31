import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="About"
          description="Austin Mallar is a web developer, IT consultant and musician."
        />
        <h2>
          About <span style={{ color: "#086CE4" }}>Austin</span>
        </h2>
        <small>Full-stack web developer and IT consultant.</small>

        <div className="bio-area">
          <p>
            My name is Austin Mallar and I'm a full-stack web developer located
            in Vancouver, BC. I work primarily with the following web
            frameworks/libraries:
          </p>

          <ul className="list">
            <li>React</li>
            <li>Gatsby</li>
            <li>Express</li>
            <li>Django</li>
          </ul>

          <p>
            I am currently enrolled in the Bachelor of Computer Information
            Systems program at{" "}
            <a href="https://ufv.ca" target="_blank">
              the University of the Fraser Valley
            </a>
            , I will be graduating in the Fall of 2019.
          </p>
        </div>
      </Layout>
    )
  }
}

export default AboutIndex
