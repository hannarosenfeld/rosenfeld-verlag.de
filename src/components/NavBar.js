import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useStaticQuery, Link, graphql } from 'gatsby'

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
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {result.datoCmsMenu.menuItems.map(menuItem => (
              <Nav.Link key={menuItem.originalId} href="#">{menuItem.labelText === "Home" ? "" : menuItem.labelText}</Nav.Link>
            ))}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default NavBar
