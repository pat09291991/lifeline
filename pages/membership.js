import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Row, Col, Image, Container, CardGroup, Card, Modal } from 'react-bootstrap'
import Link from 'next/link';
import Router from 'next/router'
import cookie from 'js-cookie'


import Default from '../layouts/default';
import VideoMP4 from '../public/home/video.mp4';
import VideoWEBM from '../public/home/video.webm';
import JumboImage from '../public/home/jumbo.jpg';
import SagisagImage from '../public/home/sagisag.jpg';

const jumboStyle = {
  background: `url(${JumboImage}) rgba(0, 0, 0, 0.4)`,
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply'
}

const trustedStyle = {
  background: `url(${SagisagImage}) rgba(0, 0, 0, 0.5)`,
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply',
  color: 'white'
}

const handleIndiPlan = () => {
	cookie.remove("plan");
	cookie.set("plan", "individual")
	Router.push('/membership/registration')
}

const handleGroupPlan = () => {
	cookie.remove("plan");
	cookie.set("plan", "group")
	Router.push('/membership/registration')
}

const Membership = () => {

	return(
		<Default>
		<Jumbotron className="vh-100 text-center d-flex align-items-center justify-content-center" style={jumboStyle}>
      		<div>
		        <h1 className="jumbo-title text-white">We take pride in our work.</h1>
		        <h5 className="jumbo-subtitle text-white">Start today and be a lifeline member.</h5>
		        <div className="pb-container"><div className="play-button large"></div></div>
		        <div className="mt-5">
		          <Button className="mr-2 text-white" variant="danger" style={{height: "100px", width: "250px", fontSize: "30px"}}>Start Now</Button>
		        </div>
		        <p className="text-white mt-3 mb-0">
		          By continuting you agree to our
		        </p>
		        <Link to="#"><p className="text-white mt-0">Terms of Use</p></Link>
      		</div>
      	<video className="jumbo-video" controls hidden>
        	<source src={VideoMP4} type="video/mp4" />
        	<source src={VideoWEBM} type="video/webm" />
      	</video>
    </Jumbotron>
    <Container fluid className="px-0">
    	<Jumbotron className="text-center mb-0 d-flex flex-column justify-content-center bg-light">
      		<div className="mb-3">
		        <h1 className="jumbo-title font-weight-bolder" style={{fontSize: "60px"}}>Individual Membership Plans</h1>
		        <h5 className="jumbo-subtitle"><span className="font-weight-bolder">What:</span> Emergency Quick Response (EQR) for one member.</h5>
		        <h5 className="jumbo-subtitle"><span className="font-weight-bolder">Where:</span>Member coverage is inside and outside the home, whole of Metro Manila.</h5>
		        
      		</div>
   			<Container>
   			<Row className="show-grid">
	    		<Col lg={6} md={6} sm={12} xs={12} className="mx-0 px-0 mb-4">
	            	<div className="d-flex flex-column align-items-center justify-content-center" style={{border: "1px solid lightgray", borderRadius: "2%",minHeight: "50vh"}}>
	                	<h1 className="pBoxTitle">Individual Plan 1 Year</h1>
	                	<h2>&#8369;<span className="font-weight-bolder">2,000</span><span> /yr</span></h2>
	                	<Button onClick={handleIndiPlan} className="btn btn-success px-3 mt-3" style={{height: "50px", width: "150px", borderRadius: "100px"}}>Enroll Now</Button>
	              	</div>
	            </Col>
	    		<Col lg={6} md={6} sm={12} xs={12} className="mx-0 px-0 mb-4">
	            	<div className="d-flex flex-column align-items-center justify-content-center" style={{border: "1px solid lightgray", borderRadius: "2%",minHeight: "50vh"}}>
	                	<h1 className="pBoxTitle">Individual Plan 2 Years</h1>
	                	<h2>&#8369;<span className="font-weight-bolder">3,000</span><span> /2yrs</span></h2>
	              		<Button onClick={handleIndiPlan} className="btn btn-success px-3 mt-3" style={{height: "50px", width: "150px", borderRadius: "100px"}}>Enroll Now</Button>
	              	</div>
	            </Col>
            </Row>


    	</Container>
    	<div className="mb-3">
		        <h1 className="jumbo-title font-weight-bolder" style={{fontSize: "60px"}}>Group Plan</h1>
		        <h5 className="jumbo-subtitle"><span className="font-weight-bolder">What:</span> Emergency Quick Response (EQR) for groups of 6.<br />
		Additional members pay ₱ 1,700.00 (Under one transaction date).<br />
		Comes with one FREE (1) In-Home coverage for one identified residential address.<br />
		In-Home plan covers household staff and guests.</h5><br />
		        <h5 className="jumbo-subtitle"><span className="font-weight-bolder">Where:</span>Coverage for the 6 or more individual members is inside and outside the home, whole of Metro Manila.<br />Coverage for the household staff and guests are inside the home only.</h5>
		        
      		</div>
   			<Container>
   			<Row className="show-grid">
	    		<Col lg={6} md={6} sm={12} xs={12} className="mx-0 px-0 mb-4">
	            	<div className="d-flex flex-column align-items-center justify-content-center" style={{border: "1px solid lightgray", borderRadius: "2%",minHeight: "50vh"}}>
	                	<h1 className="pBoxTitle">Group Plan 1 Year</h1>
	                	<h2>&#8369;<span className="font-weight-bolder">10,000</span><span> /yr</span></h2>
	                	<small>Additional P1,700 per person for one year.</small>
	                	<Button onClick={handleGroupPlan} className="btn btn-success px-3 mt-3" style={{height: "50px", width: "150px", borderRadius: "100px"}}>Enroll Now</Button>
	              	</div>
	            </Col>
	    		<Col lg={6} md={6} sm={12} xs={12} className="mx-0 px-0 mb-4">
	            	<div className="d-flex flex-column align-items-center justify-content-center" style={{border: "1px solid lightgray", borderRadius: "2%",minHeight: "50vh"}}>
	                	<h1 className="pBoxTitle">Group Plan 2 Years</h1>
	                	<h2>&#8369;<span className="font-weight-bolder">17,000</span><span> /2yrs</span></h2>
	                	<small>Additional P2,850 per person for two years.</small>
	              		<Button onClick={handleGroupPlan} className="btn btn-success px-3 mt-3" style={{height: "50px", width: "150px", borderRadius: "100px"}}>Enroll Now</Button>
	              	</div>
	            </Col>
            </Row>

            
    	</Container>
    	</Jumbotron>
    	<Jumbotron className="py-5 my-0 text-center d-flex align-items-center justify-content-center" style={{minHeight: "50vh"}}>
      		<div>
		        <h1 className="jumbo-title">You're in good company</h1>
		        <h5 className="jumbo-subtitle">Join our satisfied customers locally and globally, and get secured by award winning service.</h5>
      		</div>
    </Jumbotron>
    </Container>
		</Default>
	)
}

export default Membership;