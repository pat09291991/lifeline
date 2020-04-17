import React, { useState, useEffect, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Tooltip from "react-bootstrap/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Row, Col, OverlayTrigger, Button, Modal } from "react-bootstrap";
import Sidebar from "../../components/sidebar";
import DashboardNavbar from "../../components/navbar";
import Bottom from "../../components/bottom";
import Loader from "../../components/loader";
import Head from "next/head";
import cookie from 'js-cookie'
import jwt from 'jwt-decode';
import { useForm } from "react-hook-form";
import axios from 'axios'

import apiUrl from '../../api'
import { withAuthSync } from '../../utils/auth'



const profile = (props) => {

const [modalShow, setModalShow] = useState(false);

const handleClose = () => setShow(false);

    // function loadwindows() {
    //     const element = document.querySelector('#load')
    //     element.classList.add('animated', 'fadeOut')
    //     $('loader').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animation end', document.getElementById('load').setAttribute('style', 'display: none !important'));
    
    //   }


const [loggedUser, setLoggedUser] = useState({});
const [edit, setEdit] = useState(false);
const [token, setToken] = useState(null);

useEffect(()=>{
    const cookieToken = cookie.get("token");
  if(cookieToken){
    const accessToken = JSON.parse(cookieToken);
    setToken(accessToken.access);

    axios.get(`${apiUrl}/accounts`, {
      headers: {"Authorization": `Bearer ${accessToken.access}`}
    }).then(res=>{
      setLoggedUser(res.data[0]);
    })
  }

}, [])

const handleOpenEdit = () => {
    setModalShow(true);
}

    return (
        <Fragment>
            <head>

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
                <link rel="stylesheet" type="text/css" href="../../Css/dashboard.css" />
                <script type="text/javascript" src="../../Script/myScript.js"></script>
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap"
                    rel="stylesheet"
                />
            </head>
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
                        <img src="../Image/dp.jpeg" className="img-fluid imgProfilePic"></img>
                    </Col>
                    <Col lg={11}>
                        <div className="form-inline divNameStatus">
                            <p className="pNameProfile">{loggedUser.first_name} {loggedUser.last_name}</p>
                            <p className="pStatus">Active</p>
                        </div>
                        <div className="form-inline divNameStatus d-flex align-items-center my-auto">
                            <span className="spanEmail"><img src="../Image/mail.png" className="img-fluid imgStatus" style={{ width: "15px", marginTop: "-35px" }}></img></span>
                                <p className="pEmail">{loggedUser.email}</p>
                            <span style={{ marginLeft: "20px" }}><img src="../Image/phone.png" className="img-fluid imgStatus" style={{ width: "14px", marginTop: "-35px" }}></img></span>
                            <p className="pEmail">{loggedUser.mobile_number}</p>
                        </div>
                    </Col>
                </Row>
                <Row className="rowProfile">
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <p className="pHeaderProfile">Information</p>
                    </Col>
                    <Col lg={6} mc={6} sm={6} xs={6}>
                        <img src="../Image/marker.png" className="img-fluid float-right imgEdit" onClick={handleOpenEdit} style={{ width: "20px", marginTop: "-10px" }}></img>
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
                                <p className="pTitleResult">{loggedUser.address}</p>
                            </Col>
                            <Col lg={3} xs={3}>
                                <p className="pTitleProfile">City</p>
                            </Col>
                            <Col lg={9} xs={9}>
                                <p className="pTitleResult">{loggedUser.city}</p>
                            </Col>
                            <Col lg={3} xs={3}>
                                <p className="pTitleProfile">State</p>
                            </Col>
                            <Col lg={9} xs={9}>
                                <p className="pTitleResult">{loggedUser.state}</p>
                            </Col>
                            <Col lg={3} xs={3}>
                                <p className="pTitleProfile">Country</p>
                            </Col>
                            <Col lg={9} xs={9}>
                                <p className="pTitleResult">{loggedUser.country}</p>
                            </Col>
                            <Col lg={3} xs={3}>
                                <p className="pTitleProfile">Email</p>
                            </Col>
                            <Col lg={9} xs={9}>
                                <p className="pTitleResult">{loggedUser.email}</p>
                            </Col>
                            <Col lg={3} xs={3}>
                                <p className="pTitleProfile">Contact Number</p>
                            </Col>
                            <Col lg={9} xs={9}>
                                <p className="pTitleResult">{loggedUser.mobile_number}</p>
                            </Col>
                            <Col lg={3} xs={3}>
                                <p className="pTitleProfile">Landline Number</p>
                            </Col>
                            <Col lg={9} xs={9}>
                                <p className="pTitleResult">{loggedUser.landline_number}</p>
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
                    modalShow={modalShow}
                    onHide={() => setModalShow(false)}
                    loggedUser={loggedUser}
                    setModalShow={setModalShow}
                    token={token}
                    setLoggedUser={setLoggedUser}
         />
         </Fragment>
    )
};






function ProfileUpdate({loggedUser, modalShow, setModalShow, token, setLoggedUser }) {

const [updateUser, setUpdateUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        mobile_number: "",
        landline_number: "",
        address: "",
        city: "",
        state: "",
        country: ""

});



const { handleSubmit, register, errors, watch } = useForm({
    reValidateMode: 'onChange'
    
});

const [error, setError] = useState("");
const handleCloseButton = () => {
    setError("")
    setModalShow(false)
}

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);

