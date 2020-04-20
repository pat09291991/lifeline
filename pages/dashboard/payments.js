import React, { useState, useEffect, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Tooltip from "react-bootstrap/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Row, Col, OverlayTrigger, Modal, Button } from "react-bootstrap";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import Head from "next/head";
import { statusColor } from '../../utils/layout'
import axios from 'axios';
import apiUrl from '../../api'
import Moment from 'react-moment';
import Link from "next/link";
import cookie from 'js-cookie'
import { withAuthSync } from '../../utils/auth'


const payments = () => {

const [payments, setPayments] = useState([]);
const [filteredPayments, setFilteredPayments] = useState([]);
const [services, setServices] = useState([])
const [modalShow, setModalShow] = useState(false);
const [show, setShow] = useState(false);

const [id, setID] = useState(null)
useEffect(()=>{
  const cookieToken = cookie.get("token");
        if(cookieToken){
          const accessToken = JSON.parse(cookieToken);
          const token = accessToken.access;
          console.log(token)

          axios.get(`${apiUrl}/payments`, {
              headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + token
              }
            }).then(res=>{
              setPayments(res.data);
              setFilteredPayments(res.data);
            })
        }

  axios.get(`${apiUrl}/services`)
    .then(response=>{
      setServices(response.data);
    })
}, [])

const [paidFilter, setPaidFilter] = useState(true);
    const [pendingFilter, setPendingFilter] = useState(true);
    const [failedFilter, setFailedFilter] = useState(true);

    const btnFilterPaid = () =>{
       if(paidFilter){
        setPaidFilter(false);
        if(pendingFilter && failedFilter){
            const _payments = payments.filter(payment=>{
            if(payment.status != "Paid")
            return payment;
          })
          setFilteredPayments([..._payments]);

        }else if(!pendingFilter && failedFilter){
            const _payments = payments.filter(payment=>{
            if(payment.status == "Failed")
            return payment;
          })
          setFilteredPayments([..._payments]);
        }else if(pendingFilter && !failedFilter){
            const _payments = payments.filter(payment=>{
            if(payment.status == "Pending")
            return payment;
          })
          setFilteredPayments([..._payments]);
        }else if(!pendingFilter && !failedFilter){
            setFilteredPayments([])
        }
      }else{
       setPaidFilter(true);
      //  $('table tr td:nth-child(4)').each(function () {
      //   $(this).text() == 'Paid' && $(this).parent().find('td').css('display', 'none');
      // });
        if(pendingFilter && failedFilter){
         setFilteredPayments(payments);
        }else if(!pendingFilter && failedFilter){
            const _payments = payments.filter(payment=>{
            if(payment.status != "Pending")
            return payment;
          })
          setFilteredPayments([..._payments]);
        }else if(pendingFilter && !failedFilter){
            const _payments = payments.filter(payment=>{
            if(payment.status != "Failed")
            return payment;
          })
          setFilteredPayments([..._payments]);
        }else if(!pendingFilter && !failedFilter){
            const _payments = payments.filter(payment=>{
            if(payment.status == "Paid")
            return payment;
          })
          setFilteredPayments([..._payments]);
        }
      }
    }

    const btnFilterPending = () => {
      if(pendingFilter){
        setPendingFilter(false);
        
       if(paidFilter && failedFilter){
            const _payments = payments.filter(payment=>{
            if(payment.status != "Pending")
            return payment;
          })
          setFilteredPayments([..._payments]);

        }else if(!paidFilter && failedFilter){
            const _payments = payments.map(payment=>{
            if(payment.status == "Failed")
            return payment;
          })
          setFilteredPayments([..._payments]);
        }else if(paidFilter && !failedFilter){
            const _payments = payments.filter(payment=>{
            if(payment.status == "Paid")
            return payment;
          })
          setFilteredPayments([..._payments]);
        }else if(!paidFilter && !failedFilter){
            setFilteredPayments([])
        }

      }else{
        setPendingFilter(true);
        if(paidFilter && failedFilter){

         setFilteredPayments(payments);
        }else if(!paidFilter && failedFilter){
            const _payments = payments.filter(payment=>{
            if(payment.status != "Paid")
            return payment;
          })
          setFilteredPayments([..._payments]);
        }else if(paidFilter && !failedFilter){
            const _payments = payments.filter(payment=>{
            if(payment.status != "Failed")
            return payment;
          })
          setFilteredPayments([..._payments]);
        }else if(!paidFilter && !failedFilter){
            const _payments = payments.filter(payment=>{
            if(payment.status == "Pending")
            return payment;

          })
          setFilteredPayments([..._payments]);
        }
      }
    }

    const btnFilterFailed = () => {
      if(failedFilter){
        setFailedFilter(false);
      
        if(paidFilter && pendingFilter){
            const _payments = payments.filter(payment=>{
            if(payment.status != "Failed")
            return payment;
          })
          setFilteredPayments([..._payments]);
        }else if(!paidFilter && pendingFilter){
            const _payments = payments.filter(payment=>{
            if(payment.status == "Pending")
            return payment;
          })
          setFilteredPayments([..._payments]);
        }else if(paidFilter && !pendingFilter){
            const _payments = payments.filter(payment=>{
            if(payment.status == "Paid")
            return payment;
          })
          setFilteredPayments([..._payments]);
        }else if(!paidFilter && !pendingFilter){
            setFilteredPayments([])
        }

      }else{
        setFailedFilter(true);

        if(paidFilter && pendingFilter){
         setFilteredPayments(payments);
        }else if(!paidFilter && pendingFilter){
            const _payments = payments.filter(payment=>{
            if(payment.status != "Paid")
            return payment;
          })
          setFilteredPayments([..._payments]);
        }else if(paidFilter && !pendingFilter){
            const _payments = payments.filter(payment=>{
            if(payment.status != "Pending")
            return payment;
          })
          setFilteredPayments([..._payments]);
        }else if(!paidFilter && !pendingFilter){
            const _payments = payments.filter(payment=>{
            if(payment.status == "Failed")
            return payment;
          })
          setFilteredPayments([..._payments]);
        }
    }
    }

    const paidStyle={
      color: paidFilter ? "white" : "#3b3b66",
      border: paidFilter ? '2px solid white' : '2px solid #3b3b66',
      backgroundColor: paidFilter ? '#3b3b66' : 'white'
    }

    const pendingStyle={
      color: pendingFilter ? "white" : "#3b3b66",
      border: pendingFilter ? '2px solid white' : '2px solid #3b3b66',
      backgroundColor: pendingFilter ? '#3b3b66' : 'white'
    }

    const failedStyle={
      color: failedFilter ? "white" : "#3b3b66",
      border: failedFilter ? '2px solid white' : '2px solid #3b3b66',
      backgroundColor: failedFilter ? '#3b3b66' : 'white'
    }
    

const handleOpenDetails = (id) =>{
  setShow(true);
  setID(id);
}
 
    return (

        <div>
            <head>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossorigin="anonymous"
                />
                <script
                    src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
                    crossorigin="anonymous"
                ></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                    crossorigin="anonymous"
                ></script>
                <script
                    src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
                    crossorigin="anonymous"
                ></script>
                <link rel="stylesheet" type="text/css" href="../Css/dashboard.css" />
                <script type="text/javascript" src="../Script/myScript.js"></script>
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div className="container-fluid" id="payment">
                <Row style={{ paddingTop: "100px" }}>
                    <Col lg={6}>
                        <p className="pNav pNav1">
                          Payments<span className="pNumber">{filteredPayments[0] == undefined ? 0 : filteredPayments.length} entries</span>
                        </p>
                    </Col>
                    
                </Row>
                <Row style={{ marginTop: "-10px" }}>
                    <Col lg={12}>
                        <button className="btnTag">
                            <img
                                src="../Image/filter.png"
                                className="img-fluid"
                                style={{ width: "15px" }}
                            ></img>
                        </button>
                        <button className="btnTagList btnPaid" style={paidStyle} onClick = {btnFilterPaid}>
                            Paid {paidFilter ? " X " : " O "}
                        </button>
                        <button className="btnTagList btnFailed" onClick = {btnFilterFailed} style={failedStyle}>
                            Failed {failedFilter ? " X " : " O "}
                        </button>
                        <button className="btnTagList btnPending" onClick = {btnFilterPending} style={pendingStyle}>
                            Pending {pendingFilter ? " X " : " O "}
                        </button>
                    </Col>
                </Row>
                
                <Row style={{ marginTop: "40px" }}>
                    <Col lg={12}>
                        <table id="myTable">
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Items</th>
                                    <th>Payment Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPayments.map((payment, index) => {
                                    return (
                                      <Fragment>
                                        {payment != undefined ?
                                        <tr key={index} onClick={()=>handleOpenDetails(payment.request_id)}>
                                            <td data-column="Full Name">
                                            {payment.first_name || payment.last_name ? <Fragment>{payment.first_name} {payment.last_name}</Fragment> : "N/A"}
                                            </td>
                                            <td data-column="Items" className="text-capitalize">
                                              {payment.content_type_name}
                                            </td>
                                            <td data-column="Date"><Moment format="LL">{payment.paid_at}</Moment></td>
                                            <td data-column="Status" className={statusColor(payment.status)}>{payment.status}</td>
                                        </tr>
                                        : ""}
                                      </Fragment>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Col>
                </Row>
                
                <Modal show={show}
                  onHide={() => setShow(false)}
                  dialogClassName="mx-0 w-100"
                  >
                  
                  {payments.map(payment=>{
                    return(
                      <Fragment key={payment.payment_object.id}>
                        {payment.request_id == id ?
                          <Fragment>
                            <Modal.Header closeButton>
                              <Modal.Title className="w-100">
                              
                              <Row className="show-grid">
                          <Col lg={6} md={6} sm={8} xs={8} className="text-left">
                              <p>{payment.first_name && payment.last_name ? <Fragment>{payment.first_name} {payment.last_name}</Fragment> : "N/A"}</p>
                          </Col>
                          <Col lg={6} md={6} sm={4} xs={4} className="text-right">
                              <p className={statusColor(payment.status)}>{payment.status}</p>
                          </Col>
                        </Row>
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="mt-0">
                              <p className="font-weight-bolder mt-3 mb-1">PAYMENT</p>
                              
                              <Row>
                                <Col lg={6} md={6} sm={8} xs={8} className="text-left">
                                  <p className="pModalBody">Paid for:</p>
                                </Col>
                                <Col lg={6} md={6} sm={4} xs={4} className="text-left">
                                  <p className="pModalBody text-capitalize">{payment.content_type_name}</p>
                                </Col>
                              </Row>

                              <Row>
                                <Col lg={6} md={6} sm={8} xs={8} className="text-left">
                                  <p className="pModalBody">Price:</p>
                                </Col>
                                <Col lg={6} md={6} sm={4} xs={4} className="text-left">
                                  <p className="pModalBody">{payment.amount}</p>
                                </Col>
                              </Row>

                              <Row>
                                <Col lg={6} md={6} sm={8} xs={8} className="text-left">
                                  <p className="pModalBody">Date of payment:</p>
                                </Col>
                                <Col lg={6} md={6} sm={4} xs={4} className="text-left">
                                  <p className="pModalBody">
                                  <Moment format="LL">{payment.paid_at}</Moment>
                                  </p>
                                </Col>
                              </Row>


                              <p className="font-weight-bolder mt-3 mb-1">DETAILS</p>

                              <Row>
                                <Col lg={6} md={6} sm={8} xs={8} className="text-left">
                                  <p className="pModalBody mb-1">Name:</p>
                                </Col>
                                <Col lg={6} md={6} sm={4} xs={4} className="text-left">
                                  <p className="pModalBody mb-1">
                                  {payment.payment_object.first_name} {payment.payment_object.last_name}
                                  </p>
                                </Col>
                              </Row>
                              {payment.content_type == 9 ?
                               <Row>
                                <Col lg={6} md={6} sm={8} xs={8} className="text-left">
                                  <p className="pModalBody mb-1">Item:</p>
                                </Col>
                                <Col lg={6} md={6} sm={4} xs={4} className="text-left">
                                  <p className="pModalBody mb-1">
                                   {payment.payment_object.membership_type__name}
                                  </p>
                                </Col>
                              </Row>
                              : ""}

                              {payment.content_type == 16 ?
                                <Fragment>
                                <Row>
                                <Col lg={6} md={6} sm={8} xs={8} className="text-left">
                                  <p className="pModalBody mb-1">Service Type:</p>
                                </Col>
                                <Col lg={6} md={6} sm={4} xs={4} className="text-left">
                                  {payment.payment_object.services.map((service, index)=>{
                                    return(
                                      <Fragment key={index}>
                                        {services.map((serve, index)=>{
                                        return(
                                          <p className="mb-1" key={index}>
                                          {service == serve.id ? <Fragment>{serve.title}</Fragment> : ""}
                                          </p>
                                        )
                                      })}
                                      </Fragment>
                                    )
                                  })}
                                </Col>
                              </Row>

                                <Row>
                                <Col lg={6} md={6} sm={8} xs={8} className="text-left">
                                  <p className="pModalBody mb-1">payment Date:</p>
                                </Col>
                                <Col lg={6} md={6} sm={4} xs={4} className="text-left">
                                  <p className="pModalBody mb-1">
                                  <Moment format="LL">{payment.payment_object.payment_datetime}</Moment>
                                  </p>
                                </Col>
                              </Row>

                                  <Row>
                                <Col lg={6} md={6} sm={8} xs={8} className="text-left">
                                  <p className="pModalBody mb-1">Address:</p>
                                </Col>
                                <Col lg={6} md={6} sm={4} xs={4} className="text-left">
                                  <p className="pModalBody mb-1">
                                  {payment.payment_object.address}
                                  </p>
                                </Col>
                              </Row>

                              <Row>
                                <Col lg={6} md={6} sm={8} xs={8} className="text-left">
                                  <p className="pModalBody mb-1">Email:</p>
                                </Col>
                                <Col lg={6} md={6} sm={4} xs={4} className="text-left">
                                  <p className="pModalBody mb-1">
                                  {payment.payment_object.email}
                                  </p>
                                </Col>
                              </Row>

                              <Row>
                                <Col lg={6} md={6} sm={8} xs={8} className="text-left">
                                  <p className="pModalBody mb-1">Phone Number:</p>
                                </Col>
                                <Col lg={6} md={6} sm={4} xs={4} className="text-left">
                                  <p className="pModalBody mb-1">
                                  {payment.payment_object.phone_number}
                                  </p>
                                </Col>
                              </Row>
                                </Fragment>
                              : ""}


                              
                            </Modal.Body>
                          </Fragment>
                          : ""}
                      </Fragment>
                    )
                  })}

                   <Modal.Footer>
                    <Button onClick={()=>setShow(false)} className="pr-5 mr-2 text-center">Close</Button>
                  </Modal.Footer>
                </Modal>
            </div>
            <style jsx>{`
              #payment{
                padding-left: 90px;
                z-index: -1;
              }
              @media only screen and (max-width: 767px){
                #payment{
                  padding-left: 15px !important;
                }
              }
            `}</style>
        </div>
    )
};


export default withAuthSync(payments);
