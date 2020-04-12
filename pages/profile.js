import React, { useState, useEffect, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Tooltip from "react-bootstrap/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Row, Col, OverlayTrigger, Button, Modal } from "react-bootstrap";
import Sidebar from "../components/sidebar";
import DashboardNavbar from "../components/navbar";
import Bottom from "../components/bottom";
import Loader from "../components/loader";
import Head from "next/head";
import cookie from 'js-cookie'
import jwt from 'jwt-decode';
import { useForm } from "react-hook-form";
import axios from 'axios'

import apiUrl from '../api'



const profile = (props) => {

const [modalShow, setModalShow] = React.useState(false);

const handleClose = () => setShow(false);

    function loadwindows() {
        const element = document.querySelector('#load')
        element.classList.add('animated', 'fadeOut')
        $('loader').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animation end', document.getElementById('load').setAttribute('style', 'display: none !important'));
    
      }


const [token, setToken] = useState({})
const [loggedUser, setLoggedUser] = useState({});
const [edit, setEdit] = useState(false);

useEffect(()=>{
  const token = cookie.get("token");
  const accessToken = JSON.parse(token);
  setToken(accessToken)
  const payload = jwt(accessToken.access);
  setLoggedUser(payload);
}, [])

const handleOpenEdit = () => {
    setModalShow(true);
}

    return (
        <Fragment>
            <head onLoad={loadwindows}>
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
            <DashboardNavbar></DashboardNavbar>
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
                        <div className="form-inline divNameStatus d-flex align-items-center my-auto">
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
                        <img src="Image/marker.png" className="img-fluid float-right imgEdit" onClick={handleOpenEdit} style={{ width: "20px", marginTop: "-10px" }}></img>
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

        <ProfileUpdate
                    show={modalShow}
                    onHide={() => setModalShow(false)}
         />
         </Fragment>
    )
};






function ProfileUpdate(props) {
const [token, setToken] = useState({})
const [loggedUser, setLoggedUser] = useState({});
const [id, setId] = useState(null);
const [updateUser, setUpdateUser] = useState({});


useEffect(()=>{
  const token = cookie.get("token");
  const accessToken = JSON.parse(token);
  setToken(accessToken)
  const payload = jwt(accessToken.access);
  setLoggedUser(payload);
  setId(payload.user_id);
}, [])


const { handleSubmit, register, errors, watch } = useForm({
    reValidateMode: 'onChange'
    
});

const [error, setError] = useState("");
const handleCloseButton = () => {
    setError("")
    props.onHide()
}

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);

const onSubmit = (values) => {
    if(Object.keys(errors).length === 0){
        //console.log(Object.keys(errors).length === 0)
        setShow(true)
        setUpdateUser(values)
    }
}


const handleSaveUpdate = () => {
        
    axios.put(`${apiUrl}/accounts/${id}`, {
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token.access}`},
        first_name: loggedUser.firstname
    }).then(res=>{
        console.log(res);
    })
}



  return (
    <Modal
              {...props}
              size="xl"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
            <Modal.Footer className="modalFooter">
                <Button onClick={handleCloseButton}>X</Button>
              </Modal.Footer>
              <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter" className="text-center justify-content-center">
                <h5>Profile Update: Please fill out all the details.</h5>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="modalbody">
                    <div className="text-center text-white bg-danger">
                        <h5>{error}</h5>
                    </div>
                    
                    <p className="mt-5">Personal details</p>
                    <div className="form-group">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                    name="firstname"
                    className="form-control"
                    ref={register({
                      required: 'First name is required'
                    })}
                    defaultValue={loggedUser.first_name}
                  />
                  <small className="text-danger">{errors.firstname && errors.firstname.message}</small>
                    
                    <input
                    name="lastname"
                    className="form-control mt-2"
                    ref={register({
                      required: 'Last name is required'
                    })}
                    defaultValue={loggedUser.last_name}
                    
                  />
                  <small className="text-danger">{errors.lastname && errors.lastname.message}</small>
                    

                    <input
                    name="email"
                    className="form-control mt-2"
                    ref={register({
                      required: 'Required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    defaultValue={loggedUser.email}
                    
                  />
                  <small className="text-danger">{errors.email && errors.email.message}</small>

                  <input
                    name="mobilenumber"
                    className="form-control mt-2"
                    maxLength="11"
                    ref={register({
                      required: 'Required'
                    })}
                    defaultValue={loggedUser.mobile_number}
                  />
                  <small className="text-danger">{errors.mobilenumber && errors.mobilenumber.message}</small>
                  
                  <input
                    name="landlinenumber"
                    className="form-control mt-2"
                    maxLength="11"
                    ref={register({
                      required: 'Required'
                    })}
                    defaultValue={loggedUser.landline_number}
                    
                  />
                  <small className="text-danger">{errors.landlinenumber && errors.landlinenumber.message}</small>
                  

                <p className="mt-5">Address</p>

                  <input
                    name="street"
                    className="form-control mt-2"
                    ref={register({
                      required: 'Street is required'
                    })}
                    defaultValue={loggedUser.address}
                    
                  />
                  <small className="text-danger">{errors.street && errors.street.message}</small>
                   
                   <input
                    name="city"
                    className="form-control mt-2"
                    ref={register({
                      required: 'City is required'
                    })}
                    defaultValue={loggedUser.city}
                  />
                  <small className="text-danger">{errors.city && errors.city.message}</small>
                   
                   <input
                    name="state"
                    className="form-control mt-2"
                    ref={register({
                      required: 'State is required'
                    })}
                    defaultValue={loggedUser.state}
                  />
                  <small className="text-danger">{errors.state && errors.state.message}</small>
                   

                  <input
                    name="country"
                    className="form-control mt-2"
                    ref={register({
                      required: 'Country is required'
                    })}
                    defaultValue={loggedUser.country}
                    
                  />
                  <small className="text-danger">{errors.country && errors.country.message}</small>
                   

                  
                  
                <Button type="submit" className="form-control mt-2 w-100" variant="primary">
                        Save Update
                </Button>

                    <Modal show={show} onHide={handleClose} >
                    <Modal.Header>
                             <Modal.Title>Profile Update</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to save changes?</Modal.Body>
                        <Modal.Footer>
                             <Button type="submit" variant="primary" className="px-3 w-100" onClick={handleSaveUpdate}>
                                Save
                             </Button>
                             <Button variant="secondary" className="px-3 w-100" onClick={handleClose}>
                               Cancel
                             </Button>
                        </Modal.Footer>
                        </Modal>    
                </form>
            </div>
        </Modal.Body>
              
            </Modal>
  );
}

export default profile;