const onSubmit = (values) => {
    if(Object.keys(errors).length === 0){
        setShow(true)
        setUpdateUser({
        username: loggedUser.email,
        id: loggedUser.id,
        first_name: values.firstname,
        last_name: values.lastname,
        email: values.email,
        mobile_number: values.mobilenumber,
        landline_number: values.landlinenumber,
        address: values.address,
        city: values.city,
        state: values.state,
        country: values.country
        })
    }
}


const handleSaveUpdate = () => {
        console.log(updateUser)
        axios.put(`${apiUrl}/accounts/${loggedUser.id}`, JSON.stringify(updateUser), {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        })
    .then(res=>{
        setLoggedUser(res.data);
        setShow(false)
        setModalShow(false)
    })
}



  return (
            <Modal
            show={modalShow}
              size="xl"
              dialogClassName="mx-0 w-100"
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
                    placeholder="First Name"
                  />
                  <small className="text-danger">{errors.firstname && errors.firstname.message}</small>
                    
                    <input
                    name="lastname"
                    className="form-control mt-2"
                    ref={register({
                      required: 'Last name is required'
                    })}
                    defaultValue={loggedUser.last_name}
                    placeholder="Last Name"
                    
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
                    placeholder="Email"
                    
                  />
                  <small className="text-danger">{errors.email && errors.email.message}</small>

                  <input
                    name="mobilenumber"
                    className="form-control mt-2"
                    maxLength="13"
                    ref={register({
                      required: 'Required'
                    })}
                    defaultValue={loggedUser.mobile_number}
                    placeholder="Mobile Number"

                  />
                  <small className="text-danger">{errors.mobilenumber && errors.mobilenumber.message}</small>
                  
                  <input
                    name="landlinenumber"
                    className="form-control mt-2"
                    maxLength="20"
                    ref={register({
                      required: 'Required'
                    })}
                    defaultValue={loggedUser.landline_number}
                    placeholder="Landline Number"
                  />
                  <small className="text-danger">{errors.landlinenumber && errors.landlinenumber.message}</small>
                  

                <p className="mt-5">Address</p>

                  <input
                    name="address"
                    className="form-control mt-2"
                    ref={register({
                      required: 'Street is required'
                    })}
                    defaultValue={loggedUser.address}
                    placeholder="Address"
                    
                  />
                  <small className="text-danger">{errors.street && errors.street.message}</small>
                   
                   <input
                    name="city"
                    className="form-control mt-2"
                    ref={register({
                      required: 'City is required'
                    })}
                    defaultValue={loggedUser.city}
                    placeholder="City"

                  />
                  <small className="text-danger">{errors.city && errors.city.message}</small>
                   
                   <input
                    name="state"
                    className="form-control mt-2"
                    ref={register({
                      required: 'State is required'
                    })}
                    defaultValue={loggedUser.state}
                    placeholder="State"

                  />
                  <small className="text-danger">{errors.state && errors.state.message}</small>
                   

                  <input
                    name="country"
                    className="form-control mt-2"
                    ref={register({
                      required: 'Country is required'
                    })}
                    defaultValue={loggedUser.country}
                    placeholder="Country"
                    
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

export default withAuthSync(profile);