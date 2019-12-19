import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import ActiveLink from './activeLink'

export default () => {
  return (
    <Navbar bg="light" expand="xl" fixed="top">
      <Navbar.Brand>Lifeline 16911</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <ActiveLink href="/"><a className="nav-link">Home</a></ActiveLink>
          <ActiveLink href="/services"><a className="nav-link">Services</a></ActiveLink>
          <ActiveLink href="/clinics"><a className="nav-link">Clinics / Pods</a></ActiveLink>
          <ActiveLink href="/blog"><a className="nav-link">Blog</a></ActiveLink>
          <ActiveLink href="/academy"><a className="nav-link">Academy</a></ActiveLink>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
      </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
