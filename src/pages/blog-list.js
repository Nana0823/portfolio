import React, { Component } from 'react'
import HeaderMenu from '../components/header-menu'
import Blogs from '../components/blog-list/blogs'

const blog = 'black'
export default class BlogList extends Component {
    render() {
        return (
            <div>
                <HeaderMenu blog={blog} />
                <Blogs />
            </div>
        )
    }
}