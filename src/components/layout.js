import React from "react"

import PageTransition from "gatsby-plugin-page-transitions"
import LayoutStyles from "./styles/LayoutStyles"
import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  const { children } = props

  return (
    <LayoutStyles>
      <Header />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      <Footer />
    </LayoutStyles>
  )
}

export default Layout
