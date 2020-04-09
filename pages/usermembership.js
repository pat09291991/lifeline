import Link from "next/link";
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, OverlayTrigger, Tooltip, Dropdown, Modal, Button } from "react-bootstrap";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Head from "next/head";
import Bottom from "../components/bottom";
import Loader from "../components/loader";
import { statusColor } from '../utils/layout'


const membership = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  function loadwindows() {
    const element = document.querySelector('#load')
    element.classList.add('animated', 'fadeOut')
    $('loader').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animation end', document.getElementById('load').setAttribute('style', 'display: none !important'));
    var rowCount = $('#myTable tr').length;
    rowCount = rowCount - 1;
    $('.pNumber').html(rowCount + " " + "entries");
  }

  const memberships = [{ 'name': 'Alfon Labadan', 'items': 'Membership - Group Plan 2 Years', 'date': 'June 12, 2019', status: 'Paid' },
  { 'name': 'Eskye Custodio', 'items': 'Membership - Group Plan 1 Year', 'date': 'March 22, 2019', status: 'Failed' },
  { 'name': 'Leo Sanico', 'items': 'Membership - Individual Plan 1 Year', 'date': 'December 20, 2020', status: 'Pending' }]

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

  return (
    <div onLoad={loadwindows}>
      <head>
        <script type="text/javascript" src="Script/myScript.js"></script>
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
        <link rel="stylesheet" type="text/css" href="Css/dashboard.css" />

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
      <Loader></Loader>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Container fluid={true} style={{ zIndex: "-1", paddingLeft: "90px" }} className="colMain">
        <Row style={{ paddingTop: "100px" }}>
          <Col lg={6} md={6}>
            <p className="pNav pNav1">
              Membership<span className="pNumber">56 entries</span>
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
                src="Image/filter.png"
                className="img-fluid"
                style={{ width: "15px" }}
              ></img>
            </button>
            <button className="btnTagList btnPaid" onClick={btnFilterPaid}>
              Paid
            <span className="span" style={{ marginLeft: "10px" }}>&#x2715;</span>
            </button>
            <button className="btnTagList btnFailed" onClick={btnFilterFailed}>
              Failed
              <span style={{ marginLeft: "10px" }}>&#x2715;</span>
            </button>
            <button className="btnTagList btnPending" onClick={btnFilterPending}>
              Pending
              <span style={{ marginLeft: "10px" }}>&#x2715;</span>
            </button>
          </Col>
        </Row>
        <Row style={{ marginTop: "40px" }} >
          <Col lg={12} className="colTable">
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
                {memberships.map((membership, index) => {
                  return (
                    <tr key={index}>
                      <td data-column="Full Name">{membership.name}</td>
                      <td data-column="Items">{membership.items}</td>
                      <td data-column="Date">{membership.date}</td>
                      <td data-column="Status" className={statusColor(membership.status)}>{membership.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
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
                <Link href="/addmember">
                  <img src="Image/team(3).png" className="img-fluid imgModa mx-auto"></img>
                </Link>
                <p className="pChoose">Individual</p>
              </Col>
              <Col lg={6} md={6} sm={6} className="colModal">
                <img src="Image/boss.png" className="img-fluid imgModal mx-auto" style={{ width: "115px", marginTop: "10px" }}></img>
                <p className="pChoose" style={{ marginTop: "10px" }}>Group</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

    </div>
  )
};

export default membership;
