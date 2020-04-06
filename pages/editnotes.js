import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, OverlayTrigger, Tooltip, Dropdown, Modal, Button } from "react-bootstrap";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Head from "next/head";
import { statusColor } from '../utils/layout'
import { render } from 'react-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const editnotes = () => {
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
                <link rel="stylesheet" type="text/css" href="Css/dashboard.css" />
                <script type="text/javascript" src="Script/myScript.js"></script>
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <Sidebar></Sidebar>
            <Navbar></Navbar>
            <Container fluid={true} style={{ zIndex: "-1", paddingLeft: "90px" }}>
                <Row style={{ paddingTop: "100px" }}>
                    <Col lg={6}>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">Delete</Tooltip>}>
                            <button className="btnNotes1 btnBack float-left"><img src="Image/back.png" className="img-fluid" style={{ width: "17px" }}></img></button>
                        </OverlayTrigger>
                        <span className="pAllNotes">All Notes</span>

                    </Col>
                    <Col lg={6}>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">Delete</Tooltip>}>
                            <button className="btnNotes1 btnDelete float-right"><img src="Image/trash.png" className="img-fluid" style={{ width: "17px" }}></img></button>
                        </OverlayTrigger>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">Add Notes</Tooltip>}>
                            <button className="btnNotes1 btnAddNotes float-right"><img src="Image/plus.png" className="img-fluid" style={{ width: "17px" }}></img></button>
                        </OverlayTrigger>
                    </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Col lg={6}>
                        <p className="pTitleNotes">Payment Process</p>
                    </Col>
                    <Col lg={6}>
                        <p className="pDateTag float-right">June 12</p>
                    </Col>
                </Row>
                <Row className = "rowTextarea">
                    <Col lg={12}>
                        <textarea contenteditable="true" spellcheck="false">Lorem ipsum dolor sit amet, consectetur adipisci
                        ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            
                        
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </textarea>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default editnotes;