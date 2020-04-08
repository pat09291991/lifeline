import React, { useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Row, Col, Image, Container, CardGroup, Card, Modal, CardDeck } from 'react-bootstrap'
import Link from 'next/link';
import Router from 'next/router'
import cookie from 'js-cookie'


import Default from '../layouts/default';
import VideoMP4 from '../public/home/video.mp4';
import VideoWEBM from '../public/home/video.webm';
import JumboImage from '../public/home/jumbo.jpg';
import SagisagImage from '../public/home/sagisag.jpg';

import ecr1 from '../public/Image/emergency-quick-response_1.jpg';
import ecr2 from '../public/Image/emergency-quick-response_2.jpg';
import ecr3 from '../public/Image/emergency-quick-response_3.jpg';
import ecr4 from '../public/Image/emergency-quick-response_4.jpg';
import ecr5 from '../public/Image/emergency-quick-response_5.jpg';
import ecr6 from '../public/Image/emergency-quick-response_6.jpg';

import ift1 from '../public/Image/interfacility-transfers_1.jpg';
import ift2 from '../public/Image/interfacility-transfers_2.jpg';
import ift3 from '../public/Image/interfacility-transfers_3.jpg';

import asb1 from '../public/Image/ambulance-standbys_1.jpg';
import asb2 from '../public/Image/ambulance-standbys_2.jpg';
import asb3 from '../public/Image/ambulance-standbys_3.jpg';
import asb4 from '../public/Image/ambulance-standbys_4.jpg';
import asb5 from '../public/Image/ambulance-standbys_5.jpg';
import asb6 from '../public/Image/ambulance-standbys_6.jpg';

import mal1 from '../public/Image/medical-airlifts_1.jpg';
import mal2 from '../public/Image/medical-airlifts_2.jpg';
import mal3 from '../public/Image/medical-airlifts_3.jpg';
import mal4 from '../public/Image/medical-airlifts_4.jpg';
import mal5 from '../public/Image/medical-airlifts_5.jpg';
import mal6 from '../public/Image/medical-airlifts_6.jpg';

import doc1 from '../public/Image/doctor-on-call_1.jpg';
import doc2 from '../public/Image/doctor-on-call_2.jpg';
import doc3 from '../public/Image/doctor-on-call_3.jpg';

import doc4 from '../public/Image/diagnostics-on-call_1.jpg';
import doc5 from '../public/Image/diagnostics-on-call_2.jpg';
import doc6 from '../public/Image/diagnostics-on-call_3.jpg';

import doc7 from '../public/Image/driver-on-call_1.jpg';
import doc8 from '../public/Image/driver-on-call_2.jpg';
import doc9 from '../public/Image/driver-on-call_3.jpg';



const jumboStyle = {
  background: `url(${JumboImage}) rgba(0, 0, 0, 0.4)`,
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply',
  minHeight: "35vh",
  position: "bottom"
}

const trustedStyle = {
  background: `url(${SagisagImage}) rgba(0, 0, 0, 0.5)`,
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply',
  color: 'white'
}

const selectedStyle = {
	cursor: "pointer"
}

const Membership = () => {

const [selectedServices, setSelectedServices] = useState("ecr");

const handleSelected = (e) => {
	setSelectedServices("");
	setSelectedServices(e);
}
	console.log(selectedServices);

	return(
		<Default>
			<Jumbotron className="h-100 d-flex mt-5 flex-column mb-0" style={jumboStyle}>
		        <Container>
		        	<h1 className="jumbo-title text-white pt-3">Services</h1>
			        <h5><button onClick={()=>Router.push('/')} className="text-white btn btn-link px-0"><h5>HOME</h5></button><span className="text-white"> / </span><span className="text-info">SERVICES</span></h5>
		        </Container>
    		</Jumbotron>
    		<Jumbotron style={{backgroundColor: "white", marginBottom: "0px"}}>
    			<h1 className="text-center font-weight-bolder">OUR <span className="text-danger font-weight-bolder">SERVICES</span></h1>
            <Container>
            	<CardGroup className="text-center mt-5">
			  <Card style={{cursor: "pointer", backgroundColor: selectedServices==="ecr" ? "#dc3545" : "#FFF", color: selectedServices ==="ecr" ? "#FFF" : "#000"}} onClick={()=>handleSelected("ecr")}>
			    <Card.Body>
    			<small className="mb-0">EMERGENCY QUICK RESPONSE</small>
			    </Card.Body>
			  </Card>
			  <Card style={{cursor: "pointer", backgroundColor: selectedServices==="ift" ? "#dc3545" : "#FFF", color: selectedServices ==="ift" ? "#FFF" : "#000"}} onClick={()=>handleSelected("ift")}>
			    <Card.Body>
    			<small className="mb-0">INTERFACILITY TRANSFERS</small>
			    </Card.Body>

			  </Card>
			  <Card style={{cursor: "pointer", backgroundColor: selectedServices==="asb" ? "#dc3545" : "#FFF", color: selectedServices ==="asb" ? "#FFF" : "#000"}} onClick={()=>handleSelected("asb")}>
			    <Card.Body>
    			<small className="mb-0">AMBULANCE STANDBYS</small>
			    </Card.Body>
			  </Card>
			  <Card style={{cursor: "pointer", backgroundColor: selectedServices==="mal" ? "#dc3545" : "#FFF", color: selectedServices ==="mal" ? "#FFF" : "#000"}} onClick={()=>handleSelected("mal")}>
			    <Card.Body>
    			<small className="mb-0">MEDICAL AIRLIFTS</small>
			    </Card.Body>
			  </Card>
			  <Card style={{cursor: "pointer", backgroundColor: selectedServices==="dcp" ? "#dc3545" : "#FFF", color: selectedServices ==="dcp" ? "#FFF" : "#000"}} onClick={()=>handleSelected("dcp")}>
			    <Card.Body>
    			<small className="mb-0">D.O.C PROGRAMS</small>
			    </Card.Body>
			  </Card>
			</CardGroup>
            </Container>

    		</Jumbotron>
    		{selectedServices === "ecr" ? <EmergencyQuickResponse /> : ""}
    		{selectedServices === "ift" ? <InterfacilityTransfers /> : ""}
    		{selectedServices === "asb" ? <AmbulanceStandbys /> : ""}
    		{selectedServices === "mal" ? <MedicalAirlifts /> : ""}
    		{selectedServices === "dcp" ? <DocPrograms /> : ""}

		</Default>
	)
}

