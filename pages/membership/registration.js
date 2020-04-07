import React, { useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Row, Col, Image, Container, CardGroup, Card, Modal, Form } from 'react-bootstrap'
import Link from 'next/link';
import { useForm } from "react-hook-form";

import Default from '../../layouts/default';

const Registration = () => {

const { handleSubmit, register, errors, watch } = useForm();

const [selectedIndi, setSelectedIndi] = useState(true);
const [selectedGroup, setSelectedGroup] = useState(false);

const styleIndi = {
	border: "1px solid lightgray",
	borderRadius: "0 100px 100px 0",
	minHeight: "50px",
	backgroundColor: selectedIndi ? "lightgray" : "#d1604e",
	color: selectedIndi ? "#d1604e" : "white"
}
const styleGroup = {

	border: "1px solid lightgray",
	borderRadius: "100px 0 0 100px",
	minHeight: "50px",
	backgroundColor: selectedGroup ? "lightgray" : "#d1604e",
	color: selectedGroup ? "#d1604e" : "white"
}

const handleActivateIndi = () => {
	setSelectedGroup(false)
	setSelectedIndi(true)
}
const handleActivateGroup = () => {
	setSelectedIndi(false)
	setSelectedGroup(true)
}

const onSubmit = (values) => {
	console.log(values)
}
	return(
		<Default>
			<Container fluid className="px-0">
					<Jumbotron>
						<h1 style={{paddingTop: "50px"}}>Membership Form</h1>
						<Container>
				<Row className="show-grid">
	    			<Col lg={6} md={6} sm={6} xs={6} className="mx-0 px-0 pt-3">
	            		<Button onClick={handleActivateIndi} className="btn-danger d-flex flex-column align-items-center justify-content-center w-75 float-right" style={styleGroup}>
	            			INDIVIDUAL
	              		</Button>
	            	</Col>
	    			<Col lg={6} md={6} sm={6} xs={6} className="mx-0 px-0 pt-3">
	            		<Button onClick={handleActivateGroup} className="btn-danger d-flex flex-column align-items-center justify-content-center w-75" style={styleIndi}>
	              			GROUP
	              		</Button>
	            	</Col>
            	</Row>
						</Container>
					</Jumbotron>
			</Container>

			<Container style={{minHeight: "80vh"}}>
              {selectedIndi ? <Individual /> : ""}
              {selectedGroup ? <Group /> : ""}
			</Container>
		</Default>

	)
}

function Individual(){


const { handleSubmit, register, errors, watch } = useForm();

const onSubmit = (values) => {
	console.log(values)
}

return(
	<Col lg={12} md={12} sm={12} xs={12} className="mx-0 px-0 mb-4 d-flex flex-column align-items-center">
		<form onSubmit={handleSubmit(onSubmit)}>     
              <div style={{ marginTop: "15px" }} className="w-100">
              <Form.Control as="select" name="year" custom ref={register}>
			      <option value="1">1</option>
			      <option value="2">2</option>
			    </Form.Control>
			  </div>
			<Col lg={12} md={12} sm={12} xs={12} className="mx-0 px-0 d-flex align-items-center">
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
           	<small className="text-right">Note: This will be used to identify your membership</small>

           	<Col lg={12} md={12} sm={12} xs={12} className="mx-0 px-0 d-flex align-items-center">
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

            <div className="divEmail" style={{ marginTop: "15px" }} className="w-100 ml-2">
              <input
              name="landlinenumber"
              className="form-control"
              ref={register({
                required: 'Landline number is required',
              })}
              placeholder="Landline Number"
            />
            <small className="text-danger">{errors.landlinenumber && errors.landlinenumber.message}</small>
            </div>
            </Col>

            <div className="divEmail" style={{ marginTop: "15px" }} className="w-100">
              <input
              name="address"
              className="form-control"
              ref={register({
                required: 'Address is required',
              })}
              placeholder="Address"
            />
            <small className="text-danger">{errors.address && errors.address.message}</small>
            </div>

            <div className="divEmail" style={{ marginTop: "15px" }} className="w-100">
              <input
              name="city"
              className="form-control"
              ref={register({
                required: 'City/State is required',
              })}
              placeholder="City/State"
            />
            <small className="text-danger">{errors.city && errors.city.message}</small>
            </div>

            <div className="divEmail" style={{ marginTop: "15px" }} className="w-100">
              <input
              name="promocodde"
              className="form-control"
              placeholder="Promo Code"
            />
            <small className="text-danger">{errors.promocodde && errors.promocodde.message}</small>
            </div>

            <div className="divFooter d-flex justify-content-center">
              <button className="btnSignUp btn btn-success mt-3" type="submit" style={{width: "250px", height: "70px", borderRadius: "100px", fontSize: "23px"}}>
                Continue to Payment
              </button>
            </div>
    </form>
     </Col>
)
}

