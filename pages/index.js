import React from 'react'
import { Jumbotron, Button, Row, Col, Image, Container, CardGroup, Card } from 'react-bootstrap'

import Default from '../layouts/default'
// import MainVideoMP4 from '../static/home/video.mp4'
// import MainVideoWEBM from '../static/home/video.webm'
import AmbulanceCutImage from '../static/home/ambcut.jpg'

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

const Home = () => (
  <Default>
    <Jumbotron className="vh-100 text-center d-flex align-items-center justify-content-center">
      <div>
        <h1> Emergency Quick Response</h1>
        <p className="pb-5">24/7 EMERGENCY QUICK RESPONSE.</p>
        <div className="play-button large"></div>
        <p className="mt-5">
          <Button className="mr-2">BE A MEMBER</Button>
          <Button>PAY FOR SERVICES</Button>
        </p>
      </div>
      <video className="background-video">
        <source src="../static/home/video.mp4" type="video/mp4" />
        <source src="../static/home/video.webm" type="video/webm" />
      </video>
    </Jumbotron>
    <Container fluid>
      <Row>
        <Col className="text-right p-5 d-flex align-items-center">
          <div>
            <h2>WHY LIFELINE?</h2>
            <p>Accidents happen in a split second. With more than 200,000 lives saved, in the course of 21 years, Lifeline has become a trusted and premiere medical provider in the Philippines.</p>
          </div>
        </Col>
        <Col className="second">
          <Image className="second" src={AmbulanceCutImage} fluid />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row><Col>
        <h2>OUR CLINICS</h2>
        <p>We specialize in tailor-making clinics to suit our clients' needs. Majority of the Lifeline Clinics are advanced first aid clinics.</p>
      </Col></Row>
      <Row><Col>
        <CardGroup>
          <ClinicCard name="Alabang Hills Vilage" number="+63(2) 551-1807" address="Don Jesus Blvd., Alabang Hills Village, Muntinlupa City, Philippines" imgUrl="https://picsum.photos/500/650?random=1" />
          <ClinicCard name="Ayala Alabang Village" number="+63(2) 772-3898 / +63(2) 772-2387" address="Narra Street, Ayala Alabang Village, Muntinlupa City, Philippines" imgUrl="https://picsum.photos/500/650?random=2" />
          <ClinicCard name="Loyola Grand Villas" number="+63(2) 709-4355" address="Guatemala Space, Soliven II, Loyola Grand Villas, Quezon City, Philippines" imgUrl="https://picsum.photos/500/650?random=3" />
          <ClinicCard name="Rockwell Makati Club" number="+63(2) 798-1700 local 1748 / +63(2) 798-1748" address="Basement 2 of Amorsolo East Tower, Rockwell Center, Makati City, Philippines" imgUrl="https://picsum.photos/500/650?random=4" />
        </CardGroup>
      </Col></Row>
    </Container>

    <style jsx global>{`
      div.jumbotron {
        background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("static/home/eqr.jpg");
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        color: white;
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

      .play-button {
        width: 80px;
        height: 80px;
        background: #ffffff91;
        text-align: center;
        margin: 0 auto;
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

export default Home
