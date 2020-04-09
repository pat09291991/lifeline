import "bootstrap/dist/css/bootstrap.min.css";
import Tooltip from "react-bootstrap/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Row, Col, OverlayTrigger, Card, CardDeck } from "react-bootstrap";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Head from "next/head";
import { statusColorTag } from '../utils/layout';

const notes = () => {
    const card = [{ 'tag': 'Membership', 'title': 'Payment Process', 'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.t ut labore et dolore magna aliqua.', 'date': 'July 12, 2019' },
    { 'tag': 'Services', 'title': 'Payment Process', 'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'date': 'May 17, 2019' },
    { 'tag': 'Payments', 'title': 'Payment Process', 'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'date': 'january 9, 2019' },
    { 'tag': 'Payments', 'title': 'Payment Process', 'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'date': 'january 9, 2019' },
    { 'tag': 'Membership', 'title': 'Payment Process', 'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'date': 'December 5, 2019' }, { 'tag': 'Services', 'title': 'Payment Process', 'text': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'date': 'December 5, 2019' }]

    function deleteMembership() {
        $('.card-deck > .card > .card-body > .pCardTag').each(function () {
            $(this).text() == "Membership" && $(this).closest('.card').remove();
        });
    }
    
    function deleteServices() {
        $('.card-deck > .card > .card-body > .pCardTag').each(function () {
            $(this).text() == "Services" && $(this).closest('.card').remove();
        });
    }
    
    function deletePayments() {
        $('.card-deck > .card > .card-body > .pCardTag').each(function () {
            $(this).text() == "Payments" && $(this).closest('.card').remove();
        });
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
                        <p className="pNav">
                            Notes<span className="pNumber">56 entries</span>
                        </p>
                    </Col>
                    <Col lg={6}>
                        <button className="float-right btnAdd">&#x2b;&nbsp;Add Notes</button>
                    </Col>
                </Row>
                <Row style={{ marginTop: "-10px" }}>
                    <Col lg={6}>
                        <button className="btnTag">
                            <img
                                src="Image/filter.png"
                                className="img-fluid"
                                style={{ width: "15px" }}
                            ></img>
                        </button>
                        <button className="btnTagList btnMembershipCard" onClick = {deleteMembership}>
                            Membership
            <img
                                src="Image/close.png"
                                style={{ width: "10px", marginLeft: "10px" }}
                            ></img>
                        </button>
                        <button className="btnTagList btnPaymentsCard" onClick = {deletePayments}>
                            Payments
            <img
                                src="Image/close.png"
                                style={{ width: "10px", marginLeft: "10px" }}
                            ></img>
                        </button>
                        <button className="btnTagList btnServicesCard" onClick = {deleteServices}>
                            Services
            <img
                                src="Image/close.png"
                                style={{ width: "10px", marginLeft: "10px" }}
                            ></img>
                        </button>
                    </Col>
                    <Col lg={6}>
                        <p className="pSorted float-right">
                            Sorted by <span>Services</span>
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                    <Col lg={12}>
                        <CardDeck>
                            {card.map((card, index) => {
                                return (
                                    <Card>
                                        <Card.Body>
                                            <p className={`${statusColorTag(card.tag)} pCardTag`}>{card.tag}</p>
                                            <Card.Title>{card.title}</Card.Title>
                                            <Card.Text>
                                                {card.text}
                                            </Card.Text>
                                            <hr></hr>
                                            <p className="pDateCard">{card.date}</p>
                                        </Card.Body>
                                    </Card>
                                );
                            })}
                        </CardDeck>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default notes;