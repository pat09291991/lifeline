import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="footer-wrapper">

      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo"><span className="text-red">Lifeline</span> 16-911</h1>

          <h2>Contact</h2>

          <address>
            Valgosons Building, East Service Road, Sucat, Parañaque City, Philippines <br />
            <p>+63(02) 8839-2520 up to 30</p>
            <p>customercare@lifeline.com.ph </p>
            <a className="footer__btn" href="mailto:customercare@lifeline.com.ph">Email Us</a>
          </address>
        </div>

        <ul className="footer__nav">

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Links</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <Link href="/"><a>Home</a></Link>
              </li>
              <li>
                <Link href="/services"><a>Services</a></Link>
              </li>
              <li>
                <Link href="/clinics"><a>Clinics / Pods</a></Link>
              </li>
              <li>
                <Link href="/blog"><a>Blog</a></Link>
              </li>
              <li>
                <Link href="/academy"><a>Academy</a></Link>
              </li>
              <li>
                <Link href="/login"><a>Log In</a></Link>
              </li>
              <li>
                <Link href="/sign-up"><a>Sign Up</a></Link>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">
              <a>Help</a>
            </h2>

            <ul className="nav__ul">
              <li>
                <Link href="/"><a>Privacy Policy</a></Link>
              </li>

              <li>
                <Link href="/"><a>Terms of Use</a></Link>
              </li>

              <li>
                <Link href="/"><a>Sitemap</a></Link>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2020 Lifeline 16-911. All rights reserved.</p>
        </div>

      </footer>
      <style jsx>
        {`
        .footer-wrapper {
          display: grid;
          grid-template-rows: auto 1fr auto;
          align-items: start;
        }

        .footer {
          display: flex;
          flex-flow: row wrap;
          padding: 30px 30px 20px 30px;
          color: #2f2f2f;
          background-color: #f6f8fa;
          border-top: 1px solid #e5e5e5;
        }

        .footer > * {
          flex:  1 100%;
        }

        .footer__addr {
          margin-right: 1.25em;
          margin-bottom: 2em;
        }

        .footer__logo {
          font-weight: 400;
          text-transform: none;
          font-style:initial !important;
          font-size: 1.5rem;
        }

        .footer__addr h2 {
          margin-top: 1.3em;
          font-size: 15px;
          font-weight: 400;
        }

        .nav__title {
          font-weight: 400;
          font-size: 12px !important;
        }

        .footer address {
          font-style: normal;
          color: #999;
        }

        .footer__btn {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 36px;
          max-width: max-content;
          background-color: rgb(33, 33, 33, 0.07);
          border-radius: 100px;
          color: #2f2f2f;
          line-height: 0;
          margin: 0.6em 0;
          font-size: 1rem;
          padding: 0 1.3em;
        }

        .footer ul {
          list-style: none;
          padding-left: 0;
        }

        .footer li {
          line-height: 2em;
        }

        .footer a {
          color:#bb0a0a;
          text-decoration: none;
        }

        .footer a:hover {
          color:#2817fb;
        }

        .footer__nav {
          display: flex;
          flex-flow: row wrap;
        }

        .footer__nav > * {
          flex: 1 50%;
          margin-right: 1.25em;
        }

        .nav__ul a {
          color: #999;
        }

        .nav__ul--extra {
          column-count: 2;
          column-gap: 1.25em;
        }

        .legal {
          display: flex;
          flex-wrap: wrap;
          color: #999;
        }
          
        .legal__links {
          display: flex;
          align-items: center;
        }

        .heart {
          color: #2f2f2f;
        }

        @media screen and (min-width: 24.375em) {
          .legal .legal__links {
            margin-left: auto;
          }
        }

        @media screen and (min-width: 40.375em) {
          .footer__nav > * {
            flex: 1;
          }
          
          .nav__item--extra {
            flex-grow: 2;
          }
          
          .footer__addr {
            flex: 1 0px !important;
          }
          
          .footer__nav {
            flex: 2 0px !important;
          }
        }
        `}
      </style>
    </div>
  )
}

export default Footer