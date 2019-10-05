import React, { Component } from 'react'
import HeaderMenu from '../components/molecules/header/header-menu'
import Blog from '../components/organisms/blog/index'
import Footer from '../components/molecules/footer/footer'

const blog = 'black'
export default class BlogPage extends Component {
    render() {
        return (
            <div>
                <HeaderMenu blog={blog} />
                <Blog />
                <Footer />
            </div>
        )
    }
}