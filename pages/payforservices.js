import React, { useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Row, Col, Image, Container, CardGroup, Card, Modal, CardDeck, Carousel } from 'react-bootstrap'
import Link from 'next/link';
import Router from 'next/router';
import { useForm } from "react-hook-form";

import Default from '../layouts/default';

const PayForServices = () => {

const { handleSubmit, register, errors, watch } = useForm();
const [show, setShow] = useState(false);

const onSubmit = (values) => {
	console.log(values);
	setShow(true);
}
	return(
		<Fragment>
				<Container fluid={true} className="services px-0">
				<Carousel indicators={false} controls={false}>
			  <Carousel.Item>
			    <img
			      className="d-block w-100 carouselImages"
			      src="https://picsum.photos/500/650?random=1"
			      alt="First slide"
			    />
			   
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100 carouselImages"
			      src="https://picsum.photos/500/650?random=2"
			      alt="Third slide"
			    />

			    
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100 carouselImages"
			      src="https://picsum.photos/500/650?random=3"
			      alt="Third slide"
			    />
			  </Carousel.Item>
			</Carousel>
			<div className="overlay"></div>
			<div className="servicesAbout">
				<h6 className="font-weight-bolder">16-911</h6>
				<h1 className="text-white">LIFELINE 16911</h1>
				<p className="text-white w-50 pr-4 servicesAboutTexts">Being the only fully-equipped ambulance service to respond to life-threatening situations, Lifeline 16911 is the trusted industry leader. Our ambulances are virtual "emergency rooms on wheels" and our experienced, well-trained and courteous staff is always ready to provide the best nursing and medical care. We are constantly striving to improve so as to better serve our client communities.</p>
					<Button className="bg-dark mr-2 border-0">Pay Now</Button>
					<Button className="bg-dark mr-2 border-0">Learn More</Button>
			</div>
			
		</Container>
		<Jumbotron className="bg-white midPaymentSection">
			<Container>
				<Row className="show-grid">
	    		<Col lg={6} md={6} sm={12} xs={12} className="mx-0 px-0 mb-3">
	                	<h1 className="text-left">WELCOME TO</h1>
	                	<h1 className="text-primary">LIFELINE</h1>
	                	<small className="smallTexts">All ages covered. No exclusions for pre-existing disease. From initial emergency response to endorsement and take-over of receiving hospital. Complete authority and responsibility for patient's welfare assumed by Lifeline 16911 during the emergency response until patient is properly endorsed to receiving hospitals. Free Emergency Quick Response (EQR) Service. Fixed with/helicopter service and provincial ambulance conductins are also available upon request and for a fee.</small>
	                	<h3 className="mt-3">EMERGENCY LINE :</h3>
	                	<p className="text-primary">16-911</p>
	            </Col>
	    		<Col lg={6} md={6} sm={12} xs={12} className="mx-0 px-0 mb-4">
	            	<div className="payments px-4 py-5 w-75">
	                	<h3 className="mb-3">PAYMENTS</h3>
	                	<p className="text-dark mb-1">Lifeline 16911 Medical Inc.</p>
	                	<p className="text-white mb-0">Bank Name: Metrobank</p>
	                	<p className="text-white mb-3">AccountNumber: 178-7178517208</p>
	                	<p className="text-dark mb-1">Lifeline 16911 Medical Inc.</p>
	                	<p className="text-white mb-0">Bank Name: Malayan Bank</p>
	                	<p className="text-white mb-5">AccountNumber: 001-20-07857-5</p>
	              	</div>
	            </Col>
            </Row>
			</Container>
		</Jumbotron>
	    <div className="paymentImage">
	    <div className="paymentImageOverlay pb-5">
		<Container className="paymentForm">
	           <h4 className="text-left">PAYMENT FORM</h4>
	           <p>* Note: This is not for lifeline memberships.</p>
	           <p className="smallTexts">* Your payment for services here does not give you Membership privileges</p>
	           <p className="mt-3">* To be a lifeline member <span onClick={()=>Router.push('/membership')} className="btn btn-link py-0 mb-1 px-0">click here</span>.</p>
	           <form onSubmit={handleSubmit(onSubmit)}>
              
              <div className="textInput">
              	<div className="divEmail" style={{ marginTop: "15px" }}>
              <input
              name="firstname"
              className="form-control"
              ref={register({
                required: 'First name is required',
              })}
              placeholder="First Name"
            />
            <small className="text-danger">{errors.firstname && errors.firstname.message}</small>
            </div>

           
            <div className="divEmail" style={{ marginTop: "15px" }}>
              <input
              name="lastname"
              className="form-control "
              ref={register({
                required: 'Last name is required',
              })}
              placeholder="Last Name" 
            />
            <small className="text-danger">{errors.lastname && errors.lastname.message}</small>
            </div>

            <div className="divEmail" style={{ marginTop: "15px" }}>
              <input
              name="mobilenumber"
              className="form-control "
              ref={register({
                required: 'Mobile number is required',
              })}
              placeholder="Mobile Number"
            />
            <small className="text-danger">{errors.mobilenumber && errors.mobilenumber.message}</small>
            </div>
            
            <div className="divEmail" style={{ marginTop: "15px" }}>
              <input
              name="landline"
              className="form-control "
              ref={register({
                required: 'Landline number is required',
              })}
              placeholder="Landline"
            />
            <small className="text-danger">{errors.landline && errors.landline.message}</small>
            </div>

            <div className="divEmail" style={{ marginTop: "15px" }}>
              <input
              name="email"
              className="form-control "
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

            <div className="divEmail mb-3" style={{ marginTop: "15px" }}>
              <input
              name="address"
              className="form-control "
              ref={register({
                required: 'Address is required'
              })}
              placeholder="Address"
            />
            <small className="text-danger">{errors.address && errors.address.message}</small>
            </div>
           	
	         <select className="form-control " ref={register} name="city" aria-invalid="false">
		     	<option value="Antipolo City">Antipolo City</option>
		        <option value="Bulacan City">Bulacan City</option>
		        <option value="Caloocan City">Caloocan City</option>
		        <option value="Cavite">Cavite</option>
		        <option value="Laguna City">Laguna City</option>
		        <option value="Las Pinas City">Las Pinas City</option>
		        <option value="Makati City">Makati City</option>
		        <option value="Malabon City">Malabon City</option>
		        <option value="Mandaluyong City">Mandaluyong City</option>
		        <option value="Manila City">Manila City</option>
		        <option value="Marikina City">Marikina City</option>
		        <option value="Muntilupa City">Muntinlupa City</option>
		        <option value="Navotas City">Navotas City</option>
		        <option value="Paranaque City">Paranaque City</option>
		        <option value="Pasay City">Pasay City</option>
		        <option value="Pasig City">Pasig City</option>
		        <option value="Pateros">Pateros</option>
		        <option value="Rizal">Rizal</option>
		        <option value="Quezon City">Quezon City</option>
		        <option value="SJ City">San Juan City</option>
		        <option value="Taguig City">Taguig City</option>
		        <option value="Valenzuela">Valenzuela City</option>
		    </select>   		

           	<div className="divEmail mb-3" style={{ marginTop: "15px" }}>
              <input
              name="amount"
              className="form-control "
              type="number"
              ref={register({
                required: 'Amount is required',
              })}
              placeholder="Amount"
            />
            <small className="text-danger">{errors.amount && errors.amount.message}</small>
            </div>
              </div>

            <div className="divFooter">
              <button className="btn btn-danger" type="submit">
                Submit
              </button>
            </div>
            </form>
		</Container>
		</div>
		</div>
		<style jsx>{`
				
				.carouselImages{
					height: 100vh !important;
					width: 100% !important;
					object-fit: cover !important;
					z-index: 1;
				}
				.overlay{
					height: 100vh;
					width: 100%;
					background-color: #0366B1;
					opacity: 0.8;
					position: absolute;
					top: 0;
					left: 0;
					z-index: 2;
				}
				.servicesAbout{
					position: absolute;
					top: 30%;
					left: 12%;
					z-index: 3;
				}
				.smallTexts{
					line-height: 1.5rem;
				}
				.payments{
					background-color: #0366B1;
				}
				.paymentImage{
				  background-image: url("https://picsum.photos/500/650?random=1");
				  background-attachment: fixed !important;
				  background-position: center !important;
				  background-repeat: no-repeat !important;
				  background-size: cover !important;
				  min-height: 100vh;
				  width: 100%;
				  z-index: 1;
				}

				.paymentImageOverlay{
					min-height: 100vh;
					background-color: #FFF;
					opacity: 0.9;
					position: relative;
					top: 0;
					left: 0;
					z-index: 2;
					padding-top: 50px !important;
					padding-left: 175px;
					width: 50%;
				}
				.textInput{
					width: 50%;
				}

				@media only screen and (max-width: 767px) {
    				.servicesAboutTexts{
    					width: 100% !important;
    				} 
    				.payments{
    					width: 100% !important;
    				} 
    				.{
    					width: 100% !important;
    				}
    				.paymentImageOverlay{
    					width: 100% !important;
    					padding-top: 50px !important;
						padding-left: 0px !important;
    				}
    				.textInput{
    					width: 100%;
    				}
    				
		        }
		        

			`}</style>	

			<Modal show={show} onHide={()=>setShow(false)}>
	        <Modal.Header closeButton>
	          <Modal.Title>Payment Confirmation</Modal.Title>
	        </Modal.Header>
	        <Modal.Body className="text-center">Are you sure you want to submit?</Modal.Body>
	        <Modal.Footer>
	          <Button variant="secondary" onClick={()=>setShow(false)}>
	            Cancel
	          </Button>
	          <Button variant="danger" onClick={()=>setShow(false)}>
	            Confirm
	          </Button>
	        </Modal.Footer>
	      </Modal>
		</Fragment>
	)
}

export default PayForServices;