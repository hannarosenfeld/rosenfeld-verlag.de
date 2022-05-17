import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

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
          <footer>
            <div>
              <div style={{textAlign: "center", fontSize: "0.9em", marginBottom: "0.5em"}}>
                <Link className="p-1">Impressum</Link>
                <Link className="p-1">Datenschutz</Link>
                <Link className="p-1">Kontakt</Link>
              </div>
              <div style={{textAlign: "center", fontSize: "0.9em"}}>
                © {new Date().getFullYear()}, Built by
                {` `}
                <a href="https://www.hannarosenfeld.com">Hanna Rosenfeld</a>
              </div>
            </div>
          </footer>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
