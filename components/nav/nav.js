import React from 'react'
import { Navbar, Nav, Form, Button, Image } from 'react-bootstrap'
import ActiveLink from './activeLink'
import LogoImage from '../../public/logo512.png'
import Link from 'next/link'

export default () => {
  return (
    <Navbar bg="light" expand="xl" fixed="top">
      <Navbar.Brand>
        <Link href="/">
          <a style={{ textDecoration: 'none', color: 'black' }}>
            <div className="d-flex align-items-center">
              <Image src={LogoImage} height={48} />
              <strong className="pl-2 nav-title"><span className="text-red">LIFELINE</span> 16-911</strong>
            </div>
          </a></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <ActiveLink href="/"><a className="nav-link">Home</a></ActiveLink>
          <ActiveLink href="/services"><a className="nav-link">Services</a></ActiveLink>
          <ActiveLink href="/clinics"><a className="nav-link">Clinics / Pods</a></ActiveLink>
          <ActiveLink href="/blog"><a className="nav-link">Blog</a></ActiveLink>
          <ActiveLink href="/academy"><a className="nav-link">Academy</a></ActiveLink>
        </Nav>
        <Form inline>
          <Button className="mx-1" variant="warning">Be a Member</Button>
          <Button className="mx-1" variant="warning">Pay for Services</Button>
          <Link href="/sign-up"><Button className="mx-1" variant="outline-primary">Sign Up</Button></Link>
          <Link href="/login"><Button className="mx-1" variant="primary">Login</Button></Link>
        </Form>
      </Navbar.Collapse>
      <style jsx>{`
        .nav-title {
          font-size: 1.65rem;
        }

        .nav-link {
          font-weight: 600;
        }
        `}</style>
    </Navbar>
  )
}
