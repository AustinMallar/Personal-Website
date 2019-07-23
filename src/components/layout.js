import React from "react"

import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  const { location, title, children } = props

  return (
    <React.Fragment>
      <Header location={location} title={title} />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
