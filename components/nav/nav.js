<<<<<<< HEAD
import React, { useEffect } from 'react'
=======
import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
>>>>>>> feature/auth
import { Navbar, Nav, Form, Button, Image } from 'react-bootstrap'
=======
import { Navbar, Nav, Form, Button, Image, Dropdown, Modal, Container, Row, Col, DropdownButton } from 'react-bootstrap'
>>>>>>> feature/dashboard
import ActiveLink from './activeLink'
import LogoImage from '../../public/logo512.png'
import Link from 'next/link'
import Router from 'next/router'
import cookie from 'js-cookie'
import jwt from 'jwt-decode';


export default () => {

<<<<<<< HEAD
<<<<<<< HEAD
return (
=======
=======
 const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogout = () =>{
    setShow(false)
    setIsLogged(false)
    Router.push("/")
    cookie.remove("token")
  }
const [modalShow, setModalShow] = React.useState(true);

>>>>>>> feature/dashboard
const [token, setToken] = useState({})
const [loggedUser, setLoggedUser] = useState({});
const [isLogged, setIsLogged] = useState(false);

useEffect(()=>{
  const token = cookie.get("token");
  if(token){
    const accessToken = JSON.parse(token);
    const payload = jwt(accessToken.access);
    setToken(accessToken)
    setLoggedUser(payload);
    setIsLogged(true)
  } 
}, [])
  
  
  
  return (
>>>>>>> feature/auth
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
          {isLogged ? 
            <div className="float-right form-inline">
            <img src="Image/dp.jpeg" className="imgProfile"  style={{ width: "40px", borderRadius: "50%" }}/>
            <span className="lblName mx-2">{loggedUser.first_name + " " + loggedUser.last_name}</span>
            <DropdownButton
            alignRight
            id="dropdown-menu-align-right"
            >
              <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
              <Dropdown.Item href="/profile">Edit Profile</Dropdown.Item>
              <Dropdown.Item href="/profile">Settings</Dropdown.Item>
              <Dropdown.Item onClick={handleShow}>Logout</Dropdown.Item>
            </DropdownButton>
          </div>
          :
          <div>
              <Link href="/sign-up"><Button className="mx-1" variant="outline-primary">Sign Up</Button></Link>
              <Link href="/login"><Button className="mx-1" variant="primary">Login</Button></Link>
            </div>
          }
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
        <Modal show={show}
        onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="modalTitleLogout">Logout Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid={true}>
            <Row>
              <Col lg={12} md={12} sm={12}>
                <p className = "pModalBody">Are you sure you want to logout your account? This action can not be undone.</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className = "modalFooter">
          <Button variant="secondary" className = "btnCancel"  onClick={handleClose}>Cancel</Button>
          <Button variant="primary" className = "btnLogout" onClick={handleLogout}>Logout</Button>
        </Modal.Footer>
      </Modal>
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
