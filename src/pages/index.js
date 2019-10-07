import React, { Component } from "react"
import HeaderMenu from '../components/molecules/header/header-menu'
import Layout from '../components/layout'

const activeItem = 'HOME'
export default class BlogPage extends Component {
  render() {
    return (
      <div>
        <HeaderMenu activeItem={activeItem} />
        <Layout>

        </Layout>
      </div>
    )
  }
}