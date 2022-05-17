import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Footer from "./Footer"
import NavBar from "./NavBar"
import "../styles/global.css"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <div className="inner-body">
          <NavBar/>
          <main style={{margin: "1.5em 2em"}}>
            {children}
          </main>
          <Footer/>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
