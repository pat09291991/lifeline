import Link from "next/link";
import React, { useState, useEffect, Fragment } from 'react';
import { Container, Row, Col, OverlayTrigger, Image, Tooltip, Dropdown, Modal, Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Router from 'next/router'
import jwt from 'jwt-decode';
import cookie from 'js-cookie'
import LogoImage from '../public/logo512.png'
import { faHome} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardNavbar = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const handleLogout = () =>{
    setShow(false)
    setIsLogged(false)
    Router.push("/")
    cookie.remove("token")
    cookie.remove("plan")
    cookie.remove("page")
    cookie.remove("price")
    cookie.remove("total")
    cookie.remove("items")
  }

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
    <Fragment>
    <Container fluid={true} className="divNav shadow px-0">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/"><Image src={LogoImage} height={48} />
            <strong className="pl-2 nav-title">LIFELINE 16-911</strong>
          </Navbar.Brand>
          
          <div className="ml-auto">
            <Button onClick={()=>Router.push('/')} className="my-0 btn btn-danger">
              <FontAwesomeIcon style={{height: "20px"}} icon={faHome} />
            </Button>
          </div>
        </Navbar>
    </Container>
    </Fragment>
  )

};

export default DashboardNavbar;
