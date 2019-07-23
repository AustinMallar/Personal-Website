import React from "react"

import LayoutStyles from "./styles/LayoutStyles"
import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  const { children } = props

  return (
    <LayoutStyles>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutStyles>
  )
}

export default Layout