function EmergencyQuickResponse(){
	
	return(
		<Fragment>
			<Container className="mb-4">
				<h1  className="text-center">EMERGENCY QUICK RESPONSE</h1>
				<p  className="text-center">"Virtual Emergency Room"</p>
			<p className="px-3">Free use of ambulance equipment and medicines such as: Defibrillators, splints, braces, suction pump machines, patient transport equipment, oxygen, parenteral fluids, oral/injectable medicines, disposable supplies. A state of the art 24-hour radio telecom network links all of the ambulances and hospitals to ensure the most efficient management during any emergency.</p>
            
          <CardDeck className="mx-0 px-0">
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={ecr1} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={ecr2} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={ecr3} />
			  </Card>
			</CardDeck>

			<CardDeck className="mx-0 px-0 mt-4">
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={ecr4} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={ecr5} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={ecr6} />
			  </Card>
			</CardDeck>
			
			</Container>

		</Fragment>
	)
}

function InterfacilityTransfers(){
	
	return(
		<Fragment>
			<Container className="mb-4">
				<h1  className="text-center">INTERFACILITY TRANSFERS</h1>
			<p className="px-3">Lifeline also provides transportation of ill and injured patients between hospitals to hospitals or from hospitals to home or home to any treatment facilities. Even though these are typically non-emergency transports, the vehicles are still staffed by emergency medical technicians. Booking is required.</p>
            
          <CardDeck className="mx-0 px-0">
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={ift1} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={ift2} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={ift3} />
			  </Card>
			</CardDeck>
			</Container>

		</Fragment>
	)
}

function AmbulanceStandbys(){
	
	return(
		<Fragment>
			<Container className="mb-4">
				<h1  className="text-center">AMBULANCE STANDBYS</h1>
			<p className="px-3">We provide standby ambulances for events for all sporting, social, entertainment or corporate events. When we provides ambulance stand-by services, that means the emergency vehicle and crew do not leave the scene for the duration of the event due to the potential hazards or high risk of injury during the event. To ensure the availability of the ambulances, please make sure that the bookings are done at least two weeks prioer to the event.</p>
            
          <CardDeck className="mx-0 px-0">
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={asb1} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={asb2} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={asb3} />
			  </Card>
			</CardDeck>

			<CardDeck className="mx-0 px-0 mt-4">
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={asb4} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={asb5} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={asb6} />
			  </Card>
			</CardDeck>
			
			</Container>

		</Fragment>
	)
}

function MedicalAirlifts(){
	
	return(
		<Fragment>
			<Container className="mb-4">
				<h1  className="text-center">MEDICAL AIRLIFTS</h1>
			<p className="px-3">Airlifts are done in coordination with other service providers, both private and commercial entities, such as Lion Air, SOS International, Assist America, and Philippine Airlines, to name just a few of their partners.</p>
            
          <CardDeck className="mx-0 px-0">
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={mal1} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={mal2} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={mal3} />
			  </Card>
			</CardDeck>

			<CardDeck className="mx-0 px-0 mt-4">
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={mal4} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={mal5} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={mal6} />
			  </Card>
			</CardDeck>
			
			</Container>

		</Fragment>
	)
}

function DocPrograms(){
	
	return(
		<Fragment>
			<Container className="mb-4">
				<h1  className="text-center">DOCTOR ON CALL</h1>
			<p className="px-3">Save on time, gas, parking and the inconvenience of dressing up to visit a doctor while you are sick. Lifeline can send a doctor to your home or office. Full laboratory diagnostic home services available by appointment at costs than those of hospital laboratories: CBC, Urinalysis, Cholesterol, Spec 23, Lipid Profile, SGPT, SGOT, Wellness Packages including Tumor Markers, etc.</p>
            
          <CardDeck className="mx-0 px-0">
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={doc1} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={doc2} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={doc3} />
			  </Card>
			</CardDeck>

			<h1  className="text-center mt-5">DIAGNOSTICS ON CALL</h1>
			<p className="px-3">Each Lifeline DOC team is dispatched with a licensed medical physician and registered nurse, fully-equipped with clinical supplies. The cost of a consultation is comparable to Emergency Room rates at tertiary hospitals. Pay only per consultation, exclusive of supplies and professional fees when applicable.</p>
            
          <CardDeck className="mx-0 px-0">
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={doc4} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={doc5} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={doc6} />
			  </Card>
			</CardDeck>
			
			<h1  className="text-center mt-5">DRIVER ON CALL</h1>
			<p className="px-3">As part of Lifeline 16-911's preventive emergency initiative and corporate social responsibility, we have recently launched a new project called "Driver on Call". The goal of the project is to provide motorists with a better way to get home safely should their to drive become compromised by intoxication, medication, illness or other causes.</p>
            
          <CardDeck className="mx-0 px-0">
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={doc7} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={doc8} />
			  </Card>
			  <Card style={{border: "1px solid #fff"}}>
			    <Card.Img variant="top" src={doc9} />
			  </Card>
			</CardDeck>
			</Container>

		</Fragment>
	)
}

export default Membership;