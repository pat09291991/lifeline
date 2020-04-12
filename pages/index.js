import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Row, Col, Image, Container, CardGroup, Card, Modal } from 'react-bootstrap'
import cookie from 'js-cookie'
import jwt from 'jwt-decode';
import Link from 'next/link';
import Router from 'next/router';

import Default from '../layouts/default'
// import MainVideoMP4 from '../public/home/video.mp4'
// import MainVideoWEBM from '../public/home/video.webm'
import AmbulanceCutImage from '../public/home/ambcut.jpg'
import ServicesEQRImage from '../public/home/eqr.png'
import ServicesTransferImage from '../public/home/b2b.png'
import ServicesAirliftsImage from '../public/home/helicopter.png'
import ServicesDOCImage from '../public/home/doctor.png'
import JumboImage from '../public/home/jumbo.jpg'
import VideoMP4 from '../public/home/video.mp4'
import VideoWEBM from '../public/home/video.webm'
import SagisagImage from '../public/home/sagisag.jpg'
import PotusImage from '../public/home/potus.png'
import PopeImage from '../public/home/pope.png'
import ApecImage from '../public/home/apec.png'
import TwentyFourSevenImage from '../public/home/24.png'
import AmbulanceAboutImage from '../public/home/ambulance.png'
import MobileAppImage from '../public/home/mobileapp.png'

import AwardNCCAA06Image from '../public/home/awards/2006_national_customer_choice_annual_awards.jpg'
import AwardABMQAImage from '../public/home/awards/asian_bussiness_marketing_quality_award.png'
import AwardCEAImage from '../public/home/awards/ceo_excel_awards.jpg'
import AwardMVPBAImage from '../public/home/awards/mvp_bossing_award.jpg'
import AwardsNCCAA14Image from '../public/home/awards/national_customer_choice_annual_awards.jpg'
import AwardNPQEAImage from '../public/home/awards/national_product_quality_excellence_award.png'
import AwardNSCAAImage from '../public/home/awards/national_shoppers_choice_annual_awards.png'
import AwardPHQABEImage from '../public/home/awards/ph_quality_awards_for_business_excellence.jpg'

const ClinicCard = ({ name, number, address, imgUrl }) => (

  <Card>
    <Card.Img variant="top" src={imgUrl} />
    <Card.Body>
      <h3>{name}</h3>
      <p>
        <small className="text-muted">Phone Number</small><br />
        {number}
      </p>
      <p>
        <small className="text-muted">Address</small><br />
        {address}
      </p>
    </Card.Body>
  </Card>
)

const jumboStyle = {
  background: `url(${JumboImage}) rgba(0, 0, 0, 0.4)`,
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply'
}

const trustedStyle = {
  background: `url(${SagisagImage}) rgba(0, 0, 0, 0.5)`,
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply',
  color: 'white'
}

function ProfileDetailsChecker(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Missing Information:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
           Please complete your profile details.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="mr-2 text-center">Later</Button>
        <Link href="/profile"><Button className="text-center btn-danger">GO</Button></Link>
      </Modal.Footer>
    </Modal>
  );
}

