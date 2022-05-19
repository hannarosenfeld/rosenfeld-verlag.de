import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'

import Link from './Link'
import logo from '../images/rosenfeldverlag.svg'
import '../styles/NavBarSticky.css'

const NavBarSticky = ({ SiteTitle }) => {
    const result = useStaticQuery(graphql`
    {
      datoCmsMenu {
          menuItems {
            labelText
            originalId
            labelText
            destination {
              slug
            }
        }
      }
    }
  `)
    return (
        <Navbar expand="lg" style={{
            width: "95%",
            margin: "0 auto",
            position: "absolute",
            right: "0",
            left: "0",
            zIndex: "1030"
        }}>
          <Container id="navbar-container">
            <Link className="logo" alt="logo" to="#"><img src={logo} width="205px"/></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-reset">
              <Nav className="m-auto">
                {result.datoCmsMenu.menuItems.map(menuItem => (
                    <Link style={{color: "#EEEEEE"}}key={menuItem.originalId} to={menuItem.destination.slug}>
                      {menuItem.labelText === "Home" ? "" : menuItem.labelText}
                    </Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}


export default NavBarSticky
