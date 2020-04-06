import Link from "next/link";
import React, { useState } from 'react';
import { Container, Row, Col, OverlayTrigger, Tooltip, Dropdown, Modal, Button } from "react-bootstrap";
import Router from 'next/router'
import cookie from 'js-cookie'

const Navbar = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    cookie.remove("token");
    Router.push("/")
  }

  return (
    <Container fluid={true} className="divNav">
      <Row>
        <Col lg={6} md={6} sm={6} xs={6}>
          <p className="pTitle">My Dashboard</p>
        </Col>
        <Col lg={6} md={6} sm={6} xs={6}>
          <div className="float-right form-inline">
            <img src="Image/dp.jpeg" className="imgProfile" />
            <span className="lblName">Alfon Labadan</span>
            <Dropdown>
              <Dropdown.Toggle
                className="dropdown-profile"
                id="dropdown-basic"
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={handleShow}>Logout</Dropdown.Item>
                <Dropdown.Item href="/profile">Edit Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
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
