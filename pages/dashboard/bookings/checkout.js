import React, { useState, useEffect, Fragment } from 'react';
import apiUrl from '../../../api'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import Moment from 'react-moment';
import cookie from 'js-cookie'
import { Jumbotron, Button, Row, Col, Image, Container, CardGroup, Card, Modal, Form } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Cards from 'react-credit-cards';
 import 'react-credit-cards/es/styles-compiled.css';

import Navbar from "../../../components/navbar";


const Checkout = () => {

const [services, setServices] = useState([]);
const [selected, setSelected] = useState([]);
const [selectedStyle, setSelectedStyle ] = useState(false)
const [show, setShow] = useState(false);
const [page, setPage] = useState(1);

useEffect(()=>{
	axios.get(`${apiUrl}/services`)
	.then(res=>{
		setServices(res.data);
	})
	const pageNumber = cookie.get("page")
	if(pageNumber){
		setPage(parseInt(pageNumber))
	}

	const items = cookie.get("items");
	if(items){
		const selectedItems = JSON.parse(items)
		setSelected(selectedItems);
	}

	
}, [])

const handleSelected = (e) => {
	setSelected([...selected, e.id])
	if(selected.some(select => select === e.id)){
		setSelected(prevIndexes => [...prevIndexes.filter(item => item !== e.id)]);
	}

	
} 

const handleClose = () => {
	setShow(false)
}
	return(
		<Fragment>
			<Navbar></Navbar>
			<Container fluid className="px-0">
				<Jumbotron className="bg-white">
					{page === 1 ?
						<ServicesSelection 
							services={services} 
							selected={selected} 
							handleSelected={handleSelected} 
							setShow={setShow}
							setPage={setPage}
							page={page}
						/>
					: ""}

					{page === 2 ?
						<CheckoutPage
							selected={selected} 
							handleSelected={handleSelected}
							setPage={setPage}
							services={services}
						 />
					 : ""}
				</Jumbotron>
			</Container>
			<Modal show={show} onHide={handleClose}>
	        <Modal.Header closeButton>
	          <Modal.Title>Warning</Modal.Title>
	        </Modal.Header>
	        <Modal.Body>No Items Selected</Modal.Body>
	        <Modal.Footer>
	          <Button variant="secondary" onClick={handleClose}>
	            Close
	          </Button>
	        </Modal.Footer>
	      </Modal>
		</Fragment>
	)
}

function ServicesSelection({services, selected, handleSelected, setShow, setPage}){


const handleCheckout = () => {
	if(selected.length == 0){
		setShow(true)
	}else{
		selected.map(item=>{
		cookie.remove("page");
		setPage(2);
		cookie.set("page", 2);
		cookie.set("items", JSON.stringify(selected));
		// services.map((item, index)=>{
		// 	selected.map((k, index)=>{
		// 		if(item.id == k){
		// 			setList(item);
		// 		}
		// 	})
		// })
		
	})
		
	}
}


	return(
		<Container className="text-center d-flex align-items-center flex-column">
						<div className="w-50 services">
							<h1>Services</h1>
						<p>We provide home services for the comfort and convenience of our patients</p>
						<div className="d-flex flex-column">
							{services.map((item, index)=>{
							return(
								<Fragment key={index}>
									<button className={selected.some(select => select === item.id) ? "btn btn-danger mb-2" : "btn bg-light mb-2 shadow-sm"} onClick={()=>handleSelected(item)}>
										<span className="d-flex justify-content-between">
											{item.title} <span>&#8369;{item.price}</span>
										</span>
									</button>
								</Fragment>
							)
						})}
						</div>
						<div className="d-flex justify-content-between">
							<button className="btn btn-secondary">View History</button>
							<button className="btn btn-warning text-white" onClick={handleCheckout}>Checkout</button>
						</div>
						</div>
						<style jsx>{`
							@media only screen and (max-width: 767px){
								.services{
									width: 100% !important;
								}
							}
						`}</style>
		</Container>
	)
}

