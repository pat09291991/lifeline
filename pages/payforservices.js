import React, { useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Row, Col, Image, Container, CardGroup, Card, Modal, CardDeck, Carousel } from 'react-bootstrap'
import Link from 'next/link';
import Router from 'next/router';

const PayForServices = () => {
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
				<p className="font-weight-bolder">16-911</p>
				<h1 className="text-white">LIFELINE 16911</h1>
				<p className="text-white w-50 pr-4 servicesAboutTexts">Being the only fully-equipped ambulance service to respond to life-threatening situations, Lifeline 16911 is the trusted industry leader. Our ambulances are virtual "emergency rooms on wheels" and our experienced, well-trained and courteous staff is always ready to provide the best nursing and medical care. We are constantly striving to improve so as to better serve our client communities.</p>
					<Button className="bg-dark mr-2 border-0">Pay Now</Button>
					<Button className="bg-dark mr-2 border-0">Learn More</Button>
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
					background-color: blue;
					opacity: 0.8;
					position: absolute;
					top: 0;
					left: 0;
					z-index: 2;
				}
				.servicesAbout{
					position: absolute;
					top: 30%;
					left: 10%;
					z-index: 3;
				}
				@media only screen and (max-width: 767px) {
    				.servicesAboutTexts{
    					width: 100% !important;
    				}    
		        }
			`}</style>
		</Container>	
		</Fragment>
	)
}

export default PayForServices;