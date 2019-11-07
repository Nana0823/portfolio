import React, { Component } from "react"
import RecommendBlog from '../components/organisms/blog/recommend-blog'
import Layout from '../components/layout'
import MainEyecatch from '../components/organisms/eyecatch/main-eyecatch'

export default class BlogPage extends Component {
  render() {
    return (
      <div>
        <Layout activeItem='HOME'>
          <MainEyecatch />
          <RecommendBlog />
        </Layout>
      </div >
    )
  }
}