import React, { useState, useEffect, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Tooltip from "react-bootstrap/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Row, Col, OverlayTrigger, Modal, Button } from "react-bootstrap";
import Sidebar from "../components/sidebar";
import DashboardNavbar from "../components/navbar";
import Bottom from "../components/bottom";
import Loader from "../components/loader";
import Head from "next/head";
import cookie from 'js-cookie'
import jwt from 'jwt-decode';
import Link from 'next/link'


const dashboard = (props) => {

const [modalShow, setModalShow] = React.useState(false);

  // function loadwindows() {
  //       const element = document.querySelector('#load')
  //       element.classList.add('animated', 'fadeOut')
  //       $('loader').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animation end', document.getElementById('load').setAttribute('style', 'display: none !important'));
    
  //     }

const [token, setToken] = useState({})
const [loggedUser, setLoggedUser] = useState({});

useEffect(()=>{
  const token = cookie.get("token");
  if(token){
    const accessToken = JSON.parse(token);
    const payload = jwt(accessToken.access);
    setToken(accessToken)
    setLoggedUser(payload);
  }


}, [])

  return (
    <Fragment>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossOrigin="anonymous"
        ></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
        <link rel="stylesheet" type="text/css" href="Css/dashboard.css" />
        <link rel="stylesheet" type="text/css" href="Css/section.css" />
        <script type="text/javascript" src="Script/myScript.js"></script>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap"
          rel="stylesheet"
        />

      </head>
        <body>
        <Sidebar></Sidebar>
        <DashboardNavbar></DashboardNavbar>
        

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <Container fluid={true} style={{ zIndex: "-1", paddingLeft: "90px" }} className="colMain" >
          <Row style={{ paddingTop: "100px" }}>
            <Col lg={12}>
              <p className="pGreetings">Good morning</p>
              <p className="pName">{loggedUser.first_name + " " + loggedUser.last_name}!</p>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col lg={3} md={6} sm={6} xs={6}>
              <div className="divBox">
                <p className="pBoxTitle">Membership History</p>
                <p className="pBoxTitleResult"><span>101</span> Membership History</p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} xs={6}>
              <div className="divBox">
                <p className="pBoxTitle">Payment History</p>
                <p className="pBoxTitleResult"><span>20</span> Payment History</p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} xs={6}>
              <div className="divBox">
                <p className="pBoxTitle">Services</p>
                <p className="pBoxTitleResult"><span>20</span> Services</p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} xs={6}>
              <div className="divBox">
                <p className="pBoxTitle">Profile</p>
                <p className="pBoxTitleResult"><span>12.11.19</span> Last Edit</p>
              </div>
            </Col>
          </Row>

          <Row className="rowTable" style={{ paddingLeft: "20px" }}>
            <main>
              <input id="tab1" type="radio" name="tabs" defaultChecked />

              <label htmlFor="tab1">Membership</label>
              <input id="tab2" type="radio" name="tabs" />
              <label htmlFor="tab2">Payments</label>
              <input id="tab3" type="radio" name="tabs" />
              <label htmlFor="tab3">Services</label>
              <section id="content1">
                <table>
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email Address</th>
                      <th>Mobile Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-column="First Name">James</td>
                      <td data-column="Last Name">Matman</td>
                      <td data-column="Email">jamesmathan@gmail.com</td>
                      <td data-column="Number">09568795845</td>
                    </tr>
                    <tr>
                      <td data-column="First Name">Andor</td>
                      <td data-column="Last Name">Nagy</td>
                      <td data-column="Email">andor12nagy@ymail.com</td>
                      <td data-column="Number">09425783215</td>
                    </tr>
                    <tr>
                      <td data-column="First Name">Tamas</td>
                      <td data-column="Last Name">Biro</td>
                      <td data-column="Email">birotamas@hotmail.com</td>
                      <td data-column="Number">09421578962</td>
                    </tr>
                    <tr>
                      <td data-column="First Name">Zoli</td>
                      <td data-column="Last Name">Mastah</td>
                      <td data-column="Email">mastah@gmail.com</td>
                      <td data-column="Number">09871546987</td>
                    </tr>
                    <tr>
                      <td data-column="First Name">Szabi</td>
                      <td data-column="Last Name">Nagy</td>
                      <td data-column="Email">Szabinagy@ymail.com</td>
                      <td data-column="Number">09254987853</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section id="content2">
                <table id="myTable">
                  <thead>
                    <tr>
                      <th>Reference Code</th>
                      <th>Paid Item</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-column="Referrence Code">#10254</td>
                      <td data-column="Paid Item">Group Plan 2 Years</td>
                      <td data-column="Date">May 10, 2019</td>
                      <td data-column="Status">Pending</td>
                    </tr>
                    <tr>
                      <td data-column="Referrence Code">#10875</td>
                      <td data-column="Paid Item">Invidual Plan 2 Years</td>
                      <td data-column="Date">January 12, 2019</td>
                      <td data-column="Status">Paid</td>
                    </tr>
                    <tr>
                      <td data-column="Referrence Code">#10575</td>
                      <td data-column="Paid Item">Invidual Plan 2 Years</td>
                      <td data-column="Date">June 14, 2019</td>
                      <td data-column="Status">Failed</td>
                    </tr>
                    <tr>
                      <td data-column="Referrence Code">#10217</td>
                      <td data-column="Paid Item">Group Plan 2 Years</td>
                      <td data-column="Date">December 1, 2018</td>
                      <td data-column="Status">Pending</td>
                    </tr>
                    <tr>
                      <td data-column="Referrence Code">#10423</td>
                      <td data-column="Paid Item">Group Plan 2 Years</td>
                      <td data-column="Date">March 20, 2019</td>
                      <td data-column="Status">Paid</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section id="content3">
                <table id="myTable">
                  <thead>
                    <tr>
                      <th>Full Name</th>
                      <th>Items</th>
                      <th>Book Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-column="Full Name">Alfon Labadan</td>
                      <td data-column="Items">Booking - Doctor on Call</td>
                      <td data-column="Date">June 12, 2019</td>
                      <td data-column="Status">Paid</td>
                    </tr>
                    <tr>
                      <td data-column="Full Name">Eskye Custodio</td>
                      <td data-column="Items">Booking - Doctor on Call</td>
                      <td data-column="Date">May 10, 2019</td>
                      <td data-column="Status">Failed</td>
                    </tr>
                    <tr>
                      <td data-column="Full Name">Nathan Nakar</td>
                      <td data-column="Items">Booking - Book A MedTech, Book A Nurse</td>
                      <td data-column="Date">February 20, 2019</td>
                      <td data-column="Status">Paid</td>
                    </tr>
                    <tr>
                      <td data-column="Full Name">Randolph Yu</td>
                      <td data-column="Items">Booking - Book A MedTech, Book A Nurse</td>
                      <td data-column="Date">November 22, 2019</td>
                      <td data-column="Status">Failed</td>
                    </tr>
                    <tr>
                      <td data-column="Full Name">Leo Sanico</td>
                      <td data-column="Items">Group Plan 2 Years</td>
                      <td data-column="Date">May 10, 2019</td>
                      <td data-column="Status">Pending</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </main>
          </Row>
        </Container>
      </body>
        <Bottom></Bottom>
    </Fragment>
  )
};

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

export default dashboard;