function CheckoutPage({selected, services, setPage}){
	
const { handleSubmit, register, errors, watch } = useForm();
const [startDate, setStartDate] = useState(new Date());
const [selectedCC, setSelectedCC] = useState(true);
const [selectedLater, setSelectedLater] = useState(false);
const [totalPrice, setTotalPrice] = useState(null);
const [show, setShow] = useState(false);

useEffect(()=>{
	const items = cookie.get("items");
	if(items){
		let total = 0;
		const itemList = JSON.parse(items)
		services.map(service=>{
			itemList.map(i=>{
				if(service.id == i){
					total+=(parseInt(service.price))
					cookie.set("total", total)
				}			
			})
		})
	}
	const price = cookie.get("total");
	if(price){
		setTotalPrice(parseInt(price))
	}
}, [])

const [bookingInfo, setBookingInfo] = useState({
	first_name: "",
	last_name: "",
	address: "",
	email: "",
	booking_datetime: "",
	services: [],
	phone_number: ""
})

const [payment, setPayment] = useState({
	name: "",
	number: "",
	expiration_month: "",
	expiration_year: "",
	cvc: "",
	booking_id: ""
})
const [number, setNumber] = useState('')
const [name, setName] = useState('')
const [expiry, setExpiry] = useState('')
const [cvc, setCvc] = useState('')
const [focus, setFocus] = useState('')
 
	const handleBack = () =>{
		cookie.remove("items");
		cookie.remove("page");
		setPage(1);
		cookie.set("page", 1);

	}

const styleCC = {
	minHeight: "50px",
	backgroundColor: selectedCC ? "lightgray" : "#d1604e",
	color: selectedCC ? "#d1604e" : "white"
}
const styleLater = {

	minHeight: "50px",
	backgroundColor: selectedLater ? "lightgray" : "#d1604e",
	color: selectedLater ? "#d1604e" : "white"
}

const handleActivateCC = () => {
	setSelectedLater(false)
	setSelectedCC(true)
}
const handleActivateLater = () => {
	setSelectedCC(false)
	setSelectedLater(true)
}

const handleInputFocus = (e) => {
    setCardDetails({ focus: e.target.name });
  }
  
const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setCardDetails({ [name]: value });
  }



const onSubmit = (value) => {
		// console.log(value);
		// console.log(startDate);
		// console.log(totalPrice);
		// console.log(selected);

		if(Object.keys(errors).length === 0){
			setBookingInfo({first_name: value.first_name, last_name: value.last_name, address: value.address, email: value.email, booking_datetime: startDate, services: [...selected], phone_number: value.phone_number})
			if(value.number){
				setPayment({name: value.name, number: value.number, expiration_month: value.expiry.slice(2,7), expiration_year: value.expiry.slice(0,2), cvc: value.cvc})
			}else{
				console.log("Pay Later")
			}
			setShow(true);
		}

}

const handleClose=()=>{
	setShow(false)
}

