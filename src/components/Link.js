import React from "react"
import { Link as GatsbyLink } from "gatsby"

const Link = ({ to, children }) => {
  return (
    <GatsbyLink to={to === "home" ? "/" : `/${to}`}>{children}</GatsbyLink>
  )
}

export default Link
