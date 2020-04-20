import React, { useState, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, OverlayTrigger, Tooltip, Dropdown, Modal, Button } from "react-bootstrap";
import Sidebar from "../../../components/sidebar";
import Navbar from "../../../components/navbar";
import Head from "next/head";
import Bottom from "../../../components/bottom";
import { statusColor } from '../../../utils/layout'
import { withAuthSync } from '../../../utils/auth'
import { useForm } from "react-hook-form";
import axios from 'axios'
import apiUrl from '../../../api'


const addIndividualMembership = () => {

const [allergenIndexes, setAllergenIndexes] = useState([]);
const [allergenCounter, setAllergenCounter] = useState(0);

const [diseaseIndexes, setDiseaseIndexes] = useState([]);
const [diseaseCounter, setDiseaseCounter] = useState(0);

const { handleSubmit, register, errors, watch } = useForm();
const [show, setShow] = useState(false);

const handleClose = () => {
    setShow(false)
}
const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    mobile_number: "",
    landline_number: "",
    date_of_birth: "",
    addresses: [{
        address1: "",
        address2: "",
        city: "",
        province: "",
        zip: "",
        country: ""
    }],
    allergens: [],
    family_diseases: []
})

const btnAddAllergen = () => {
    setAllergenIndexes(prevIndexes => [...prevIndexes, allergenCounter]);
    setAllergenCounter(prevCounter => prevCounter + 1);
}

const removeAllergen = index => () => {
    setAllergenIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    setAllergenCounter(prevCounter => prevCounter - 1);
}

const btnAddDisease = () => {
    setDiseaseIndexes(prevIndexes => [...prevIndexes, diseaseCounter]);
    setDiseaseCounter(prevCounter => prevCounter + 1);
}

const removeDisease = index => () => {
    setDiseaseIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    setDiseaseCounter(prevCounter => prevCounter - 1);
};

const onSubmit = (values) =>{

  if(Object.keys(errors).length === 0){
    setShow(true);
    setInput({
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            username: values.email,
            password: 'Password321',
            mobile_number: values.mobile_number,
            landline_number: values.landline_number,
            date_of_birth: values.date_of_birth,
            addresses: [{
                address1: values.address1,
                address2: values.address2,
                city: values.city,
                province: values.province,
                zip: values.zip,
                country: values.country
            }],
            allergens: [values.allergens],
            family_diseases: [values.family_diseases]
    })
  }
}

