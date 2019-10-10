/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import 'semantic-ui-css/semantic.min.css'
import Footer from './molecules/footer/footer'
import HeaderMenu from './molecules/header/header-menu'
import "./layout.css"
import { Responsive } from 'semantic-ui-react'

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#99CCCC' }}>
      <HeaderMenu>
        {children}
      </HeaderMenu>
      <Responsive minWidth={860} style={{ paddingTop: '30px' }}>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
      </Responsive>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
