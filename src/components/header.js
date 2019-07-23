import React from "react"
import { Link } from "gatsby"

const Header = props => {
  const { title } = props

  return (
    <h1>
      <Link to="/">{title}</Link>
    </h1>
  )
}

export default Header
