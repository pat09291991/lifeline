import React, { useState, useEffect, Fragment } from 'react'
import { Navbar, Nav, Form, Button, Image, Dropdown, Modal, Container, Row, Col, DropdownButton,NavDropdown } from 'react-bootstrap'
import ActiveLink from './activeLink'
import LogoImage from '../../public/logo512.png'
import Link from 'next/link'
import Router from 'next/router'
import cookie from 'js-cookie'
import jwt from 'jwt-decode';


export default () => {

 const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogout = () =>{
    setShow(false)
    setIsLogged(false)
    Router.push("/")
    cookie.remove("token")
    cookie.remove("plan")
    sessionStorage.removeItem("membership");
  }
const [modalShow, setModalShow] = React.useState(true);

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
    <Fragment>
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
        <Nav>
          <div className="d-flex">
          <button onClick={()=>Router.push('/membership')} className="btn btn-warning  nav-link mx-1 mb-1 d-none" id="member1">Be a Member</button>
          <button className="memberservice btn btn-warning mx-1 nav-link mb-1 d-none" id="payservices1">Pay for Services</button>
          </div>
          <NavDropdown.Divider />
          <ActiveLink href="/" activeClassName="active"><a className="nav-link mx-auto home">Home</a></ActiveLink>
          <NavDropdown.Divider />
          <ActiveLink href="/services" activeClassName="active"><a className="nav-link mx-auto services">Services</a></ActiveLink>
          <NavDropdown.Divider />
          <ActiveLink href="/clinics" activeClassName="active"><a className="nav-link mx-auto clinics">Clinics / Pods</a></ActiveLink>
          <NavDropdown.Divider />
          <ActiveLink href="/blog" activeClassName="active"><a className="nav-link mx-auto blog">Blog</a></ActiveLink>
          <NavDropdown.Divider />
          <ActiveLink href="/academy" activeClassName="active"><a className="nav-link mx-auto academy">Academy</a></ActiveLink>
          <NavDropdown.Divider />
          
        </Nav>
        <Nav className="ml-auto">
          <button onClick={()=>Router.push('/membership')} className="btn btn-warning  nav-link mx-1 mb-1" id="member2">Be a Member</button>
          <button onClick={()=>Router.push('/payforservices')} className="memberservice btn btn-warning mx-1 nav-link mb-1" id="payservices2">Pay for Services</button>
        
          {isLogged ? 
            <Fragment>
            
            <Button onClick={()=>Router.push('/dashboard')} className="mx-1 mb-1" variant="danger">Dashboard</Button>
            <Button onClick={handleShow} className="mx-1 mb-1" variant="secondary">Logout</Button>

          </Fragment>
          :
          <Fragment>
              <Link href="/sign-up"><Button className="mx-1 mb-1" variant="outline-primary">Sign Up</Button></Link>
              
              <Link href="/login"><Button className="mx-1 mb-1" variant="primary">Login</Button></Link>
            </Fragment>
          }
        </Nav>
      </Navbar.Collapse>
      <style jsx>{`
        .nav-title {
          font-size: 1.65rem;
        }

        .nav-link {
          font-weight: 600;
        }
      @media only screen and (max-width: 1200px) {
        
        #member2{
          display: none !important;
        }
        #payservices2{
          display: none !important;
        }
        #member1{
          display: block !important;
          width: 100%;
        }
        #payservices1{
          display: block !important;
          width: 100%;
        }
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
    </Fragment>
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
        <Link href="/dashboard/profile"><Button className="text-center btn-danger">GO</Button></Link>
      </Modal.Footer>
    </Modal>
  );
}
