import React, { Component } from "react"
import HeaderMenu from '../components/molecules/header/header-menu'
import RecommendBlog from '../components/organisms/blog/recommend-blog'
import Layout from '../components/layout'
import MainEyecatch from '../components/organisms/eyecatch/main-eyecatch'

const activeItem = 'HOME'
export default class BlogPage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <MainEyecatch />
          <RecommendBlog />
        </Layout>
      </div>
    )
  }
}