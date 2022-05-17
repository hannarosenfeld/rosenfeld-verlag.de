import React from "react"
import { Link } from "gatsby"

const Footer = () => (
          <footer className="mt-5">
            <div>
              <div style={{textAlign: "center", fontSize: "0.9em", marginBottom: "0.2em"}}>
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
)


export default Footer
