import React, { useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Row, Col, Image, Container, CardGroup, Card, Modal, Form } from 'react-bootstrap'
import Link from 'next/link';
import { useForm } from "react-hook-form";
import cookie from 'js-cookie'
import Router from 'next/router'
import axios from 'axios';
import apiUrl from '../../api'
import jwt from 'jwt-decode';

import Default from '../../layouts/default';

const Registration = () => {

const { handleSubmit, register, errors, watch } = useForm();

const [selectedIndi, setSelectedIndi] = useState(false);
const [selectedGroup, setSelectedGroup] = useState(false);
const [membershipType, setMembershipType] = useState(null);
const [token, setToken] = useState(null);
const [user, setUser] = useState({});
const [sessionDetails, setSessionDetails] = useState(false);
const [membershipInput, setMembershipInput] = useState({});


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


 
useEffect(()=>{
   
  const cookieToken = cookie.get("token");
  if(cookieToken){
    const accessToken = JSON.parse(cookieToken);
    setToken(accessToken.access);

    axios.get(`${apiUrl}/accounts`, {
      headers: {"Authorization": `Bearer ${accessToken.access}`}
    }).then(res=>{
      setUser(res.data[0]);
    })
  }

  const sessionMembershipUser = sessionStorage.getItem("membership");
  if(sessionMembershipUser){
    setSessionDetails(true)
    const membershipDetails = JSON.parse(sessionMembershipUser);
    setMembershipInput(membershipDetails);
  }

  const plan = cookie.get("plan");
  if(plan==="individual"){
    setSelectedIndi(true);
    setMembershipType(1);
  }else{
    setSelectedGroup(true);
    setMembershipType(3);
  }

}, [])


const handleActivateIndi = () => {
	setSelectedGroup(false)
	setSelectedIndi(true)
}
const handleActivateGroup = () => {
	setSelectedIndi(false)
	setSelectedGroup(true)
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
              {selectedIndi ? <Individual selectedIndi={selectedIndi}
                token={token}
                user={user}
                membershipInput={membershipInput}
                sessionDetails={sessionDetails}
              /> : ""}
              {selectedGroup ? <Group selectedGroup={selectedGroup} token={token}
                user={user}
                membershipInput={membershipInput}
                sessionDetails={sessionDetails}
                 /> : ""}
			</Container>
		</Default>

	)
}

