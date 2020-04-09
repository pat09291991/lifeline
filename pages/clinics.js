import React, { useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Row, Col, Image, Container, CardGroup, Card, Modal, CardDeck } from 'react-bootstrap'
import Link from 'next/link';
import Router from 'next/router'
import cookie from 'js-cookie'

import JumboImage from '../public/home/jumbo.jpg';
import Default from '../layouts/default';
import Pope from '../public/Image/pope.png';
import Apec from '../public/Image/apec.png';
import Potus from '../public/Image/potus.png';


function ClinicCard({ name, imgUrl, readmore, address, number }){

console.log(name);

const [modalShow, setModalShow] = React.useState(false);

const handleOpenLocation = () =>{
	console.log("Hello")
}
 return(
 		<Card style={{borderStyle: "none"}} className="px-2">
    <Card.Img variant="top" src={imgUrl} className="clinicard"/>
    	<Card.Body style={{marginTop: "-50px"}}>
      		<div className="text-center bg-light d-flex flex-column align-items-center py-3">
      		<h3>{name}</h3>
      		<h6 className="text-center mb-0" onClick={() => setModalShow(true)}><button className="btn btn-link">{readmore}</button></h6>
      		</div>
    	</Card.Body>
    	<Clinic show={modalShow}
			onHide={() => setModalShow(false)}
			name={name}
			address={address}
			number={number}
		/>
  	</Card>
 )
}

const jumboStyle = {
  background: `url(${JumboImage}) rgba(0, 0, 0, 0.4)`,
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply'
}



const Clinics = () => {

	return(
		<Fragment>
			<Default>
			<Jumbotron className="h-100 d-flex mt-5 flex-column mb-0" style={jumboStyle}>
		        <Container>
		        	<h1 className="jumbo-title text-white pt-3">CLINICS</h1>
			        <h5><button onClick={()=>Router.push('/')} className="text-white btn btn-link px-0"><h5>HOME</h5></button><span className="text-white"> / </span><span className="text-info">CLINICS</span></h5>
		        </Container>
    		</Jumbotron>
    		<Jumbotron style={{backgroundColor: "white", marginBottom: "0px"}}>
    			<Container>
    				<h1 className="font-weight-bolder">OUR <span className="text-danger font-weight-bolder">CLINICS</span></h1>
    				<p>We specialize in tailor-making clinics to suit our clients' needs. Majority <br /> of the Lifeline Clinics are advanced first aid clinics.</p>
    			
    				<Row><Col>
			        <CardGroup>
			          <ClinicCard name="Alabang Hills Vilage" number="+63(2) 551-1807" address="Don Jesus Blvd., Alabang Hills Village, Muntinlupa City, Philippines" imgUrl="https://picsum.photos/500/650?random=1" readmore="READ MORE" />
          				<ClinicCard name="Ayala Alabang Village" number="+63(2) 772-3898 / +63(2) 772-2387" address="Narra Street, Ayala Alabang Village, Muntinlupa City, Philippines" imgUrl="https://picsum.photos/500/650?random=2" readmore="READ MORE" />
          				<ClinicCard name="Loyola Grand Villas" number="+63(2) 709-4355" address="Guatemala Space, Soliven II, Loyola Grand Villas, Quezon City, Philippines" imgUrl="https://picsum.photos/500/650?random=3" readmore="READ MORE" />
          				<ClinicCard name="Rockwell Makati Club" number="+63(2) 798-1700 local 1748 / +63(2) 798-1748" address="Basement 2 of Amorsolo East Tower, Rockwell Center, Makati City, Philippines" imgUrl="https://picsum.photos/500/650?random=4" readmore="READ MORE" />
			        </CardGroup>
			      </Col></Row>

    			</Container>
    		</Jumbotron>
    		<Jumbotron style={{backgroundColor: "#FFF", paddingTop: "0px"}}>
    			<Container>
    				<h1 className="font-weight-bolder">OUR <span className="text-danger font-weight-bolder">PODS</span></h1>
    				<p>Points of Dispatch are standalone self contained ambulance stations<br /> where ambulances can replenish their stocks. These are where<br /> ambulances and its crew are in standby.</p>
    			</Container>
    		</Jumbotron>

    		<Jumbotron style={{backgroundColor: "#FFF"}}>
    			<Container>
    				<h1 className="font-weight-bolder">OUR <span className="text-danger font-weight-bolder">AMBULANCES</span></h1>
    				<p>All ambulances are equipped with GPS trackers and dashboard cameras<br /> for full transparency, efficiency, and security. Lifeline knows the<br /> location of each ambulance in real-time as shown below.</p>
    			</Container>
    		</Jumbotron>
    			
    		</Default>
		</Fragment>
	)
}

function Clinic(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-between">
        	<span className="col-lg-3">Phone Number</span>
        	<span className="text-left col-lg-9">{props.number}</span>
        </div>
        <div className="d-flex justify-content-between">
        	<span className="col-lg-3">Address</span>
        	<span className="text-left col-lg-9">{props.address}</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Clinics;