const handleAddMember = () => {
    axios.post(`${apiUrl}/accounts/register/`, JSON.stringify(input), {
        headers: {"Content-Type": 'application/json'}
    }).then(res=>{
        console.log(res)
    })
}
console.log(input);

    return (
        <Fragment>
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <script
                    src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYhtmlForSJoZ+n"
                    crossOrigin="anonymous"
                ></script>
                 <script
                    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                    crossOrigin="anonymous"
                ></script>
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossOrigin="anonymous"
                />
                
               
                <script
                    src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
                    crossOrigin="anonymous"
                ></script>
                <link rel="stylesheet" type="text/css" href="../../../Css/dashboard.css" />
                <script type="text/javascript" src="../../../Script/myScript.js"></script>
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
            </head>
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <Container fluid={true} className="colMain" style={{ zIndex: "-1", paddingLeft: "90px" }} >
                <Row style={{ paddingTop: "100px" }}>
                    <Col lg={12}>
                        <p className="pNav pNav1">
                            Add Member<span className="pAddOptions">Individual</span>
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="conAddProfile">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col lg={12}>
                        <p className="pBasic">Basic InhtmlFormation</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "10px" }}>
                    
                    <Col lg={6} md={6}>
                        <p className="pTitleAdd mb-1">FIRST NAME</p>
                        <input
                           name="first_name"
                            type="text"
                            ref={register({
                                required: 'First name is required',
                                })}
                            className="txtBox"
                            placeholder="Enter first name"
                        />
                        <small className="text-danger">{errors.first_name && errors.first_name.message}</small>

                    </Col>
                    <Col lg={6} md={6}>
                        <p className="pTitleAdd mb-1">LAST NAME</p>
                        <input
                           name="last_name"
                            type="text"
                            ref={register({
                                required: 'Last name is required',
                                })}
                            className="txtBox"
                            placeholder="Enter Last name"
                        />
                        <small className="text-danger">{errors.last_name && errors.last_name.message}</small>
                    </Col>
                </Row>
                <Row style={{ marginTop: "10px" }}>
                    <Col lg={4}>
                        <p className="pTitleAdd">DATE OF BITRH</p>
                        <input type="date" ref={register({required: true})} name="date_of_birth" id="dateofbirth" placeholder="MM/DD/YYYY" />
                    </Col>
                    <Col lg={4} md={4}>
                        <p className="pTitleAdd">BLOOD TYPE</p>
                        <input
                            name="blood_type"
                            type="text"
                            ref={register({
                                required: 'Blood type is required',
                                })}
                            className="txtBox"
                            style={{marginTop: "-5px"}}
                            placeholder="Enter blood type"
                        />
                        <small className="text-danger">{errors.blood_type && errors.blood_type.message}</small>

                    </Col>
                    <Col lg={4} md={4} className="mt-4">
                        <div className="chk mt-2">
                            <input name="gender" id="chk1" type="radio" value="male" ref={register({ required: true })}/>
                            <label className="pTitleAdd pr-3" htmlFor="chk1">&nbsp;MALE</label>
                            <input name="gender" id="chk2" type="radio" value="female" ref={register({ required: true })}/>
                            <label className="pTitleAdd pr-3" htmlFor="chk2">&nbsp;FEMALE</label>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col lg={8} className="mt-2">
                        <p className="pTitleAdd mb-1">CIVIL STATUS</p>
                            <input name="civil_status" id="chk3" type="radio" value="single" ref={register({ required: true })}/>
                                <label htmlFor="chk3" className="pr-3 pTitleAdd">&nbsp;SINGLE</label>
                            <input name="civil_status" id="chk4" type="radio" value="married" ref={register({ required: true })}/>
                                <label htmlFor="chk4" className="pr-3 pTitleAdd">&nbsp;MARRIED</label>
                            <input name="civil_status" id="chk5" type="radio" value="separated" ref={register({ required: true })}/>
                                <label htmlFor="chk5" className="pr-3 pTitleAdd">&nbsp;SEPARATED</label>
                            <input name="civil_status" id="chk6" type="radio" value="widowed" ref={register({ required: true })}/>
                                <label htmlFor="chk6" className="pr-3 pTitleAdd">&nbsp;WIDOWED</label>
                    </Col>
                    <Col lg={4} className="mt-2">
                        <p className="pTitleAdd mb-1">NATIONALITY</p>
                            <input name="nationality" id="chk7" type="radio" value="filipino" ref={register({ required: true })}/>
                        <label className="pr-3 pTitleAdd" htmlFor="chk7">&nbsp;FILIPINO</label>
                            <input name="nationality" id="chk8" type="radio" value="other" ref={register({ required: true })}/>
                        <label className="pr-3 pTitleAdd" htmlFor="chk8">&nbsp;OTHER</label>
                    </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Col lg={12}>
                        <p className="pBasic">Permanent Address</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "5px" }}>
                    <Col lg={6} md={6} sm={12} xs={12}>
                            <p className="pTitleAdd mb-1">Street</p>
                            <input
                                name="address1"
                                className="txtBox"
                                ref={register({
                                required: 'Street details is required',
                                })}
                                placeholder="Enter house no. / lot or blk no. / street name"
                            />
                            <small className="text-danger">{errors.address1 && errors.address1.message}</small>
                      </Col>
                      <Col lg={6}>
                        <p className="pTitleAdd mb-1">Barangay / Town</p>
                        <input
                            name="address2"
                            type="text"
                            ref={register({
                                required: 'Barangay details is required',
                            })}
                            className="txtBox"
                            placeholder="Enter barangay / town (optional)"
                        />
                        <small className="text-danger">{errors.address2 && errors.address2.message}</small>

                    </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    
                    <Col lg={3}>
                        <p className="pTitleAdd mb-1">City / Muinicipality</p>
                        <input
                            name="city"
                            type="text"
                            ref={register({
                                required: 'City / Municipality is required',
                            })}
                            className="txtBox"
                            placeholder="City / Municipality"
                        />
                        <small className="text-danger">{errors.city && errors.city.message}</small>
                    </Col>
                    <Col lg={3}>
                        <p className="pTitleAdd mb-1">Province</p>
                        <input
                            name="province"
                            type="text"
                            ref={register({
                                required: 'Province is required',
                            })}
                            className="txtBox"
                            placeholder="Enter province"
                        />
                        <small className="text-danger">{errors.province && errors.province.message}</small>
                    </Col>
                    <Col lg={2}>
                        <p className="pTitleAdd mb-1">Zip Code</p>
                        <input
                            name="zip"
                            type="text"
                            ref={register({
                                required: 'Zip is required',
                            })}
                            className="txtBox"
                            placeholder="Zip"
                        />
                        <small className="text-danger">{errors.zip && errors.zip.message}</small>
                    </Col>
                    <Col lg={4}>
                        <p className="pTitleAdd mb-1">Country</p>
                        <input
                            name="country"
                            type="text"
                            ref={register({
                                required: 'Country is required',
                            })}
                            className="txtBox"
                            placeholder="Enter Country"
                        />
                        <small className="text-danger">{errors.country && errors.country.message}</small>
                    </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Col lg={3}>
                        <p className="pTitleAdd mb-1">Telephone Number</p>
                        <input
                            name="landline_number"
                            type="text"
                            ref={register({
                                required: 'Landline number is required',
                            })}
                            className="txtBox"
                            placeholder="Enter Landline number"
                        />
                        <small className="text-danger">{errors.landline_number && errors.landline_number.message}</small>
                    </Col>
                    
                    <Col lg={3}>
                        <p className="pTitleAdd mb-1">Mobile Number</p>
                        <input
                           name="mobile_number"
                            type="text"
                            ref={register({
                                required: 'Mobile number is required',
                            })}
                            className="txtBox"
                            placeholder="Enter mobile number"
                        />
                        <small className="text-danger">{errors.mobile_number && errors.mobile_number.message}</small>
                    </Col>
                    <Col lg={6}>
                        <p className="pTitleAdd mb-1">Email Address</p>
                        <input
                            name="email"
                            type="text"
                            ref={register({
                                required: 'Email is required',
                                pattern: {
                                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                              message: "Invalid email address"
                                            }
                            })}
                            className="txtBox"
                            placeholder="Enter email address"
                        />
                        <small className="text-danger">{errors.email && errors.email.message}</small>
                    </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Col lg={12}>
                        <p className="pBasic">If you suffer from allergies, please state known allergens</p>
                    </Col>
                </Row>
                <button id="add" type="button" onClick={btnAddAllergen}>Add allergens</button>
                <span><small className="pTitleAdd ml-2">e.g: Dust, Pollen</small></span>

                <Row style={{ marginTop: "5px" }}>
                    <Col lg={12}>
                        <AddAlergen 
                            allergenIndexes={allergenIndexes}
                            allergenCounter={allergenCounter}
                            removeAllergen={removeAllergen}
                            errors={errors}
                            register={register}
                           />
                    </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Col lg={12}>
                        <p className="pBasic">Disease prevalent in the family</p>
                    </Col>
                </Row>
                        <button id="add" type="button" onClick={btnAddDisease}>Add diseases</button>
                        <span><small className="pTitleAdd ml-2">e.g: Dust, Pollen</small></span>

                 <Row style={{ marginTop: "5px" }}>
                    <Col lg={12}>
                        <AddDiseases 
                            diseaseIndexes={diseaseIndexes}
                            diseaseCounter={diseaseCounter}
                            removeDisease={removeDisease}
                            errors={errors}
                            register={register}
                           />
                    </Col>
                </Row>

                <Row className="py-5">
                    <Col lg={12}>
                        <button className="btnAddMember" type="submit">Submit</button>
                        <button className="btnCancelMember">Cancel</button>
                    </Col>
                </Row>
                <Modal 
                show={show} 
                onHide={handleClose}
                dialogClassName="mx-0 w-100 pr-0"
                >
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to submit?</Modal.Body>
            <Modal.Footer>
              <button className=" btn btn-secondary mr-2 w-25" onClick={handleClose}>
                Close
              </button>
              <button className=" btn btn-danger w-25" onClick={handleAddMember}>
                Yes, Submit
              </button>
            </Modal.Footer>
          </Modal>
            </form>
            </Container>

            <Bottom></Bottom>
    </Fragment>
    )

}