function Individual({token, user, membershipInput, sessionDetails}){


const { handleSubmit, register, errors, watch } = useForm();

const onSubmit = (values) => {

  if(!token){
    Router.push('/login');
    sessionStorage.setItem("membership", JSON.stringify(values))
  }else{
    if(values.plan == 1 && Object.keys(errors).length === 0 ){
      axios.post(`${apiUrl}/memberships/`, {owner: values.id, membership_type: values.plan}, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }).then(res=>{
        console.log(res)
      })
    }else if(values.plan == 2 && Object.keys(errors).length === 0){
      axios.post(`${apiUrl}/memberships/`, {owner: values.id, membership_type: values.plan}, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(res=>{
        console.log(res)
      })
    }
  }
}

return(
	<Col lg={12} md={12} sm={12} xs={12} className="mx-0 px-0 mb-4 d-flex flex-column align-items-center">
		<form onSubmit={handleSubmit(onSubmit)}>     
              <div style={{ marginTop: "15px" }} className="w-100">
              <Form.Control as="select" name="plan" custom ref={register}>
                <option value="1">1 Year Individual Plan</option>
			          <option value="2">2 Years Individual Plan</option>
			        </Form.Control>
			  </div>
			<Col lg={12} md={12} sm={12} xs={12} className="mx-0 px-0 d-flex align-items-center">
              <input defaultValue={user.id} ref={register} name="id" hidden />
              <div style={{ marginTop: "15px" }} className="w-100 mr-2">
              <input
              name="firstname"
              className="form-control txtEmail"
              ref={register({
                required: 'First name is required',
              })}
              placeholder="First Name"

              defaultValue={sessionDetails ? membershipInput.firstname : user.first_name}
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
              defaultValue={sessionDetails ? membershipInput.lastname : user.last_name}
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
              defaultValue={sessionDetails ? membershipInput.email : user.email}
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
              defaultValue={sessionDetails ? membershipInput.mobilenumber : user.mobile_number}
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
              defaultValue={sessionDetails ? membershipInput.landlinenumber : user.landline_number}
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
              defaultValue={sessionDetails ? membershipInput.address : user.address}
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
              defaultValue={sessionDetails ? membershipInput.city : user.city}
              placeholder="City/State"
            />
            <small className="text-danger">{errors.city && errors.city.message}</small>
            </div>

            <div className="divEmail" style={{ marginTop: "15px" }} className="w-100">
              <input
              name="promocode"
              className="form-control"
              placeholder="Promo Code"
              defaultValue={sessionDetails ? membershipInput.promocode : ""}
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

function Group({token, user, membershipInput, sessionDetails}){

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
	if(!token){
    Router.push('/login');
    sessionStorage.setItem("membership", JSON.stringify(values))
  }else{
    if(values.plan == 3 && Object.keys(errors).length === 0 ){
      axios.post(`${apiUrl}/memberships/`, {owner: values.id, membership_type: values.plan, members: values.token}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      }).then(res=>{
        console.log(res)
      })
    }else if(values.plan == 4 && Object.keys(errors).length === 0){
      axios.post(`${apiUrl}/memberships/`, {owner: values.id, membership_type: values.plan}, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      }).then(res=>{
        console.log(res)
      })
    }
  }
}



return(
	<Fragment>
	<Col lg={12} md={12} sm={12} xs={12} className="mx-0 px-0 mb-4 d-flex flex-column align-items-center">
		<form onSubmit={handleSubmit(onSubmit)}>     
              <div style={{border: "1px solid black", padding: "15px 10px"}}> 
              <h2>Primary Member</h2>
              <div style={{ marginTop: "15px" }} className="w-100">
              <Form.Control as="select" name="plan" custom ref={register}>
			          <option value="3">1 Year Group Plan</option>
                <option value="4">2 Years Group Plan</option>
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
              defaultValue={sessionDetails ? membershipInput.firstname : user.first_name}

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
              defaultValue={sessionDetails ? membershipInput.lastname : user.last_name}

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
              defaultValue={sessionDetails ? membershipInput.email : user.email}

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
              defaultValue={sessionDetails ? membershipInput.mobilenumber : user.mobile_number}
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
              defaultValue={token ? user.landline_number : ""}
              defaultValue={sessionDetails ? membershipInput.landlinenumber : user.landline_number}
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
              defaultValue={sessionDetails ? membershipInput.address : user.address}

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
              defaultValue={sessionDetails ? membershipInput.city : user.city}

            />
            <small className="text-danger">{errors.city && errors.city.message}</small>
            </div>


            <div className="divEmail" style={{ marginTop: "15px" }} className="w-100">
              <input
              name="promocode"
              className="form-control"
              placeholder="Promo Code"
              ref={register()}
              defaultValue={sessionDetails ? membershipInput.promocode : ""}

            />
            <small className="text-danger">{errors.promocode && errors.promocode.message}</small>
            </div>
           </div>
           <AddMember 
           	indexes={indexes}
           	counter={counter}
            removeFriend={removeFriend}
            errors={errors}
            register={register}
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

function AddMember({counter, indexes, removeFriend, errors, register }){


	return(
		<Fragment>
      {indexes.map(index => {
        const fieldName = `members[${index}]`;
        return (
          <Fragment key={index}>

          <div style={{border: "1px solid black", padding: "15px 10px", marginTop: "15px"}}> 
          <h3>Member {index + 1}</h3>
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