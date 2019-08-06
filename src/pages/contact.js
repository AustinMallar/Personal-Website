import React from "react"

import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

class ContactIndex extends React.Component {
  render() {
    return (
      <>
        <SEO
          title="Contact Me"
          description="Austin Mallar is a web developer, IT consultant and musician."
        />
        <h2>
          Get In <span style={{ color: " #086CE4" }}>Touch</span>
        </h2>
        <ContactForm />
      </>
    )
  }
}

export default ContactIndex
