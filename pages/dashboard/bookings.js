import React, { useState, useEffect, Fragment } from 'react';
import apiUrl from '../../api'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Tooltip from "react-bootstrap/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Row, Col, OverlayTrigger, Modal, Button } from "react-bootstrap";
import Link from 'next/link';
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import Head from "next/head";
import Loader from "../../components/loader";
import Bottom from "../../components/bottom";
import { statusColor } from '../../utils/layout'
import Moment from 'react-moment';


const payments = () => {

    // function loadwindows() {
    //     const element = document.querySelector('#load')
    //     element.classList.add('animated', 'fadeOut')
    //     $('loader').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animation end', document.getElementById('load').setAttribute('style', 'display: none !important'));
    //     var rowCount = $('#myTable tr').length;
    //     rowCount = rowCount - 1;
    //     $('.pNumber').html(rowCount + " " + "entries");
    // }
  const key = "w99mOq91P6DlGBpjy4T5"
  const [modalShow, setModalShow] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [id, setId] = useState(null);
    useEffect(()=>{
      axios.get(`${apiUrl}/bookings/?access_key=${key}`)
      .then(res=>{
        setBookings(res.data);
      })
    }, [])



    // const memberships = [{ 'name': 'Alfon Labadan', 'items': 'Booking - Doctor on Call', 'date': 'June 12, 2019', status: 'Paid' },
    // { 'name': 'Eskye Custodio', 'items': 'Booking - Doctor on Call', 'date': 'June 12, 2019', status: 'Failed' },
    // { 'name': 'Leo Sanico', 'items': 'Booking - Book A Nurse', 'date': 'March 18, 2019', status: 'Pending' },
    // { 'name': 'Nathan Nakar', 'items': 'Booking - Doctor on Call', 'date': 'December 24, 2019', status: 'Pending' }]

    var filterState = 1;
   function btnFilterPaid() {
    if (filterState == 1) {
      $('table tr td:nth-child(4)').each(function () {
        $(this).text() == 'Paid' && $(this).parent().find('td').css('display', 'table-cell');
      });
      $('.btnPaid').css('backgroundColor', '#3b3b66');
      $('.btnPaid').css('color', 'white');
      $('.btnPaid').css('border', '2px solid white');
      $('.btnPaid').css('color', 'white');
      filterState = 0;
    }
    else {
      $('table tr td:nth-child(4)').each(function () {
        $(this).text() == 'Paid' && $(this).parent().find('td').css('display', 'none');
      });
      $('.btnPaid').css('backgroundColor', 'white');
      $('.btnPaid').css('color', '#3b3b66');
      $('.btnPaid').css('border', '2px solid #3b3b66');
      $('.btnPaid').css('color', '#3b3b66');
      filterState = 1;
    }
  }

  function btnFilterPending() {
    if (filterState == 1) {
      $('table tr td:nth-child(4)').each(function () {
        $(this).text() == 'Pending' && $(this).parent().find('td').css('display', 'table-cell');
      });
      $('.btnPending').css('backgroundColor', '#3b3b66');
      $('.btnPending').css('color', 'white');
      $('.btnPending').css('border', '2px solid white');
      $('.btnPending').css('color', 'white');
      filterState = 0;
    }
    else {
      $('table tr td:nth-child(4)').each(function () {
        $(this).text() == 'Pending' && $(this).parent().find('td').css('display', 'none');
      });
      $('.btnPending').css('backgroundColor', 'white');
      $('.btnPending').css('color', '#3b3b66');
      $('.btnPending').css('border', '2px solid #3b3b66');
      $('.btnPending').css('color', '#3b3b66');
      filterState = 1;
    }
  }

  function btnFilterFailed() {
    if (filterState == 1) {
      $('table tr td:nth-child(4)').each(function () {
        $(this).text() == 'Failed' && $(this).parent().find('td').css('display', 'table-cell');
      });
      $('.btnFailed').css('backgroundColor', '#3b3b66');
      $('.btnFailed').css('color', 'white');
      $('.btnFailed').css('border', '2px solid white');
      $('.btnFailed').css('color', 'white');
      filterState = 0;
    }
    else {
      $('table tr td:nth-child(4)').each(function () {
        $(this).text() == 'Failed' && $(this).parent().find('td').css('display', 'none');
      });
      $('.btnFailed').css('backgroundColor', 'white');
      $('.btnFailed').css('color', '#3b3b66');
      $('.btnFailed').css('border', '2px solid #3b3b66');
      $('.btnFailed').css('color', '#3b3b66');
      filterState = 1;
    }
  }

  const handleOpenBookingDetails = (e) => {
    setModalShow(true);
    setId(e);
  }

    return (

        <Fragment>
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossOrigin="anonymous"
                />
                <script
                    src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
                    crossOrigin="anonymous"
                ></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                    crossOrigin="anonymous"
                ></script>
                <script
                    src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
                    crossOrigin="anonymous"
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
            <Container fluid={true} style={{ zIndex: "-1", paddingLeft: "90px" }} className="colMain">
                <Row style={{ paddingTop: "100px" }}>
                    <Col lg={6} md={6}>
                        <p className="pNav">
                            Bookings<span className="pNumber"><span>{bookings.length}</span> entries</span>
                        </p>
                    </Col>
                    <Col lg={6} md={6}>
                        <button className="float-right btnAdd">&#x2b;&nbsp;Add Bookings</button>
                    </Col>
                </Row>
                <Row style={{ marginTop: "-10px" }} className="rowTag">
                    <Col lg={12}>
                        <button className="btnTag">
                            <img
                                src="../Image/filter.png"
                                className="img-fluid"
                                style={{ width: "15px" }}
                            ></img>
                        </button>
                        <button className="btnTagList btnPaid" onClick = {btnFilterPaid}>
                            Paid
            <img
                                src="../Image/close.png"
                                style={{ width: "10px", marginLeft: "10px" }}
                            ></img>
                        </button>
                        <button className="btnTagList btnFailed" onClick = {btnFilterFailed}>
                            Failed
            <img
                                src="../Image/close.png"
                                style={{ width: "10px", marginLeft: "10px" }}
                            ></img>
                        </button>
                        <button className="btnTagList btnPending" onClick = {btnFilterPending}>
                            Pending
            <img
                                src="../Image/close.png"
                                style={{ width: "10px", marginLeft: "10px" }}
                            ></img>
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
                                    <th>Book Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking, index) => {
                                    return (
                                        <tr key={booking.id} onClick={()=>handleOpenBookingDetails(booking.id)}>
                                            <td data-column="Full Name">{booking.first_name != "" ? booking.first_name : "N/A"} {booking.last_name != "" ? booking.last_name : "N/A"}</td>
                                            <td data-column="Items">{
                                                booking.services_detail.map(service=>{
                                                  return(
                                                    <p key={service.id}>{service.title}</p>
                                                  )
                                                })
                                            }</td>
                                            <td data-column="Date"><Moment format="LL">{booking.booking_datetime}</Moment></td>
                                            <td data-column="Status" className={statusColor(booking.payment_status)}>{booking.payment_status}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
            <Modal
              show={modalShow}
              dialogClassName="mx-0 w-100"
              onHide={() => setModalShow(false)}
            >
              {bookings.map(booking=>{
                return(
                  <Fragment key={booking.id}>
                    {booking.id == id ?
                      <Fragment>
                        <Modal.Header closeButton>
                        <Modal.Title className="w-100">
                        <Row className="show-grid">
                          <Col lg={6} md={6} sm={8} xs={8} className="text-left">
                              <p>{booking.first_name} {booking.last_name}</p>
                          </Col>
                          <Col lg={6} md={6} sm={4} xs={4} className="text-right">
                              <p className={statusColor(booking.payment_status)}>{booking.payment_status}</p>
                          </Col>
                        </Row>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="pt-0">
                        <Row className="show-grid">
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left">
                              <p className="mb-0">TOTAL AMOUNT:</p>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left pl-0">
                              <p>&#8369;{booking.total_amount}</p>
                          </Col>
                        </Row>

                        <Row className="show-grid">
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left">
                                <p className="mb-0">ITEM(S): </p>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left pl-0">
                                <ul className="px-0">
                                  {
                                booking.services_detail.map((service, index)=>{
                                      return(
                                        <li key={service.id} className="list-unstyled">{service.title}</li>
                                      )
                                    })
                                }
                                </ul>
                              </Col>
                        </Row>

                        <Row className="show-grid">
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left">
                              <p className="mb-0">BOOKING DATE:</p>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left pl-0">
                              <p><Moment format="LL">{booking.booking_datetime}</Moment></p>
                          </Col>
                        </Row>

                        <Row className="show-grid">
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left">
                              <p className="mb-0">ADDRESS:</p>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left pl-0">
                              <p>{booking.address}</p>
                          </Col>
                        </Row>

                        <Row className="show-grid">
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left">
                              <p className="mb-0">MOBILE NUMBER:</p>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left pl-0">
                              <p>{booking.phone_number}</p>
                            </Col>
                        </Row>

                        
                        
                        
                      </Modal.Body>
                      </Fragment>

                     : ""}
                </Fragment>
                )
              })}
              
                <Modal.Footer>
                  <Button onClick={()=>setModalShow(false)} className="pr-5 mr-2 text-center">Close</Button>
                </Modal.Footer>

            </Modal>
            <Bottom></Bottom>
            <style jsx>{`
                  @media only screen and (max-width: 420px){
                      .modal-dialog{
                      max-width: 100% !important; 
                    }
                  }
                `}</style>
        </Fragment>
    )
};


export default payments;
