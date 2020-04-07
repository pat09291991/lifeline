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
    <Container fluid={true} className="divNav">
      <Row>
        <Col lg={6} md={6} sm={6} xs={6}>
          <div className="d-flex align-items-center h-100" onClick={handleBackToHome}>
              <Image src={LogoImage} height={48} />
              <strong className="pl-2 nav-title"><span className="text-red">LIFELINE</span><br /> 16-911</strong>
            </div>
        </Col>
        <Col lg={6} md={6} sm={6} xs={6}>
          <div className="float-right form-inline">
            <img src="Image/dp.jpeg" className="imgProfile"  style={{ width: "40px", borderRadius: "50%" }}/>
            <span className="lblName mx-2">{loggedUser.first_name + " " + loggedUser.last_name}</span>
            <Dropdown>
              <Dropdown.Toggle
                className="dropdown-profile"
                title=""
                id="dropdown-basic"
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
                <Dropdown.Item href="/profile">Edit Profile</Dropdown.Item>
                <Dropdown.Item href="/profile">Settings</Dropdown.Item>
                <Dropdown.Item onClick={handleShow}>Logout</Dropdown.Item>
              </Dropdown.Menu>

            </Dropdown>
          </div>
        </Col>
      </Row>
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
