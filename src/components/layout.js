import React from "react"

import Transition from "./transition"
import LayoutStyles from "./styles/LayoutStyles"
import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  const { children, location } = props

  return (
    <LayoutStyles>
      <Header />
      <Transition location={location}>
        <main>{children}</main>
      </Transition>
      <Footer />
    </LayoutStyles>
  )
}

export default Layout
