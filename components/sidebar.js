import React, { Fragment, useState } from 'react'
import Link from "next/link";
import { Container, Row, Col, OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import Router from 'next/router'

const Sidebar = () => {

const [sidebarOpen, setSidebarOpen] = useState(false)
const handleExit = () =>{
  Router.push("/")
}
  const eventHandler = () => {
    if(sidebarOpen){
      setSidebarOpen(false);
    }else{
      setSidebarOpen(true);
    }
  }

const colSideMenuStyle = {
  width: sidebarOpen ? '175px' : '65px',
  boxShadow: sidebarOpen ? '0 2px 20px -6px #cc292f' : ''
}

const btnStyle = {
  width: sidebarOpen ? '150px' : '45px'
}
const btnSpan ={
  display: sidebarOpen ? 'inline' : 'none'
}

const btnRight = {
  left: sidebarOpen ? '160px' : '50px',
  transform: sidebarOpen ? 'rotate(180deg)' : 'none'
}
const logoStyle={
  marginLeft: sidebarOpen ? '55px' : 'auto'
}

const handleBackToHome = () => {
  Router.push("/")
}
  return (
        <Container fluid={true} className="h100 colSideMenu float-right" style={colSideMenuStyle}>
      <Row className="h100 align-items-center rowSide justify-content-center">
        <Col lg={12} className="text-center" style={{ position: "relative" }}>
          <img src="../Image/logo.png" className="imgLogoLifeline" onClick={handleBackToHome} style={logoStyle}></img>

            <Link href="/dashboard">
              <button className="btn btnDashboard" style={btnStyle}>
                <img src="../Image/home.png" className="imgLogo imgUser" />
                <span className="text-white" style={btnSpan}>Dashboard</span>
              </button>
            </Link>

            <Link href="/dashboard/profile">
              <button className="btn btnProfile" style={btnStyle}>
                <img src="../Image/user.png" className="imgLogo imgUser" />
                <span className="text-white" style={btnSpan}>Profile</span>
              </button>
            </Link>

            <Link href="/dashboard/membership">
              <button className="btn btnMembership" style={btnStyle}>
                <img src="../Image/membership.png" className="imgLogo" />
                <span className="text-white" style={btnSpan}>Membership</span>
              </button>
            </Link>

            <Link href="/dashboard/payments">
              <button className="btn btnPayment" style={btnStyle}>
                <img src="../Image/payment.png" className="imgLogo" />
                <span className="text-white" style={btnSpan}>Payment</span>
              </button>
            </Link>

            <Link href="/dashboard/bookings">
              <button className="btn btnServices" style={btnStyle}>
                <img src="../Image/services.png" className="imgLogo" />
                <span className="text-white" style={btnSpan}>Bookings</span>
              </button>
            </Link>

            <Link href="/notes">
              <button className="btn btnNotes" style={btnStyle}>
                <img src="../Image/notepad.png" className="imgLogo" />
                <span className="text-white" style={btnSpan}>Notes</span>
              </button>
            </Link>

            <button className="btn btnExit" onClick={handleExit} style={btnStyle}>
              <img src="../Image/logout.png" className="imgLogo" />
              <span style={btnSpan}>Exit</span>
            </button>

          <button className="btn btnRight bg-light" style={btnRight} onClick={eventHandler}>
            <img src="../Image/next.png" className="imgLogo imgRight"/>
          </button>
        </Col>
      </Row>
      <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
      <script defer src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
        <script  defer src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
        <script  defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>

    </Container>


  )
};

export default Sidebar;