import React from 'react'
import Meta from '../components/meta'
import Nav from '../components/nav'
import Footer from '../components/footer'

export const Default = ({ children, meta, hideNav }) => {
  return (
    <div>
      <Meta props={meta} />
      {!hideNav && <Nav />}
      {children}
      <Footer />
      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" />
      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700&display=swap');
          body {
            font-family: 'Source Sans Pro', sans-serif;
          }
          .text-red {
            color: red;
          }
         
          `}</style>
    </div>
  )
}

export default Default
