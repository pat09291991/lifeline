import React from 'react'
import Meta from '../components/meta'
import Nav from '../components/nav'

export const Default = ({ children, meta }) => {
  return (
    <div>
      <Meta props={meta} />
      <Nav />
      {children}
      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin />
    </div>
  )
}

export default Default
