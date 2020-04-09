import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Tooltip from "react-bootstrap/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Row, Col, OverlayTrigger } from "react-bootstrap";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Bottom from "../components/bottom";
import Loader from "../components/loader";
import Head from "next/head";
import cookie from 'js-cookie'
import jwt from 'jwt-decode';



const profile = () => {


    function loadwindows() {
        const element = document.querySelector('#load')
        element.classList.add('animated', 'fadeOut')
        $('loader').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animation end', document.getElementById('load').setAttribute('style', 'display: none !important'));
    
      }


const [token, setToken] = useState({})
const [loggedUser, setLoggedUser] = useState({});

useEffect(()=>{
  const token = cookie.get("token");
  const accessToken = JSON.parse(token);
  setToken(accessToken)
  const payload = jwt(accessToken.access);
  setLoggedUser(payload);
}, [])


    return (
        <div onLoad = {loadwindows} >
            <head>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossorigin="anonymous"
                />
                <script
                    src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
                    crossorigin="anonymous"
                ></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                    crossorigin="anonymous"
                ></script>
                <script
                    src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
                    crossorigin="anonymous"
                ></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
                <link rel="stylesheet" type="text/css" href="Css/dashboard.css" />
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
            <Loader></Loader>
            <Sidebar></Sidebar>
            <Navbar></Navbar>
            <Container fluid={true} style={{ zIndex: "-1", paddingLeft: "90px" }} className="colMain colProfile">
                <Row style={{ paddingTop: "100px" }}>
                    <Col lg={12}>
                        <p className="pNav">Profile</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "10px" }} className="rowProfile">
                    <Col lg={1}>
                        <img src="Image/dp.jpeg" className="img-fluid imgProfilePic"></img>
                    </Col>
                    <Col lg={11}>
                        <div className="form-inline divNameStatus">
                            <p className="pNameProfile">{loggedUser.first_name + " " + loggedUser.last_name}</p>
                            <p className="pStatus">Active</p>
                        </div>
                        <div className="form-inline divNameStatus">
                            <span className="spanEmail"><img src="Image/mail.png" className="img-fluid imgStatus" style={{ width: "15px", marginTop: "-35px" }}></img></span>
                            <p className="pEmail">{loggedUser.email}</p>
                            <span style={{ marginLeft: "20px" }}><img src="Image/phone.png" className="img-fluid imgStatus" style={{ width: "14px", marginTop: "-35px" }}></img></span>
                            <p className="pEmail">{loggedUser.mobile_number}</p>
                        </div>
                    </Col>
                </Row>
                <Row className="rowProfile">
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <p className="pHeaderProfile">Information</p>
                    </Col>
                    <Col lg={6} mc={6} sm={6} xs={6}>
                        <img src="Image/marker.png" className="img-fluid float-right imgEdit" style={{ width: "20px", marginTop: "-10px" }}></img>
                    </Col>
                </Row>
                <Row style={{ marginTop: "-10px" }}>
                    <Col lg={12}>
                        <hr className="hrProfile"></hr>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Row>
                            <Col lg={3} xs={3}>
                                <p className="pTitleProfile">Status</p>
                            </Col>
                            <Col lg={9} xs={9}>
                                <p className="pTitleResult"><span className="pStatusProfile">Active</span>- Your account will be deactivate on January 12, 2019</p>
                            </Col>
                            <Col lg={3} xs={3}>
                                <p className="pTitleProfile">Street</p>
                            </Col>
                            <Col lg={9} xs={9}>
                                <p className="pTitleResult">Luxembroug Street</p>
                            </Col>
                            <Col lg={3} xs={3}>
                                <p className="pTitleProfile">City</p>
                            </Col>
                            <Col lg={9} xs={9}>
                                <p className="pTitleResult">Imus City</p>
                            </Col>
                            <Col lg={3} xs={3}>
                                <p className="pTitleProfile">State</p>
                            </Col>
                            <Col lg={9} xs={9}>
                                <p className="pTitleResult">Cavite</p>
                            </Col>
                            <Col lg={3} xs={3}>
                                <p className="pTitleProfile">Country</p>
                            </Col>
                            <Col lg={9} xs={9}>
                                <p className="pTitleResult">Philippines</p>
                            </Col>
                            <Col lg={3} xs={3}>
                                <p className="pTitleProfile">Email</p>
                            </Col>
                            <Col lg={9} xs={9}>
                                <p className="pTitleResult">alfonlabadan@gmail.com</p>
                            </Col>
                            <Col lg={3} xs={3}>
                                <p className="pTitleProfile">Contact Number</p>
                            </Col>
                            <Col lg={9} xs={9}>
                                <p className="pTitleResult">09556448544</p>
                            </Col>
                            <Col lg={3} xs={3}>
                                <p className="pTitleProfile">Civil Status</p>
                            </Col>
                            <Col lg={9} xs={9}>
                                <p className="pTitleResult">Single</p>
                            </Col>
                            <Col lg={3} xs={3}>
                                <p className="pTitleProfile">Blood Type</p>
                            </Col>
                            <Col lg={9} xs={9}>
                                <p className="pTitleResult">A</p>
                            </Col>
                            <Col lg={3} xs={3}>
                                <p className="pTitleProfile">Nationality</p>
                            </Col>
                            <Col lg={9} xs={9}>
                                <p className="pTitleResult">Filipino</p>
                            </Col>
                            <Col lg={3} xs={3}>
                                <p className="pTitleProfile">Gender</p>
                            </Col>
                            <Col lg={9} xs={9}>
                                <p className="pTitleResult">Male</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col lg={12}>
                                <p className="pAllergies">Allergies / Allergens</p>
                                <ul>
                                    <li className="pAllergens">
                                        Dust
                                    </li>
                                    <li className="pAllergens">
                                        Pollen
                                    </li>
                                    <li className="pAllergens">
                                        Insect Stings
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <p className="pAllergies">Disease prevalent in the family</p>
                                <ul>
                                    <li className="pAllergens">
                                        HPN
                                    </li>
                                    <li className="pAllergens">
                                        Diabetic Mellitus
                                    </li>
                                    <li className="pAllergens">
                                        Allergy
                                    </li>
                                    <li className="pAllergens">
                                        Heart Disease
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Bottom></Bottom>
        </div>
    )
};

export default profile;