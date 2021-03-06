import React, { useState, useEffect, Fragment } from 'react';
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, OverlayTrigger, Tooltip, Dropdown, Modal, Button } from "react-bootstrap";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import Head from "next/head";
import Bottom from "../../components/bottom";
import Loader from "../../components/loader";
import { statusColor } from '../../utils/layout'
import axios from 'axios';
import apiUrl from '../../api'
import Moment from 'react-moment';

import cookie from 'js-cookie'
import { withAuthSync } from '../../utils/auth'

const membership = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = useState(false);
const [id, setId] = useState(null);

const [memberships, setMemberships] = useState([])
const [filteredMemberships, setFilteredMemberships] = useState([])

useEffect(()=>{
  const token = cookie.get("token")
  axios.get(`${apiUrl}/memberships`)
    .then(response=>{
      setMemberships(response.data);
      setFilteredMemberships(response.data)
    })
}, [])

    const [paidFilter, setPaidFilter] = useState(true);
    const [pendingFilter, setPendingFilter] = useState(true);
    const [failedFilter, setFailedFilter] = useState(true);


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

  const btnFilterPaid = () =>{
       if(paidFilter){
        setPaidFilter(false);
        if(pendingFilter && failedFilter){
            const _memberships = memberships.filter(membership=>{
            if(membership.membership_status != "Active")
            return membership;
          })
          setFilteredMemberships([..._memberships]);

        }else if(!pendingFilter && failedFilter){
            const _memberships = memberships.map(membership=>{
            if(membership.membership_status == "Failed")
            return membership;
          })
          setFilteredMemberships([..._memberships]);
        }else if(pendingFilter && !failedFilter){
            const _memberships = memberships.map(membership=>{
            if(membership.membership_status == "No payments made")
            return membership;
          })
          setFilteredMemberships([..._memberships]);
        }else if(!pendingFilter && !failedFilter){
            setFilteredMemberships([])
        }
      }else{
       setPaidFilter(true);
      //  $('table tr td:nth-child(4)').each(function () {
      //   $(this).text() == 'Paid' && $(this).parent().find('td').css('display', 'none');
      // });
        if(pendingFilter && failedFilter){
         setFilteredMemberships(memberships);
        }else if(!pendingFilter && failedFilter){
            const _memberships = memberships.filter(membership=>{
            if(membership.membership_status != "No payments made")
            return membership;
          })
          setFilteredMemberships([..._memberships]);
        }else if(pendingFilter && !failedFilter){
            const _memberships = memberships.filter(membership=>{
            if(membership.membership_status != "Failed")
            return membership;
          })
          setFilteredMemberships([..._memberships]);
        }else if(!pendingFilter && !failedFilter){
            const _memberships = memberships.filter(membership=>{
            if(membership.membership_status == "Active")
            return membership;
          })
          setFilteredMemberships([..._memberships]);
        }
      }
    }

    const btnFilterPending = () => {
      if(pendingFilter){
        setPendingFilter(false);
        
       if(paidFilter && failedFilter){
            const _memberships = memberships.filter(membership=>{
            if(membership.membership_status != "No payments made")
            return membership;
          })
          setFilteredMemberships([..._memberships]);

        }else if(!paidFilter && failedFilter){
            const _memberships = memberships.filter(membership=>{
            if(membership.membership_status == "Failed")
            return membership;
          })
          setFilteredMemberships([..._memberships]);
        }else if(paidFilter && !failedFilter){
            const _memberships = memberships.filter(membership=>{
            if(membership.membership_status == "Active")
            return membership;
          })
          setFilteredMemberships([..._memberships]);
        }else if(!paidFilter && !failedFilter){
            setFilteredMemberships([])
        }

      }else{
        setPendingFilter(true);
        if(paidFilter && failedFilter){

         setFilteredMemberships(memberships);
        }else if(!paidFilter && failedFilter){
            const _memberships = memberships.filter(membership=>{
            if(membership.membership_status != "Active")
            return membership;
          })
          setFilteredMemberships([..._memberships]);
        }else if(paidFilter && !failedFilter){
            const _memberships = memberships.filter(membership=>{
            if(membership.membership_status != "Failed")
            return membership;
          })
          setFilteredMemberships([..._memberships]);
        }else if(!paidFilter && !failedFilter){
            const _memberships = memberships.filter(membership=>{
            if(membership.membership_status == "No payments made")
            return membership;

          })
          setFilteredMemberships([..._memberships]);
        }
      }
    }

    const btnFilterFailed = () => {
      if(failedFilter){
        setFailedFilter(false);
      
        if(paidFilter && pendingFilter){
            const _memberships = memberships.filter(membership=>{
            if(membership.membership_status != "Failed")
            return membership;
          })
          setFilteredMemberships([..._memberships]);
        }else if(!paidFilter && pendingFilter){
            const _memberships = memberships.filter(membership=>{
            if(membership.membership_status == "No payments made")
            return membership;
          })
          setFilteredMemberships([..._memberships]);
        }else if(paidFilter && !pendingFilter){
            const _memberships = memberships.filter(membership=>{
            if(membership.membership_status == "Active")
            return membership;
          })
          setFilteredMemberships([..._memberships]);

        }else if(!paidFilter && !pendingFilter){
            setFilteredMemberships([])
        }

      }else{
        setFailedFilter(true);

        if(paidFilter && pendingFilter){
         setFilteredMemberships(memberships);
        }else if(!paidFilter && pendingFilter){
            const _memberships = memberships.filter(membership=>{
            if(membership.membership_status != "Active")
            return membership;
          })
          setFilteredMemberships([..._memberships]);
        }else if(paidFilter && !pendingFilter){
            const _memberships = memberships.filter(membership=>{
            if(membership.membership_status != "No payments made")
            return membership;
          })
          setFilteredMemberships([..._memberships]);
        }else if(!paidFilter && !pendingFilter){
            const _memberships = memberships.filter(membership=>{
            if(membership.membership_status == "Failed")
            return membership;
          })
          setFilteredMemberships([..._memberships]);
        }
    }
    }
  // var filterState = 1;
  // function btnFilterPaid() {
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

