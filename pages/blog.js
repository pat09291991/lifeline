import React, { useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Row, Col, Image, Container, CardGroup, Card, Modal, CardDeck } from 'react-bootstrap'
import Link from 'next/link';
import Router from 'next/router'

import JumboImage from '../public/home/jumbo.jpg';
import Default from '../layouts/default';

import Blog1 from '../public/Image/blog_1.jpg';
import Blog2 from '../public/Image/blog_2.jpg';


const Blog = () => {

const jumboStyle = {
  background: `url(${JumboImage}) rgba(0, 0, 0, 0.4)`,
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply'
}
	return(
		<Fragment>
			<Default>
			<Jumbotron className="h-100 d-flex mt-5 flex-column mb-0" style={jumboStyle}>
		        <Container>
		        	<h1 className="jumbo-title text-white pt-3">Blog</h1>
			        <h5><button onClick={()=>Router.push('/')} className="text-white btn btn-link px-0"><h5>HOME</h5></button><span className="text-white"> / </span><span className="text-info">BLOG</span></h5>
		        </Container>
    		</Jumbotron>
    		<Jumbotron style={{backgroundColor: "#FFF"}} className="text-center">
    			<Container>
    				<div className="mb-5">
    				<img src={Blog1} className="w-100"/>
    				<div className="d-flex align-items-center justify-content-center">
    					<div className="col-lg-1" style={{ backgroundColor: "#0366B1"}}>
    						<h2 className="font-weight-bolder text-white">02</h2>
    						<h5 className="font-weight-bolder text-white">Apr</h5>
    					</div>
    					<div className="col-lg-11">
    						<h3 className="text-left font-weight-bolder">COVID-19 PREVENTION: HOUSEHOLD CLEANING & DISINFECTING</h3>
    					</div>
    				</div>
    			</div>
    			<div>
    				<img src={Blog2} className="w-100"/>
    				<div className="d-flex align-items-center justify-content-center">
    					<div className="col-lg-1" style={{ backgroundColor: "#0366B1"}}>
    						<h2 className="font-weight-bolder text-white">02</h2>
    						<h5 className="font-weight-bolder text-white">Apr</h5>
    					</div>
    					<div className="col-lg-11">
    						<h3 className="text-left font-weight-bolder">COVID-19 PREVENTION: SANITIZE YOUR FOOTWEAR</h3>
    					</div>
    				</div>
    			</div>
    			
    			</Container>
    		</Jumbotron>
    		</Default>
    		</Fragment>
    )
}

export default Blog;			