import React, { useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Row, Col, Image, Container, Modal, Dropdown, ButtonGroup, Accordion, Card, Form } from 'react-bootstrap'
import Link from 'next/link';
import Router from 'next/router'
import { faPlus, faMinus, faCapsules } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";


import JumboImage from '../public/home/jumbo.jpg';
import Default from '../layouts/default';

const jumboStyle = {
  background: `url(${JumboImage}) rgba(0, 0, 0, 0.4)`,
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply'
}

const Academy = () => {

const { handleSubmit, register, errors, watch } = useForm();


const [toggle1, setToggle1] = useState(false)
const [toggle2, setToggle2] = useState(true)

const handleToggle1 = () => {
	setToggle1(true)
	if(toggle1 && !toggle2){
		setToggle1(false)
		setToggle2(true)
	}
	if(toggle1 && toggle2){
		setToggle1(false)
		setToggle2(true)
	}
}
const handleToggle2 = () => {
	if(toggle2){
		setToggle2(false)
	}else{
	setToggle2(true)
	}
	if(!toggle1 && toggle2){
		setToggle1(true)
		setToggle2(false)
	}
	if(toggle1 && toggle2){
		setToggle1(true)
		setToggle2(false)
	}
}

const onSubmit=(values)=>{
	console.log(values)
}
	return(
		<Fragment>
			<Default>
				<Jumbotron className="h-100 d-flex mt-5 flex-column mb-0" style={jumboStyle}>
		        	<Container>
		        		<h1 className="jumbo-title text-white pt-3">ACADEMY</h1>
			        	<h5><button onClick={()=>Router.push('/')} className="text-white btn btn-link px-0"><h5>HOME</h5></button><span className="text-white"> / </span><span className="text-info">ACADEMY</span></h5>
		        	</Container>
    			</Jumbotron>
    			<Jumbotron className="bg-white" style={{minHeight: "100vh"}}>
    			<Container className="text-center mb-4">
    				<h1 className="font-weight-bolder"><span className="text-danger">EMERGENCY MEDICAL TECHNICIAN </span> - BASIC (EMT-B)</h1>
    				<p className="font-italic">EMT-B, Abbreviation for emergency medical technician-basic, A certified healthcare <br /> provider who is trained to treat and transport victims of emergencies.</p>
    				
    				<Row className="mt-5 mb-5">
    					<Col lg={6} md={6} sm={12} xs={12}>
							<Accordion defaultActiveKey="0" className="mb-5">
							  <Card className="border rounded-0 border-primary bg-white text-dark mb-4">
							    <Accordion.Toggle eventKey="0" onClick={handleToggle1} as={Card.Header} className="py-0 justify-content-between d-flex align-items-center pl-3 pr-0 bg-white font-weight-bolder">
							      Emergency medical technician (EMT-B)
							    <p className="mb-0 px-3 py-2 bg-white text-primary border-left rounded-0 border-primary" style={{cursor: "pointer"}}>
							      		{toggle1 ? <FontAwesomeIcon icon={faPlus} style={{height: "20px"}}/> : <FontAwesomeIcon icon={faMinus} style={{height: "20px"}}/>}
							    </p>

							    </Accordion.Toggle>
							  </Card>
							    <Accordion.Collapse className="shadow-sm" eventKey="0">
							      <Card.Body>
							      <p className="text-left">EMT-B, Abbreviation for emergency medical technician-basic, A certified healthcare provider who is trained to treat and transport victims of emergencies. Emergency medical technicians (EMT) provide basic life support (BLS), advanced life support (ALS), advanced cardiac life support (ACLS) to victims. Skills include immobilization and splinting, bandaging, administering oxygen, cardiopulmonary resuscitation, defibrillation, extrication, administering medications and airway management. Emergency medical technicians may work in the emergency department, fire department, public gatherings and factories, but most importantly the certification is aimed at providing care in an ambulance.
							      </p>
							      </Card.Body>
							    </Accordion.Collapse>
							
							  <Card className="border rounded-0 border-primary bg-white text-dark">
							    <Accordion.Toggle eventKey="1" onClick={handleToggle2} as={Card.Header} className="py-0 justify-content-between d-flex align-items-center pl-3 pr-0 font-weight-bolder bg-white"> 
							      Student Verification (Lifeline CPR)
							    <p className="mb-0 px-3 py-2 bg-white text-primary border-left rounded-0 border-primary" style={{ cursor: "pointer", fontSize: "20px"}}>
							    	{toggle2 ? <FontAwesomeIcon icon={faPlus} style={{height: "20px"}}/> : <FontAwesomeIcon icon={faMinus} style={{height: "20px"}}/>}
							    </p>
							    </Accordion.Toggle>
							  </Card>
							    <Accordion.Collapse className="shadow-sm" eventKey="1">
							      <Card.Body>
							      <p className="text-left">Lifeline EMS Academy Inc, together with Lifeline 16911 Medical Inc. issue this Personal Completion Record (PCR) to help and guide the graduates and provide record of their real-world performance in the field. This PCR is designed exclusively with personal and professional growth in mind in order to help the graduates succeed in pursuing their noble profession with Lifeline as a “LIFELINER”, or as a properly trained and duly-registered EMT elsewhere in the Philippines or internationally where it is both recognized and respected. Graduates are expected to use this PCR as directed and record significant cases where they have provided interventions and/or treatment, and have the same attested to by the responsible officers.
							      </p>
							      </Card.Body>
							    </Accordion.Collapse>
							</Accordion>

							
    					</Col>

    					<Col lg={6} md={6} sm={12} xs={12}>
    						<div>
    							<img src="https://picsum.photos/500/650?random=5" style={{height: "300px", width: "100%", objectFit: "cover"}}/>
    						</div>
    						<div className="d-flex justify-content-between mt-2">
    							<img src="https://picsum.photos/500/650?random=1" className="rounded-circle" style={{height: "100px", width: "100px"}}/>
    							<img src="https://picsum.photos/500/650?random=2" className="rounded-circle" style={{height: "100px", width: "100px"}}/>
    							<img src="https://picsum.photos/500/650?random=3" className="rounded-circle" style={{height: "100px", width: "100px"}}/>
    							<img src="https://picsum.photos/500/650?random=4" className="rounded-circle" style={{height: "100px", width: "100px"}}/>
    							
    						</div>
    					</Col>
    				</Row>
    				<Row>
    					<Col lg={4} md={6} sm={12} xs={12} className="px-0">
    						<Card>
							  <Card.Header className="bg-primary py-4 text-white" style={{fontSize: "20px"}}>
							  <FontAwesomeIcon icon={faCapsules} style={{height: "30px", marginRight: "10px", color: "#000"}} />
							  PAYMENT FOR ENROLLMENT
							  </Card.Header>
							  <Card.Body>
								<form onSubmit={handleSubmit(onSubmit)}>     
								  <Row>
								    <Col>
								      <div style={{ marginTop: "15px" }} className="w-100 mr-2">
							              <input
							              name="firstname"
							              className="form-control txtEmail"
							              ref={register({
							                required: 'First name is required',
							              })}
							              placeholder="First Name"
							            />
							            <small className="text-danger">{errors.firstname && errors.firstname.message}</small>
							            </div>
								    </Col>
								    <Col>
								      <div className="divEmail" style={{ marginTop: "15px" }} className="w-100 ml-2">
							              <input
							              name="lastname"
							              className="form-control txtEmail"
							              ref={register({
							                required: 'Last name is required',
							              })}
							              placeholder="Last Name"
							            />
							            <small className="text-danger">{errors.lastname && errors.lastname.message}</small>
							            </div>
								    </Col>
								  </Row>
								  <div className="divEmail" style={{ marginTop: "15px" }} className="w-100">
						              <input
						              name="email"
						              className="form-control txtEmail"
						              ref={register({
						                required: 'Email is required',
						                pattern: {
						                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
						                  message: "Invalid email address"
						                }
						              })}
						              placeholder="Email"
						            />
						            <small className="text-danger">{errors.email && errors.email.message}</small>
						            </div>
						               <div className="divEmail" style={{ marginTop: "15px" }} className="w-100 mr-2">
						              <input
						              name="mobilenumber"
						              className="form-control"
						              ref={register({
						                required: 'Mobile number is required',
						              })}
						              placeholder="Mobile Number"
						            />
						            <small className="text-danger">{errors.mobilenumber && errors.mobilenumber.message}</small>
						            </div>
						            <div style={{ marginTop: "15px" }} className="w-100">
						              	<Form.Control as="select" name="year" custom ref={register}>
						                	<option hidden>Select a payment option..</option>
						                	<option value="30000">30,000 - Full Payment</option>
									        <option value="25000">25,000 - Remaining Balance</option>
									        <option value="5000">5,000 - Downpayment/Reservation/Monthly</option>
									    </Form.Control>
									  </div>
							    <Button className="btn btn-primary font-italic mt-4" type="submit">SUBMIT NOW</Button>
								</form>
							  </Card.Body>
							</Card>
    					</Col>
    				</Row>
    			</Container>
    		</Jumbotron>
    		</Default>
    	</Fragment>
    )
}

export default Academy;