function AddAlergen({allergenCounter, allergenIndexes, removeAllergen, errors, register }){

    return(
        <Fragment>

        {allergenIndexes.map(index => {
        const fieldName = `allergens[${index}]`;
        return (
          <Fragment key={index}>
              <Col lg={6}>

              <div style={{ marginTop: "15px" }} className="d-flex">
              <input
              name={`${fieldName}.allergen`}
              className="form-control txtBox mr-3"
              ref={register({
                required: 'Allergen is required',
              })}
            />
            <button type="button" className="btn btn-warning mt-0 p-0" onClick={removeAllergen(index)}>
              X
            </button>
            <small className="text-danger">{errors.allergen && errors.allergen.message}</small>
            </div>
           </Col>
          </Fragment>
        )
      })}

        </Fragment>
    )
}

function AddDiseases({diseaseCounter, diseaseIndexes, removeDisease, errors, register }){
    return(
        <Fragment>
            {diseaseIndexes.map(index => {
        const fieldName = `family_diseases[${index}]`;
        return (
          <Fragment key={index}>
              <Col lg={6}>

              <div style={{ marginTop: "15px" }} className="d-flex">
              <input
              name={`${fieldName}.disease`}
              className="form-control txtBox mr-3"
              ref={register({
                required: 'Disease is required',
              })}
            />
            <button type="button" className="btn btn-warning mt-0 p-0" onClick={removeDisease(index)}>
              X
            </button>
            <small className="text-danger">{errors.disease && errors.disease.message}</small>
            </div>
           </Col>
          </Fragment>
        );
      })}

        </Fragment>
    )
}

export default withAuthSync(addIndividualMembership); 