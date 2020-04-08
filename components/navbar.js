import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, OverlayTrigger, Image, Tooltip, Dropdown, Modal, Button } from "react-bootstrap";
import Router from 'next/router'
import jwt from 'jwt-decode';
import cookie from 'js-cookie'
import LogoImage from '../public/logo512.png'

const Navbar = () => {

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

const handleBackToHome = () => {
  Router.push("/")
}
  return (
    <Container fluid={true} className="divNav d-flex align-items-center justify-content-between">
        <Col lg={6} md={6} sm={6} xs={6}>
          <div className="d-flex align-items-center ml-5" onClick={handleBackToHome}>
              <Image src={LogoImage} height={48} />
              <strong className="pl-2 nav-title"><span className="text-red">LIFELINE</span><br /> 16-911</strong>
            </div>
        </Col>
        <Col lg={6} md={6} sm={6} xs={6} className="d-flex justify-content-end">
            <Button onClick={()=>Router.push('/')} className="my-0 btn btn-danger" style={{marginRight: "10px", width: "100px", height: "40px"}}>Go home</Button>
            <Button onClick={handleLogout} className="my-0 btn btn-secondary" style={{marginRight: "10px", width: "100px", height: "40px"}}>Logout</Button>
        </Col>
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
    </Container>
  )

};

export default Navbar;