const Home = () => {
const [modalShow, setModalShow] = React.useState(false);

  useEffect(()=>{
  const token = cookie.get("token");
  if(token){
    const accessToken = JSON.parse(token);
    const payload = jwt(accessToken.access);
    console.log(payload)
    if(!payload.address){
    setModalShow(true);
  } 
  }


}, [])
  return(
  <Default>
  <ProfileDetailsChecker
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    <Jumbotron className="vh-100 text-center d-flex align-items-center justify-content-center" style={jumboStyle}>
      <div>
        <h1 className="jumbo-title"> Emergency Quick Response</h1>
        <p className="jumbo-subtitle">24/7 EMERGENCY QUICK RESPONSE.</p>
        <div className="pb-container"><div className="play-button large"></div></div>
        <div className="mt-5">
          <Button onClick={()=>Router.push('/membership')} className="mr-2" variant="warning">Be a Member</Button>
          <Button onClick={()=>Router.push('/payforservices')} variant="warning">Pay for Services</Button>
        </div>
        <p>
          We are constantly striving to improve so as to better serve our client communities
        </p>
      </div>
      <video className="jumbo-video" controls hidden>
        <source src={VideoMP4} type="video/mp4" />
        <source src={VideoWEBM} type="video/webm" />
      </video>

    </Jumbotron>
    <Container fluid>
      <Row>
        <Col md={12} lg={8} className="p-5">
          <Row className="text-center d-flex align-items-center">
            <Col>
              <h1><strong>WHY <span className="text-red">LIFELINE</span>?</strong></h1>
              <h4 className="text-muted">Accidents happen in a split second. With more than 300,000 lives saved, in the course of 25 years, Lifeline has become a trusted and premiere medical provider in the Philippines.</h4>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={6}>
              <ul>
                <li>12 mins average response time</li>
                <li>Access to a fleet of helicopters &amp; jets</li>
              </ul>
            </Col>
            <Col sm={6}>
              <ul>
                <li>Over 350 staff members</li>
                <li>Over 100 ready doctors-on-call</li>
              </ul>
            </Col>
            <Col sm={12}>
              <ul>
                <li>Over 300,000 members covering 5,400,000 people in Metro Manila</li>
                <li>First ambulance company to be given the license to operate by the Department of Health</li>
                <li>ISO, JCI & DOLE Accredited</li>
              </ul>
            </Col>
          </Row>
          <Row className="text-center">
            <Col><a href="https://www.dropbox.com/s/i3rim7g9ujtwve1/Company%20Profile%202017%20final%20LAM%20April%2028%2717.pdf?dl=0">To
                                    know more about our company, download our company profile.</a></Col>
          </Row>

          <Row className="text-center mt-3">
            <Col md={12} lg={6} className="about-box-wrapper d-flex justify-content-center align-items-stretch">
              <Row className="about-box d-flex justify-content-center align-items-center">
                <Col className="about-box-image">
                  <Image src={TwentyFourSevenImage} fluid />
                </Col>
                <Col>
                  <p className="about-box-16911 text-warning">Call<br/>16-911</p>
                </Col>
              </Row>
            </Col>
            <Col md={12} lg={6} className="about-box-wrapper d-flex justify-content-center align-items-stretch mt-3 mt-lg-0">
              <Row className="about-box d-flex justify-content-center align-items-center">
                <Col className="about-box-image">
                  <Image src={AmbulanceAboutImage} fluid />
                </Col>
                <Col>
                  <p>Over 60 ambulances with multiple points of dispatch</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg={4} className="second d-none d-lg-block">
          <Image className="second" src={AmbulanceCutImage} fluid />
        </Col>
      </Row>
    </Container>
    <Container fluid className="bg-second p-5">
      <Row><Col className="text-center">
        <h1>Our Services</h1>
        <h4 className="text-muted">We provide 24/7</h4>
      </Col></Row>
      <Row className="text-center">
        <Col sm={6}>
          <Image className="m-5" src={ServicesEQRImage} width={48} height={48} />
          <h3>Emergency Quick Response</h3>
          <p>We provide 24/7 quick & reliable response and transportation while providing the finest medical care when transporting patients. "Virtual Emergency Room On Wheels". </p>
        </Col>
        <Col sm={6}>
          <Image className="m-5" src={ServicesTransferImage} width={48} height={48} />
          <h3>Patient Transfer</h3>
          <p>We provide transportation of ill and injured patients between hospitals to hospitals or from hospitals to home or home to any treatment facilities. (Booking is required.) </p>
        </Col>
        <Col sm={6}>
          <Image className="m-5" src={ServicesAirliftsImage} width={48} height={48} />
          <h3>Standby and Medical Airlifts</h3>
          <p>We provide standby ambulances for events for all sporting, social, entertainment or corporate events. We provide medical airlifts of fixed wing and helicopter evacuation anywhere in the country. </p>
        </Col>
        <Col sm={6}>
          <Image className="m-5" src={ServicesDOCImage} width={48} height={48} />
          <h3>D.O.C. Programs</h3>
          <p>D.O.C. programs consists of doctor on call, diagnostics on call, and driver on call. This is 24 hours service at your convenience. </p>
        </Col>
      </Row>
    </Container>
    <Container className="p-5" fluid style={trustedStyle}>
      <Row><Col className="text-center">
        <h1>Trusted Internationally</h1>
        <h4>Provided close in medical support for the following VIPs</h4>
      </Col></Row>
      <Row className="text-center my-3">
        <Col sm={6}>
          <Image src={PotusImage} />
          <h3>George W. Bush</h3>
          <h4>2003</h4>
        </Col>
        <Col sm={6}>
          <Image src={PopeImage} />
          <h3>Pope Francis</h3>
          <h4>2015</h4>
        </Col>
        <Col sm={6}>
          <Image src={ApecImage} />
          <h3>APEC</h3>
          <h4>2016</h4>
        </Col>
        <Col sm={6}>
          <Image src={ApecImage} />
          <h3>APEC</h3>
          <h4>2017</h4>
        </Col>
      </Row>
    </Container>
    <Container className="my-5">
      <Row><Col className="text-center">
        <h1>Our Clinics</h1>
        <h4 className="text-muted">We specialize in tailor-making clinics to suit our clients' needs. Majority of the Lifeline Clinics are advanced first aid clinics.</h4>
      </Col></Row>
      <Row><Col>
        <CardGroup>
          {/* TODO: Get details from Tita Candy */}
          <ClinicCard name="Alabang Greenfields" number="+63(2) 551-1807" address="Don Jesus Blvd., Alabang Hills Village, Muntinlupa City, Philippines" imgUrl="https://picsum.photos/500/650?random=1" />
          <ClinicCard name="Ayala Alabang Village" number="+63(2) 772-3898 / +63(2) 772-2387" address="Narra Street, Ayala Alabang Village, Muntinlupa City, Philippines" imgUrl="https://picsum.photos/500/650?random=2" />
          <ClinicCard name="Menarco Tower" number="+63(2) 709-4355" address="Guatemala Space, Soliven II, Loyola Grand Villas, Quezon City, Philippines" imgUrl="https://picsum.photos/500/650?random=3" />
          <ClinicCard name="Rockwell Makati Club" number="+63(2) 798-1700 local 1748 / +63(2) 798-1748" address="Basement 2 of Amorsolo East Tower, Rockwell Center, Makati City, Philippines" imgUrl="https://picsum.photos/500/650?random=4" />
        </CardGroup>
      </Col></Row>
    </Container>
    <Container className="p-5 bg-second" fluid>
      <Row><Col className="text-center">
        <h1>Our Mobile App</h1>
        <h4 className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lacinia vulputate.</h4>
      </Col></Row>
      <Row className="mt-3 d-flex align-items-center">
        <Col lg={4} className="text-center">
          <Image src={MobileAppImage} fluid />
        </Col>
        {/* TODO: Add download links */}
        <Col lg={8} className="mt-5 mt-lg-0">
          <Row>
            <Col>
              <h3 className="text-red">GPS Tracking</h3>
              <p>GPS tracking of your location anywhere in the Philippines. Just open the application, press the button and Lifeline will do the rest.</p>
            </Col>
            <Col>
              <h3 className="text-red">Payment For Services</h3>
              <p>You can pay the service you availed through the application, again, just like in our Lifeline Membership web page.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="text-red">Apply for Membership</h3>
              <p>You can apply for individual or household membership just like in our Lifeline Membership web page.</p>
            </Col>
            <Col>
              <h3 className="text-red">Status and Transactions</h3>
              <p>You can check the status of your membership and the details of your previous transactions.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <Container className="py-5 text-center">
      <Row className="text-center">
        <Col>
          <h1>Awards</h1>
          <h4 className="text-muted">Join our satisfied customers locally and globally, and get secured by award winning service</h4>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6} lg={3}>
          <Image src={AwardNCCAA06Image} />
          <p>2006 National Customers Choice Annual Awards “Most Outstanding Ambulance Service Product”</p>
        </Col>
        <Col md={6} lg={3}>
          <Image src={AwardABMQAImage} />
          <p>APEA</p>
          {/* TODO: Get the image from Lifeline */}
        </Col>
        <Col md={6} lg={3}>
          <Image src={AwardCEAImage} />
          <p>CEO Excel Awards 2016</p>
        </Col>
        <Col md={6} lg={3}>
          <Image src={AwardMVPBAImage} />
          <p>MVP Bossing Award Winner 2014</p>
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={3}>
          <Image src={AwardsNCCAA14Image} />
          <p>2014 National Customers Choice Annual Awards “Most Outstanding Ambulance Services"</p>
        </Col>
        <Col md={6} lg={3}>
          <Image src={AwardNPQEAImage} />
          <p>2006 National Product Quality Excellence Award “Best On Time Ambulance Provider” – National Award</p>
        </Col>
        <Col md={6} lg={3}>
          <Image src={AwardNSCAAImage} />
          <p>2006 National Shoppers Choice Annual Awards “#1 Ambulance Service”</p>
        </Col>
        <Col md={6} lg={3}>
          <Image src={AwardPHQABEImage} />
          <p>2005 Philippine Quality Awards For Business Excellence “Philippine Business World-Class”</p>
        </Col>
      </Row>
      {/* TODO: Add APEA */}
    </Container>

    <style jsx global>{`

      div.bg-second {
        background: #f6f8fa;
      }

      div.jumbotron {
        min-height: 100%;
        color: white;
      }

      .jumbo-title {
        font-size: 3rem;
      }
      .jumbo-subtitle {
        font-size: 1.5rem;
      }
      .jumbo-video {
        position: absolute;
        z-index: 0;
        top: 0px;
        min-height: 100%;
        width: auto;
        height: auto;
      }

      .background-video {
        height: 100%;
        width: 100%;
        float: left;
        top: 0;
        left: 0;
        padding: none;
        position: fixed;
        display: none;
      }

      div.second {
        padding: 0;
      }

      .pb-container {
        margin: 200px 0 auto;
      }

      .play-button {
        width: 80px;
        height: 80px;
        background: #ffffff91;
        text-align: center;
        margin: 100px 0 auto;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -40px;
        margin-left: -40px;
        z-index: 4;
        border-radius: 50%;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        cursor: pointer;
      }
      .play-button:before {
        position: absolute;
        top: 50%;
        margin-top: -15px;
        left: 50%;
        margin-left: -8px;
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 15px 0 15px 26.0px;
        border-color: transparent transparent transparent #222222;
      }
      .play-button:hover {
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
      }
      @media all and (max-width: 767px) {
        .play-button {
          width: 65px;
          height: 65px;
          margin-top: -32px;
        }
        .play-button:before {
          position: absolute;
          top: 50%;
          margin-top: -9px;
          margin-left: -8px;
          content: '';
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 10px 0 10px 20.0px;
          border-color: transparent transparent transparent #222222;
        }
      }
      .play-button.video-playing {
        transform: scale(0.5) translateY(300px);
        -webkit-transform: scale(0.5) translateY(300px);
        opacity: 0.7;
        display: none;
      }
      .play-button.video-playing:before,
      .play-button.large.video-playing:before {
        border: none;
        width: 6px;
        height: 30px;
        background: #222;
        margin-top: -15px;
        margin-left: -10px;
      }
      .play-button.video-playing:after {
        content: '';
        width: 6px;
        height: 30px;
        position: absolute;
        background: #222;
        top: 50%;
        margin-top: -15px;
        margin-left: 2px;
      }
      .play-button.video-playing:hover {
        opacity: 1;
      }
      .play-button.large {
        height: 120px;
        width: 120px;
        margin-top: -60px;
        margin-left: -60px;
      }
      .play-button.large:before {
        margin-top: -18px;
        margin-left: -10px;
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 20px 0 20px 31.0px;
        border-color: transparent transparent transparent #222222;
      }
      @media all and (max-width: 767px) {
        .play-button.large {
          width: 90px;
          height: 90px;
          margin-top: -45px;
        }
        .play-button.large:before {
          margin-top: -14px;
          margin-left: -8px;
          content: '';
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 15px 0 15px 25.0px;
          border-color: transparent transparent transparent #222222;
        }

        
      }

      .about-box-wrapper {
          height:200px;
          color: white;
          font-size: 1.4rem;
        }

        .about-box {
          background: #0366B1;
          height: 100%;
          width: 100%;
          color: white;
          
        }

        .about-box-16911 {
          font-size: 3rem;
        }

        .about-box-image {
          border-right: 1px solid #FFF;
        }
      `}</style>
  </Default>
  // <div>
  //   <Head>
  //     <title>Home</title>
  //     <link rel="icon" href="/favicon.ico" />
  //   </Head>

  //   <Nav />

  //   <div className="hero">
  //     <h1 className="title">Welcome to Next.js!</h1>
  //     <p className="description">
  //       To get started, edit <code>pages/index.js</code> and save to reload.
  //     </p>

  //     <div className="row">
  //       <a href="https://nextjs.org/docs" className="card">
  //         <h3>Documentation &rarr;</h3>
  //         <p>Learn more about Next.js in the documentation.</p>
  //       </a>
  //       <a href="https://nextjs.org/learn" className="card">
  //         <h3>Next.js Learn &rarr;</h3>
  //         <p>Learn about Next.js by following an interactive tutorial!</p>
  //       </a>
  //       <a
  //         href="https://github.com/zeit/next.js/tree/master/examples"
  //         className="card"
  //       >
  //         <h3>Examples &rarr;</h3>
  //         <p>Find other example boilerplates on the Next.js GitHub.</p>
  //       </a>
  //     </div>
  //   </div>

  //   <style jsx>{`
  //     .hero {
  //       width: 100%;
  //       color: #333;
  //     }
  //     .title {
  //       margin: 0;
  //       width: 100%;
  //       padding-top: 80px;
  //       line-height: 1.15;
  //       font-size: 48px;
  //     }
  //     .title,
  //     .description {
  //       text-align: center;
  //     }
  //     .row {
  //       max-width: 880px;
  //       margin: 80px auto 40px;
  //       display: flex;
  //       flex-direction: row;
  //       justify-content: space-around;
  //     }
  //     .card {
  //       padding: 18px 18px 24px;
  //       width: 220px;
  //       text-align: left;
  //       text-decoration: none;
  //       color: #434343;
  //       border: 1px solid #9b9b9b;
  //     }
  //     .card:hover {
  //       border-color: #067df7;
  //     }
  //     .card h3 {
  //       margin: 0;
  //       color: #067df7;
  //       font-size: 18px;
  //     }
  //     .card p {
  //       margin: 0;
  //       padding: 12px 0 0;
  //       font-size: 13px;
  //       color: #333;
  //     }
  //   `}</style>
  // </div>
  )
}




export default Home
