import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Form, Button, Image, Modal, } from 'react-bootstrap'
import ActiveLink from './activeLink'
import LogoImage from '../../public/logo512.png'
import Link from 'next/link'
import cookie from 'js-cookie'
import jwt from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {

const [modalShow, setModalShow] = React.useState(true);

const [token, setToken] = useState({})
const [loggedUser, setLoggedUser] = useState({});

useEffect(()=>{
  const token = cookie.get("token");
  const accessToken = JSON.parse(token);
  setToken(accessToken)
  
  const payload = jwt(accessToken.access);
  setLoggedUser(payload);
  
  if(!payload.address){
    setModalShow(true);
  } 
}, [])
  
  
  
  return (
    <Navbar bg="light" expand="xl" fixed="top" style={{ borderBottom: '1px solid #0366B1' }}>
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
          <ActiveLink href="/" activeClassName="active"><a className="nav-link">Home</a></ActiveLink>
          <ActiveLink href="/services" activeClassName="active"><a className="nav-link">Services</a></ActiveLink>
          <ActiveLink href="/clinics" activeClassName="active"><a className="nav-link">Clinics / Pods</a></ActiveLink>
          <ActiveLink href="/blog" activeClassName="active"><a className="nav-link">Blog</a></ActiveLink>
          <ActiveLink href="/academy" activeClassName="active"><a className="nav-link">Academy</a></ActiveLink>
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

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Missing Information:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
           Please complete your profile details.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="pr-5 mr-2 text-center">Later</Button>
        <Link href="/profile"><Button className="text-center btn-danger">GO</Button></Link>
      </Modal.Footer>
    </Modal>
  );
}
