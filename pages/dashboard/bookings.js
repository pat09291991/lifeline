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
import cookie from 'js-cookie'
import Router from 'next/router'
import { withAuthSync } from '../../utils/auth'


const Bookings = () => {

  const [modalShow, setModalShow] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [id, setId] = useState(null);

  useEffect(()=>{
      const cookieToken = cookie.get("token");
        if(cookieToken){
          const accessToken = JSON.parse(cookieToken);
          const token = accessToken.access;
          console.log(token)

          axios.get(`${apiUrl}/bookings`, {
              headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + token
              }
            }).then(res=>{
              setBookings(res.data);
              setFilteredBookings(res.data);
            })
        }
      
    }, [])


    const [paidFilter, setPaidFilter] = useState(true);
    const [pendingFilter, setPendingFilter] = useState(true);
    const [failedFilter, setFailedFilter] = useState(true);

    const btnFilterPaid = () =>{
       if(paidFilter){
        setPaidFilter(false);
        if(pendingFilter && failedFilter){
            const _bookings = bookings.filter(booking=>{
            if(booking.status != "Paid")
            return booking;
          })
          setFilteredBookings([..._bookings]);

        }else if(!pendingFilter && failedFilter){
            const _bookings = bookings.map(booking=>{
            if(booking.status == "Failed")
            return booking;
          })
          setFilteredBookings([..._bookings]);
        }else if(pendingFilter && !failedFilter){
            const _bookings = bookings.map(booking=>{
            if(booking.status == "Pending")
            return booking;
          })
          setFilteredBookings([..._bookings]);
        }else if(!pendingFilter && !failedFilter){
            setFilteredBookings([])
        }
      }else{
       setPaidFilter(true);
      //  $('table tr td:nth-child(4)').each(function () {
      //   $(this).text() == 'Paid' && $(this).parent().find('td').css('display', 'none');
      // });
        if(pendingFilter && failedFilter){
         setFilteredBookings(bookings);
        }else if(!pendingFilter && failedFilter){
            const _bookings = bookings.filter(booking=>{
            if(booking.status != "Pending")
            return booking;
          })
          setFilteredBookings([..._bookings]);
        }else if(pendingFilter && !failedFilter){
            const _bookings = bookings.filter(booking=>{
            if(booking.status != "Failed")
            return booking;
          })
          setFilteredBookings([..._bookings]);
        }else if(!pendingFilter && !failedFilter){
            const _bookings = bookings.map(booking=>{
            if(booking.status == "Paid")
            return booking;
          })
          setFilteredBookings([..._bookings]);
        }
      }
    }

    const btnFilterPending = () => {
      if(pendingFilter){
        setPendingFilter(false);
        
       if(paidFilter && failedFilter){
            const _bookings = bookings.filter(booking=>{
            if(booking.status != "Pending")
            return booking;
          })
          setFilteredBookings([..._bookings]);

        }else if(!paidFilter && failedFilter){
            const _bookings = bookings.map(booking=>{
            if(booking.status == "Failed")
            return booking;
          })
          setFilteredBookings([..._bookings]);
        }else if(paidFilter && !failedFilter){
            const _bookings = bookings.map(booking=>{
            if(booking.status == "Paid")
            return booking;
          })
          setFilteredBookings([..._bookings]);
        }else if(!paidFilter && !failedFilter){
            setFilteredBookings([])
        }

      }else{
        setPendingFilter(true);
        if(paidFilter && failedFilter){

         setFilteredBookings(bookings);
        }else if(!paidFilter && failedFilter){
            const _bookings = bookings.filter(booking=>{
            if(booking.status != "Paid")
            return booking;
          })
          setFilteredBookings([..._bookings]);
        }else if(paidFilter && !failedFilter){
            const _bookings = bookings.filter(booking=>{
            if(booking.status != "Failed")
            return booking;
          })
          setFilteredBookings([..._bookings]);
        }else if(!paidFilter && !failedFilter){
            const _bookings = bookings.map(booking=>{
            if(booking.status == "Pending")
              console.log(booking);
            return booking;

          })
          setFilteredBookings([..._bookings]);
        }
      }
    }

    const btnFilterFailed = () => {
      if(failedFilter){
        setFailedFilter(false);
      
        if(paidFilter && pendingFilter){
            const _bookings = bookings.filter(booking=>{
            if(booking.status != "Failed")
            return booking;
          })
          setFilteredBookings([..._bookings]);
        }else if(!paidFilter && pendingFilter){
            const _bookings = bookings.map(booking=>{
            if(booking.status == "Pending")
            return booking;
          })
          setFilteredBookings([..._bookings]);
        }else if(paidFilter && !pendingFilter){
            const _bookings = bookings.map(booking=>{
            if(booking.status == "Paid")
            return booking;
          })
          setFilteredBookings([..._bookings]);
        }else if(!paidFilter && !pendingFilter){
            setFilteredBookings([])
        }

      }else{
        setFailedFilter(true);

        if(paidFilter && pendingFilter){
         setFilteredBookings(bookings);
        }else if(!paidFilter && pendingFilter){
            const _bookings = bookings.filter(booking=>{
            if(booking.status != "Paid")
            return booking;
          })
          setFilteredBookings([..._bookings]);
        }else if(paidFilter && !pendingFilter){
            const _bookings = bookings.filter(booking=>{
            if(booking.status != "Pending")
            return booking;
          })
          setFilteredBookings([..._bookings]);
        }else if(!paidFilter && !pendingFilter){
            const _bookings = bookings.map(booking=>{
            if(booking.status == "Failed")
            return booking;
          })
          setFilteredBookings([..._bookings]);
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

  //   var filterState = 1;
  //  function btnFilterPaid() {
  //   if (filterState == 1) {
  //     $('table tr td:nth-child(4)').each(function () {
  //       $(this).text() == 'Paid' && $(this).parent().find('td').css('display', 'table-cell');
  //     });
  //     $('.btnPaid').css('backgroundColor', '#3b3b66');
  //     $('.btnPaid').css('color', 'white');
  //     $('.btnPaid').css('border', '2px solid white');
  //     $('.btnPaid').css('color', 'white');
  //     filterState = 0;
  //   }
  //   else {
  //     $('table tr td:nth-child(4)').each(function () {
  //       $(this).text() == 'Paid' && $(this).parent().find('td').css('display', 'none');
  //     });
  //     $('.btnPaid').css('backgroundColor', 'white');
  //     $('.btnPaid').css('color', '#3b3b66');
  //     $('.btnPaid').css('border', '2px solid #3b3b66');
  //     $('.btnPaid').css('color', '#3b3b66');
  //     filterState = 1;
  //   }
  // }

  // function btnFilterPending() {
  //   if (filterState == 1) {
  //     $('table tr td:nth-child(4)').each(function () {
  //       $(this).text() == 'Pending' && $(this).parent().find('td').css('display', 'table-cell');
  //     });
  //     $('.btnPending').css('backgroundColor', '#3b3b66');
  //     $('.btnPending').css('color', 'white');
  //     $('.btnPending').css('border', '2px solid white');
  //     $('.btnPending').css('color', 'white');
  //     filterState = 0;
  //   }
  //   else {
  //     $('table tr td:nth-child(4)').each(function () {
  //       $(this).text() == 'Pending' && $(this).parent().find('td').css('display', 'none');
  //     });
  //     $('.btnPending').css('backgroundColor', 'white');
  //     $('.btnPending').css('color', '#3b3b66');
  //     $('.btnPending').css('border', '2px solid #3b3b66');
  //     $('.btnPending').css('color', '#3b3b66');
  //     filterState = 1;
  //   }
  // }

  // function btnFilterFailed() {
  //   if (filterState == 1) {
  //     $('table tr td:nth-child(4)').each(function () {
  //       $(this).text() == 'Failed' && $(this).parent().find('td').css('display', 'table-cell');
  //     });
  //     $('.btnFailed').css('backgroundColor', '#3b3b66');
  //     $('.btnFailed').css('color', 'white');
  //     $('.btnFailed').css('border', '2px solid white');
  //     $('.btnFailed').css('color', 'white');
  //     filterState = 0;
  //   }
  //   else {
  //     $('table tr td:nth-child(4)').each(function () {
  //       $(this).text() == 'Failed' && $(this).parent().find('td').css('display', 'none');
  //     });
  //     $('.btnFailed').css('backgroundColor', 'white');
  //     $('.btnFailed').css('color', '#3b3b66');
  //     $('.btnFailed').css('border', '2px solid #3b3b66');
  //     $('.btnFailed').css('color', '#3b3b66');
  //     filterState = 1;
  //   }
  // }

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
                            Bookings<span className="pNumber"><span>{filteredBookings[0] == undefined ? 0 : filteredBookings.length}</span> entries</span>
                        </p>
                    </Col>
                    <Col lg={6} md={6}>
                        <button className="float-right btnAdd" onClick={()=>Router.push('/dashboard/bookings/checkout')}>&#x2b;&nbsp;Add Bookings</button>
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
                                    <th>Book Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                  <Fragment>
                                    {filteredBookings.map((booking, index) => {
                                    return (
                                          <Fragment>
                                            {booking != undefined ?
                                            <tr key={booking.id} onClick={()=>handleOpenBookingDetails(booking.id)}>
                                            <td data-column="Full Name">{booking.first_name != "" ? booking.first_name : "N/A"} {booking.last_name != "" ? booking.last_name : "N/A"}</td>
                                            <td data-column="Items">{
                                                booking.services_detail.map(service=>{
                                                  return(
                                                    <p className="mb-0" key={service.id}>{service.title}</p>
                                                  )
                                                })
                                            }</td>
                                            <td data-column="Date"><Moment format="LL">{booking.booking_datetime}</Moment></td>
                                            <td data-column="Status" className={statusColor(booking.status)}>{booking.status}</td>
                                        </tr>
                                        : ""}
                                          </Fragment>
                                    );
                                })}
                                  </Fragment>
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
                              <p className={statusColor(booking.status)}>{booking.status}</p>
                          </Col>
                        </Row>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="pt-0">
                      <Row className="show-grid">
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left">
                              <p className="mb-0">Booking Date:</p>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left pl-0">
                              <p><Moment format="LL">{booking.booking_datetime}</Moment></p>
                          </Col>
                        </Row>

                        <Row className="show-grid">
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left">
                                <p className="mb-0">Item(s): </p>
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
                              <p className="mb-0">Total Amount:</p>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left pl-0">
                              <p>&#8369;{booking.total_amount}</p>
                          </Col>
                        </Row>

                        <Row className="show-grid">
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left">
                              <p className="mb-0">Payment Status:</p>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left pl-0">
                              <p className={statusColor(booking.status)}>{booking.payment_status}</p>
                          </Col>
                        </Row>

                        

                        

                        <Row className="show-grid">
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left">
                              <p className="mb-0">Address:</p>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left pl-0">
                              <p>{booking.address}</p>
                          </Col>
                        </Row>

                        <Row className="show-grid">
                          <Col lg={6} md={6} sm={6} xs={6} className="text-left">
                              <p className="mb-0">Mobile Number:</p>
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
                  @media only screen and (max-width:767px){
                      .btnTag{
                        padding: 2px 5px !important;
                      }
                  }
                `}</style>
        </Fragment>
    )
};


export default withAuthSync(Bookings);