const handleBook = () => {
	const accessToken = cookie.get("token");

	if(accessToken){
		const parsedToken = JSON.parse(accessToken);
		const token = parsedToken.access;

		axios.post(`${apiUrl}/bookings/`, JSON.stringify(bookingInfo), {
			headers: {
				"Content-Type": "application/json",
				Authorization: 'Bearer ' + token
		}
		}).then(res=>{
			console.log(res.data.id);
			axios.post(`${apiUrl}/payments/pay_magpie/`, {name: payment.name, number: payment.number, expiration_month: payment.expiration_month, expiration_year: payment.expiration_year, cvc: payment.cvc, booking_id: res.data.id}, {
			headers: {
				"Content-Type": "application/json",
				Authorization: 'Bearer ' + token
		}}).then(res=>{
			console.log(res);
		})

			setBookingInfo({
				first_name: "",
				last_name: "",
				address: "",
				email: "",
				booking_datetime: "",
				services: [],
				phone_number: ""
			})
			setShow(false)
		})
	}
}
console.log(payment);

	return(
		<Fragment>
			<button className="btn bg-white" onClick={handleBack}>Back</button>
				<h1 className="text-center mb-4">Checkout</h1>
			<Container className="text-center d-flex justify-content-center px-0">
                <div className="w-75 services ">
                	<p className="text-left mb-1">Items</p>
							
								<Row>
                            <Col lg={2} md={2} sm={2} xs={2}>
                            	{selected.map((item, index)=>{
                            		return(
                            				<p key={index} className="text-left mb-1">1</p>
                            		)
                            	})}
                            			<h3 className="text-left mt-5">Total</h3>

                            </Col>
                            <Col lg={10} md={10} sm={10} xs={10}>
                            	{selected.map((item, index)=>{
                            		return(
                            			<Fragment key={index}>
                            				{services.map((service, index)=>{
                            				return(
                            					<Fragment key={index}>
                            						{service.id == item ? 
                            							<Fragment>
                            								<Row>
								                            	<Col lg={6} md={6} sm={6} xs={6} className="px-0">
								                            		<p className="text-left mb-1">{service.title}</p>
								                            	</Col>
								                            	<Col lg={6} md={6} sm={6} xs={6}>
								                            		<p className="text-right mb-1">&#8369;{service.price}</p>
                            										
								                            	</Col>
								                            </Row>
                            							</Fragment> 
                            						: ""}
                            					</Fragment>
                            				)
                            				})}
                            			</Fragment>
                            		)
                            	})}
                            	
                            	<h3 className="text-right mt-5">&#8369;{totalPrice}.00</h3>
                            </Col>
                            </Row>
                            <Row>
                            	<Col lg={12} md={12} sm={12} xs={12}>
								<form onSubmit={handleSubmit(onSubmit)}>
                            		<Row>
                            			<Col lg={4} md={4} sm={12} xs={12}>
                            			<div className="w-100 mt-2">
							              <input
							              name="first_name"
							              className="form-control"
							              ref={register({
							                required: 'First name is required',
							              })}
							              placeholder="First Name"
							            />
							            <small className="text-danger">{errors.first_name && errors.first_name.message}</small>
							            </div>
                            		</Col>
                            		<Col lg={4} md={4} sm={12} xs={12}>
                            			<div className="w-100 mt-2">
							              <input
							              name="last_name"
							              className="form-control txtEmail"
							              ref={register({
							                required: 'Last name is required',
							              })}
							              placeholder="Last Name"
							            />
							            <small className="text-danger">{errors.last_name && errors.last_name.message}</small>
							            </div>
                            		</Col>

                            		<Col lg={4} md={4} sm={12} xs={12}>
                            			 <div className="divEmail"  className="w-100 mt-2">
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
                            		</Col>

                            		<Col lg={8} md={8} sm={12} xs={12}>
                            			<div className="w-100 mt-2">
							              <input
							              name="address"
							              className="form-control txtEmail"
							              ref={register({
							                required: 'Address is required',
							              })}
							              placeholder="Full Address"
							            />
							            <small className="text-danger">{errors.address && errors.address.message}</small>
							            </div>
                            		</Col>

                            		<Col lg={4} md={4} sm={12} xs={12}>
                            			<div className="w-100 mt-2">
							              <input
							              name="phone_number"
							              className="form-control txtEmail"
							              ref={register({
							                required: 'Phone number is required',
							              })}
							              placeholder="Phone Number"
							            />
							            <small className="text-danger">{errors.phone_number && errors.phone_number.message}</small>
							            </div>
                            		</Col>


                            		<Col lg={12} md={12} sm={12} xs={12}>
                            			<div className="mt-2">
										<DatePicker
									      selected={startDate}
									      onChange={date => setStartDate(date)}
									      showTimeSelect
									      timeFormat="HH:mm"
									      timeIntervals={15}
									      timeCaption="time"
									      dateFormat="MMMM d, yyyy h:mm aa"
									      className="form-control"
									      minDate={new Date()}
									      name="booking_date"
									      ref={register}
									    />
							            </div>
                            		</Col>

						    			<Col lg={6} md={6} sm={6} xs={6} className="mx-0 px-0 pt-3">
						            		<Button onClick={handleActivateCC} className="btn-danger d-flex flex-column align-items-center justify-content-center float-right border-0 rounded-0" style={styleLater}>
						            			Credit Card
						              		</Button>
						            	</Col>
						    			<Col lg={6} md={6} sm={6} xs={6} className="mx-0 px-0 pt-3">
						            		<Button onClick={handleActivateLater} className="btn-danger d-flex flex-column align-items-center justify-content-center border-0 rounded-0" style={styleCC}>
						              			Pay Later
						              		</Button>
						            	</Col>

						            	{selectedCC ? 
						            	<Fragment>
						    			<Col lg={6} md={6} sm={12} xs={12} className="mx-0 px-2 pt-3">
						            	<Cards
								          cvc={cvc}
								          expiry={expiry}
								          focused={focus}
								          name={name}
								          number={number}
								        />
										</Col>

						    			<Col lg={6} md={6} sm={12} xs={12} className="mx-0 px-2 pt-3">
                            				<div className="w-100">
										        	<input
										            type="tel"
										            name="number"
										            placeholder="Card Number"
										            value={number}
										            onChange={e => setNumber(e.target.value)}
										            onFocus={e => setFocus(e.target.name)}
										            maxLength="16"
										            className="form-control"
										            ref={register({
										                required: 'Card Number is required',
										               
										              })}
										          />
										          <small className="text-danger">{errors.number && errors.number.message}</small>
										    </div>
                            				<div className="w-100 mt-2">
										          <input
										            type="text"
										            name="name"
										            placeholder="Name"
										            value={name}
										            onChange={e => setName(e.target.value)}
										            onFocus={e => setFocus(e.target.name)}
										            className="form-control"
										            ref={register({
										                required: 'Name is required',
										               
										              })}
										          />
										    </div>
										          <small className="text-danger">{errors.name && errors.name.message}</small>
                            				<div className="w-100 mt-2">

										          <input
										            type="text"
										            name="expiry"
										            placeholder="MM/YYYY Expiry"
										            value={expiry}
										            onChange={e => setExpiry(e.target.value)}
										            onFocus={e => setFocus(e.target.name)}
										            className="form-control"
										            maxLength="6"
										            ref={register({
										                required: true,
										               	minLength: 6
										              })}
										          />										    
										         <small className="text-danger">
										         {errors.expiry &&
											        errors.expiry.type === "required" &&
											        "Your input is required"}
											      {errors.expiry &&
											        errors.expiry.type === "minLength" &&
											        "Invalid Expiry"}
										         </small>
										    </div>
                            				<div className="w-100 mt-2">
										          <input
										            type="tel"
										            name="cvc"
										            placeholder="CVC"
										            value={cvc}
										            onChange={e => setCvc(e.target.value)}
										            onFocus={e => setFocus(e.target.name)}
										            className="form-control"
										            ref={register({
										                required: 'CVC is required',
										               
										              })}
										            maxLength="3"
										          />
										          <small className="text-danger">{errors.cvc && errors.cvc.message}</small>
										    </div>
										</Col>

						            		</Fragment>

						            	: <p className="text-center mx-auto mt-4">You'll be able to give the payment to our staff during the scheduled booking.</p>}

                            		</Row>
                            		<button className="btnSignUp btn btn-success mt-3" type="submit">
						                Submit
						              </button>
								</form>

                    </Col>

                    </Row>

                </div>
                <Modal show={show} onHide={handleClose}>
	        <Modal.Header closeButton>
	          <Modal.Title>Booking Confirmation</Modal.Title>
	        </Modal.Header>
	        <Modal.Body>Are you sure you want to book?</Modal.Body>
	        <Modal.Footer>
	          <Button variant="secondary" onClick={handleClose}>
	            Cancel
	          </Button>
	          <Button variant="danger" onClick={handleBook}>
	            Book
	          </Button>
	        </Modal.Footer>
	      </Modal>
			</Container>
			<style jsx>{`
				.react-datepicker-wrapper{
					display: block !important;
				}
			@media only screen and (max-width: 767px){
					.services{
						width: 100% !important;
						font-size: 13px;
					}
				}
			`}</style>
		</Fragment>
	)
}


export default Checkout;