function Group(){

const [indexes, setIndexes] = useState([]);
const [counter, setCounter] = useState(0);

const { handleSubmit, register, errors, watch } = useForm();


const handleAddMember = () => {
    setIndexes(prevIndexes => [...prevIndexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeFriend = index => () => {
    setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    setCounter(prevCounter => prevCounter - 1);
  };

  const clearFriends = () => {
    setIndexes([]);
  };

const onSubmit = (values) => {
	console.log(values)
}


return(
	<Fragment>
	<Col lg={12} md={12} sm={12} xs={12} className="mx-0 px-0 mb-4 d-flex flex-column align-items-center">
		<form onSubmit={handleSubmit(onSubmit)}>     
              <div style={{border: "1px solid black", padding: "15px 10px"}}> 
              <div style={{ marginTop: "15px" }} className="w-100">
              <Form.Control as="select" name="year" custom ref={register}>
			      <option value="1">1</option>
			      <option value="2">2</option>
			    </Form.Control>
			  </div>
			
			<Col lg={12} md={12} sm={12} xs={12} className="mx-0 px-0 d-flex align-items-center">
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
           	<small className="text-right">Note: This will be used to identify your membership</small>

           	<Col lg={12} md={12} sm={12} xs={12} className="mx-0 px-0 d-flex align-items-center">
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

            <div className="divEmail" style={{ marginTop: "15px" }} className="w-100 ml-2">
              <input
              name="landlinenumber"
              className="form-control"
              ref={register({
                required: 'Landline number is required',
              })}
              placeholder="Landline Number"
            />
            <small className="text-danger">{errors.landlinenumber && errors.landlinenumber.message}</small>
            </div>
            </Col>

            <div className="divEmail" style={{ marginTop: "15px" }} className="w-100">
              <input
              name="address"
              className="form-control"
              ref={register({
                required: 'Address is required',
              })}
              placeholder="Address"
            />
            <small className="text-danger">{errors.address && errors.address.message}</small>
            </div>

            <div className="divEmail" style={{ marginTop: "15px" }} className="w-100">
              <input
              name="city"
              className="form-control"
              ref={register({
                required: 'City/State is required',
              })}
              placeholder="City/State"
            />
            <small className="text-danger">{errors.city && errors.city.message}</small>
            </div>


            <div className="divEmail" style={{ marginTop: "15px" }} className="w-100">
              <input
              name="promocodde"
              className="form-control"
              placeholder="Promo Code"
              ref={register()}
            />
            <small className="text-danger">{errors.promocodde && errors.promocodde.message}</small>
            </div>
           </div>
           <AddMember 
           	indexes={indexes}
           	counter={counter}
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
            removeFriend={removeFriend}
           />


            <div className="divFooter d-flex flex-column justify-content-center align-items-center">
              <button className="btnSignUp btn btn-danger mt-3" type="button" onClick={handleAddMember} style={{width: "150px", height: "40px", borderRadius: "100px", fontSize: "18px"}}>
                Add Member
              </button>
              
              <button className="btnSignUp btn btn-success mt-3" type="submit" style={{width: "250px", height: "70px", borderRadius: "100px", fontSize: "23px"}}>
                Continue to Payment
              </button>
            </div>

    </form>
     </Col>
    </Fragment>
)
}

function AddMember({counter, indexes, handleSubmit, register, errors, removeFriend}){
console.log(indexes)

	return(
		<Fragment>
      {indexes.map(index => {
        const fieldName = `members[${index}]`;
        return (
          <Fragment key={index}>

          <div style={{border: "1px solid black", padding: "15px 10px"}}> 

          <Col lg={12} md={12} sm={12} xs={12} className="mx-0 px-0 d-flex align-items-center">
              <div style={{ marginTop: "15px" }} className="w-100 mr-2">
              <input
              name={`${fieldName}.firstname`}
              className="form-control txtEmail"
              ref={register({
                required: 'First name is required',
              })}
              placeholder="First Name"
            />
            <small className="text-danger">{errors.firstname && errors.firstname.message}</small>
            </div>

           
            <div className="divEmail" style={{ marginTop: "15px" }} className="w-100 ml-2">
              <input
              name={`${fieldName}.lastname`}
              className="form-control txtEmail"
              ref={register({
                required: 'Last name is required',
              })}
              placeholder="Last Name"
            />
            <small className="text-danger">{errors.lastname && errors.lastname.message}</small>
            </div>
            </Col>
            
            <div className="divEmail" style={{ marginTop: "15px" }} className="w-100">
              <input
              name={`${fieldName}.email`}
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
            <small className="text-right">Note: This will be used to identify your membership</small>

            <Col lg={12} md={12} sm={12} xs={12} className="mx-0 px-0 d-flex align-items-center">
               <div className="divEmail" style={{ marginTop: "15px" }} className="w-100 mr-2">
              <input
              name={`${fieldName}.mobilenumber`}
              className="form-control"
              ref={register({
                required: 'Mobile number is required',
              })}
              placeholder="Mobile Number"
            />
            <small className="text-danger">{errors.mobilenumber && errors.mobilenumber.message}</small>
            </div>

            <div className="divEmail" style={{ marginTop: "15px" }} className="w-100 ml-2">
              <input
              name={`${fieldName}.landlinenumber`}
              className="form-control"
              ref={register({
                required: 'Landline number is required',
              })}
              placeholder="Landline Number"
            />
            <small className="text-danger">{errors.landlinenumber && errors.landlinenumber.message}</small>
            </div>
            </Col>

            <div className="divEmail" style={{ marginTop: "15px" }} className="w-100">
              <input
              name={`${fieldName}.address`}
              className="form-control"
              ref={register({
                required: 'Address is required',
              })}
              placeholder="Address"
            />
            <small className="text-danger">{errors.address && errors.address.message}</small>
            </div>

            <div className="divEmail" style={{ marginTop: "15px" }} className="w-100">
              <input
              name={`${fieldName}.city`}
              className="form-control"
              ref={register({
                required: 'City/State is required',
              })}
              placeholder="City/State"
            />
            <small className="text-danger">{errors.city && errors.city.message}</small>
            </div>
            <button type="button" className="btn btn-secondary mt-2 mr-auto" onClick={removeFriend(index)}>
              Remove
            </button>
            </div>
          </Fragment>
        );
      })}
		</Fragment>
	)
}

export default Registration;