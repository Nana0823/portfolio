import React, { Component } from "react"
import HeaderMenu from '../components/molecules/header/header-menu'
import RecommendBlog from '../components/organisms/blog/recommend-blog'
import Layout from '../components/layout'
import Tokyo from '../components/atoms/images/tokyo2.png'

const activeItem = 'HOME'
export default class BlogPage extends Component {
  render() {
    return (
      <div>
        <HeaderMenu activeItem={activeItem} />
        <div style={{ position: 'relative', backgroundColor: '#99CCCC' }}>
          <img alt='ホーム画面' src={Tokyo} style={{ borderRadius: '5px', borderCollapse: 'separate' }} />
          <div style={{ position: 'absolute', top: '300px', left: '700px' }}>
            <h2 style={{ fontFamily: 'Bookman Old Style' }}>NANAKO OHNO</h2>
            <p>Welcome to my portfolio site.</p>
          </div>
        </div>
        <Layout>
          <RecommendBlog />
        </Layout>
      </div>
    )
  }
}