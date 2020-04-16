import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { useForm } from "react-hook-form";
import Router from 'next/router'
import cookie from 'js-cookie'

import Default from '../layouts/default'
import apiUrl from '../api'

const Login = () => {

  const { handleSubmit, register, errors, watch } = useForm();
  const [token, setToken] = useState({}); 
  //const [email, setEmail] = useState('')
  //const [password, setPassword] = useState('')
  const [userInput, setUserInput] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("")

  // useEffect(()=>{
  //   cookie.set("token", JSON.stringify(token))
  //   //cookie.set("refreshToken", JSON.stringify(token.refresh))
  // }, [token])

  const onSubmit = (values) => {
    setError("")
  if(Object.keys(errors).length === 0){
      setUserInput({
        email: values.email,
        password: values.password,
      })
    axios.post(`${apiUrl}/token/`,
      { username: values.email, password: values.password }
    )
      .then(response => {
        //setToken(response.data)
        cookie.set("token", JSON.stringify(response.data));
        if(sessionStorage.membership){
          Router.push('/membership/registration')
        }else{
          Router.push('/dashboard')
        }
      })
      .catch((error) => {
        if(error.response){
          //console.log(error.response.data.detail)
          setError(error.response.data.detail)
        }else{
          setError("")
        }
      })
  }
}

  return (
    <Default hideNav={true}>
      <Container fluid={true} className="h100" style={{ height: "100vh" }}>
        <Row
          className="row1 h100"
          style={{
            height: "100vh",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Col lg={4} md={4} sm={12} className="text-center">
            <Link href="/">
              <a>
                <img src="login/logo.png" className="img-fluid imgLogo mx-auto d-flex" />
              </a>
            </Link>
            <p className="pHello">Welcome!</p>
            <p className="pHelloSub">
              Sign in by entering the information below
            </p>
            {error && <p className="text-danger font-weight-bolder" style={{ marginTop: "25px" }}>{error}</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="divEmail" style={{ marginTop: "15px" }}>
              <p className="pEmail">Email Address</p>
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
              placeholder="Enter email address here.."
            />
            <small className="text-danger">{errors.email && errors.email.message}</small>
            </div>
            
            <div className="divPassword">
              <p className="pPassword">Password</p>
              
              <input
              name="password"
              type="password"
              className="txtPassword form-control"
              ref={register({
                required: 'Password is required',
              })}
              placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            />
            <small className="text-danger">{errors.password && errors.password.message}</small>
            </div>
            <div className="divFooter">
              <input
                className="inp-cbx"
                id="cbx"
                type="checkbox"
                style={{ display: "none" }}
              />
              <label className="cbx" htmlFor="cbx">
                <span>
                  <svg
                    viewBox="0 0 12 10"
                    style={{ height: "10px", width: "12px" }}
                  >
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span className="lblRemember">Remember me</span>
              </label>
              <span className="lblForgot">Forgot password?</span> <br />
              <button className="btnSignIn" type="submit">
                Sign In
              </button>
              <Link href="/sign-up">
                <a>
                  <p className="pDont">
                    Don't have an account?&nbsp;
                  <span>Sign Up</span>
                  </p>
                </a>
              </Link>
            </div>
            </form>
          </Col>
          <Col lg={8} md={8} sm={12} className="colright">
            <div className="banner">
              <video muted id="player" playsInline controls autoPlay poster="home/jumbo.jpg">
                <source
                  src="home/video.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        @media only screen and (max-width: 511px) {
          .btn,
          .colright,
          .banner {
            display: none !important;
          }
        }

        .myVideo {
          position: absolute;
          right: 0;
          bottom: 0;
          min-width: 100%;
          min-height: 100%;
        }
        body,
        html {
          height: 100%;
          width: 100%;
        }
        .pHello {
          font-family: roboto, sans-serif;
          color: rgb(230, 49, 49);
          font-size: 2rem;
          font-weight: bold;
        }
        .pHelloSub {
          font-family: roboto, sans-serif;
          color: #9e9e9e;
          font-size: 0.9rem;
          margin-top: -10px;
        }
        .divcontainer-fluid,
        .divcontainer {
          height: 100vh;
        }
        .rowh100 {
          height: 100vh;
          background-color: blue;
        }
        .divEmail,
        .divPassword,
        .divFooter {
          width: 350px;
          text-align: center;
          margin: 0 auto;
        }
        .divFooter {
          margin-top: 20px;
        }
        .pEmail,
        .pPassword {
          font-family: roboto, sans-serif;
          color: #424242;
          font-size: 0.9rem;
          float: left;
          font-weight: 500;
        }
        .pPassword {
          margin-top: 20px;
        }
        .row1 {
          align-items: center !important;
        }
        .txtEmail,
        .txtPassword {
          font-family: roboto, sans-serif;
          color: #424242;
          border: 1px solid #e0e0e0;
          background-color: #fafafa;
          border-radius: 5px;
          padding: 10px 20px;
          font-size: 0.9rem;
          width: 100%;
          text-align: left;
          outline: none;
          transition: all 0.2s;
        }
        .txtEmail:focus,
        .txtPassword:focus {
          background-color: rgb(230, 49, 49);
          color: white;
        }
        input:focus::-webkit-input-placeholder {
          color: white;
        }
        input[type="password"],
        input[type="text"] {
          margin-top: -5px;
        }

        .cbx {
          margin: auto;
          -webkit-user-select: none;
          user-select: none;
          cursor: pointer;
          float: left;
        }
        .cbx span {
          display: inline-block;
          vertical-align: middle;
          transform: translate3d(0, 0, 0);
        }
        .cbx span:first-child {
          position: relative;
          width: 18px;
          height: 18px;
          border-radius: 3px;
          transform: scale(1);
          vertical-align: middle;
          border: 1px solid #9098a9;
          transition: all 0.2s ease;
        }
        .cbx span:first-child svg {
          position: absolute;
          top: 3px;
          left: 2px;
          fill: none;
          stroke: #ffffff;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 16px;
          stroke-dashoffset: 16px;
          transition: all 0.3s ease;
          transition-delay: 0.1s;
          transform: translate3d(0, 0, 0);
        }
        .cbx span:first-child:before {
          content: "";
          width: 100%;
          height: 100%;
          background: rgb(230, 49, 49);
          display: block;
          transform: scale(0);
          opacity: 1;
          border-radius: 50%;
        }
        .cbx span:last-child {
          padding-left: 8px;
        }
        .cbx:hover span:first-child {
          border-color: rgb(230, 49, 49);
        }

        .inp-cbx:checked + .cbx span:first-child {
          background: rgb(230, 49, 49);
          border-color: rgb(230, 49, 49);
          animation: wave 0.4s ease;
        }
        .inp-cbx:checked + .cbx span:first-child svg {
          stroke-dashoffset: 0;
        }
        .inp-cbx:checked + .cbx span:first-child:before {
          transform: scale(3.5);
          opacity: 0;
          transition: all 0.6s ease;
        }

        @keyframes wave {
          50% {
            transform: scale(0.9);
          }
        }
        .lblRemember {
          font-family: roboto, sans-serif;
          color: #424242;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .lblRemember:hover {
          color: rgb(230, 49, 49);
        }
        .lblForgot {
          font-family: roboto, sans-serif;
          color: rgb(230, 49, 49);
          float: right;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 2px;
        }
        .lblForgot:hover {
          color: rgb(230, 49, 49, 0.5);
        }
        .btnSignIn {
          font-family: roboto, sans-serif;
          color: white;
          font-size: 1rem;
          background: rgb(230, 49, 49);
          border: 0px;
          width: 350px;
          border-radius: 5px;
          padding: 10px 10px;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 20px;
          box-shadow: 0 2px 12px -6px #e63131 !important;
        }
        .pDont {
          font-family: roboto, sans-serif;
          color: #424242;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 10px;
        }
        .pDont > span {
          color: rgb(230, 49, 49);
        }
        .imgLogo {
          width: 70px;
          margin-bottom: 20px;
        }
        .pLifeline {
          font-family: Montserrat, roboto, sans-serif;
          font-size: 1.5rem;
          color: rgb(230, 49, 49);
          font-weight: bold;
          margin-top: 20px;
          margin-left: 10px;
        }
        .colright {
          height: 100vh;
          background-color: black;
          position: relative;
        }
        .banner {
          width: 100%;
          height: 100vh;
          overflow: hidden;
          display: flex;
        }

        .banner video {
          position: absolute;
          top: 0;
          left: 0;
          object-fit: cover;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        video[poster] {
          filter: brightness(50%);
        }
        .play-button {
          height: 80px;
          width: 80px;
          display: block;
          z-index: 999999999;
          overflow: hidden;
          position: absolute;
          bacground-color: black;
          left: 45%;
          top: 45%;
        }
        .left {
          height: 100%;
          float: left;
          background-color: #fff;
          width: 36%;
          -webkit-transition: all 0.25s ease;
          transition: all 0.25s ease;
          overflow: hidden;
        }
        .triangle-1 {
          -webkit-transform: translate(0, -100%);
                  transform: translate(0, -100%);
        }
        .triangle-2 {
          -webkit-transform: translate(0, 100%);
                  transform: translate(0, 100%);
        }
        .triangle-1,
        .triangle-2 {
          position: absolute;
          top: 0;
          right: 0;
          background-color: transparent;
          width: 0;
          height: 0;
          border-right: 300px solid #c0392b;
          border-top: 150px solid transparent;
          border-bottom: 150px solid transparent;
          -webkit-transition: -webkit-transform 0.25s ease;
          transition: -webkit-transform 0.25s ease;
          transition: transform 0.25s ease;
          transition: transform 0.25s ease, -webkit-transform 0.25s ease;
        }
        .right {
          height: 100%;
          float: right;
          width: 36%;
          background-color: #fff;
          -webkit-transition: all 0.25s ease;
          transition: all 0.25s ease;
        }
        .paused .left {
          width: 50%;
        }
        .paused .right {
          width: 50%;
        }
        .paused .triangle-1 {
          -webkit-transform: translate(0, -50%);
                  transform: translate(0, -50%);
        }
        .paused .triangle-2 {
          -webkit-transform: translate(0, 50%);
                  transform: translate(0, 50%);
        }
      ]
      
      `}</style>
    </Default>
  )
}

export default Login