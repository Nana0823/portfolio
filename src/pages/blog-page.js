import React, { Component } from 'react'
import HeaderMenu from '../components/header-menu'
import Blog from '../components/organisms/blog/index'
import Footer from '../components/footer'

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