console.log(filteredMemberships);

const handleOpenDetails = (id) =>{
  setModalShow(true);
  setId(id)
}
  return (
  <Fragment>  
      <head>
        <script type="text/javascript" src="../Script/myScript.js"></script>
        <meta charset="utf-8" />
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

        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
      </head>
      <body>
      
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      
      
      <Container fluid={true} style={{ zIndex: "-1", paddingLeft: "90px" }} className="colMain">
        <Row style={{ paddingTop: "100px" }}>
          <Col lg={6} md={6}>
            <p className="pNav pNav1">
              Membership<span className="pNumber">{filteredMemberships[0] == undefined ? 0 : filteredMemberships.length} entries</span>
            </p>
          </Col>
          <Col lg={6} md={6}>
            <button className="float-right btnAdd" onClick={handleShow}>&#x2b;&nbsp;Add Membership</button>
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
        <Row style={{ marginTop: "40px" }} >
          <Col lg={12} className="colTable">
            <table id="myTable">
              <thead>
                <tr>
                  <th>Items</th>
                  <th>Expiration Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredMemberships.map((membership, index) => {
                  return(
                    <Fragment>
                    {membership != undefined ?
                    <tr onClick={()=>handleOpenDetails(membership.id)}>
                      <td data-column="Items">{membership.membership_type__name}</td>
                      <td data-column="Date">{membership.expire_at ? <Moment format="LL">{membership.expire_at}</Moment> : "N/A"}</td>
                      <td data-column="Status" className={statusColor(membership.membership_status == "Active" ? "Paid" : "Pending")}>
                        {membership.membership_status == "Active" ? "Paid" : "Pending"}
                      </td>
                    </tr>
                    : ""}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
      </body>

      <Modal
      show={modalShow}
      dialogClassName="mx-0 w-100"
      >
           {memberships.map(membership=>{
            return(
            <Fragment className="m-0">
              {membership.id === id ? 
                <Fragment>
                    <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className="w-100">
                    
                    <Row className="show-grid">
                          <Col lg={6} md={6} sm={8} xs={8} className="text-left">
                              <p>{membership.first_name} {membership.last_name}</p>
                          </Col>
                          <Col lg={6} md={6} sm={4} xs={4} className="text-right">
                              <p className={statusColor(membership.payment_status)}>{membership.membership_status == "Active" ? "Paid" : "Pending"}</p>
                          </Col>
                        </Row>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="mt-0">
                  
                  <Row>
                    <Col lg={6} md={6} sm={8} xs={8} className="text-left">
                      <p className="pModalBody">Membership Type:</p>
                    </Col>
                    <Col lg={6} md={6} sm={4} xs={4} className="text-left">
                      <p className="pModalBody">{membership.membership_type__name}</p>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6} md={6} sm={8} xs={8} className="text-left">
                      <p className="pModalBody">Price:</p>
                    </Col>
                    <Col lg={6} md={6} sm={4} xs={4} className="text-left">
                      <p className="pModalBody">{membership.price}</p>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6} md={6} sm={8} xs={8} className="text-left">
                      <p className="pModalBody">Expiration:</p>
                    </Col>
                    <Col lg={6} md={6} sm={4} xs={4} className="text-left">
                      <p className="pModalBody">{membership.expire_at ? <Moment format="LL">{membership.expire_at}</Moment> : "N/A"}</p>
                    </Col>
                  </Row>


                  {membership.membership_type == 3 || membership.membership_type == 4 ?
                  <Row>
                    <Col lg={6} md={6} sm={8} xs={8} className="text-left">
                      <p className="pModalBody">Members:</p>
                    </Col>
                    <Col lg={6} md={6} sm={4} xs={4} className="text-left">
                      {membership.membership_type == 3 || membership.membership_type == 4 ?
                      <Fragment>
                        <ul className="pl-0">
                          {membership.members.map(member=>{
                            return(
                              <Fragment key={member.id}>
                                <li className="list-unstyled">{member.first_name} {member.last_name}</li>
                              </Fragment>
                            )
                          })}
                        </ul>
                      </Fragment>
                    : "N/A"}
                    </Col>
                  </Row>
                  : ""}
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

      {/* Modal */}

      <Modal show={show}
        onHide={() => setShow(false)}>
        <Modal.Header closeButton className="text-center d-block">
          <Modal.Title>Choose Option</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Container fluid={true}>
            <Row>
              <Col lg={6} md={6} sm={6} className="colModal">
                <Link href="/dashboard/membership/add-individual-member">
                  <img src="../Image/team(3).png" className="img-fluid imgModa mx-auto"></img>
                </Link>
                <p className="pChoose">Individual</p>
              </Col>
              <Col lg={6} md={6} sm={6} className="colModal">
                <img src="../Image/boss.png" className="img-fluid imgModal mx-auto" style={{ width: "115px", marginTop: "10px" }}></img>
                <p className="pChoose" style={{ marginTop: "10px" }}>Group</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

  </Fragment>
  )
};


export default withAuthSync(membership);
