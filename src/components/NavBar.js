import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'

import Link from './Link'
import logo from '../images/rosenfeldverlag.svg'
import './NavBar.css'

const NavBar = ({ SiteTitle }) => {
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
    <Navbar expand="lg">
      <Container>
        <Link className="logo" alt="logo" to="#"><img src={logo} width="205px"/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {result.datoCmsMenu.menuItems.map(menuItem => (
              <Link key={menuItem.originalId} to={menuItem.destination.slug}>
                {menuItem.labelText === "Home" ? "" : menuItem.labelText}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default NavBar
