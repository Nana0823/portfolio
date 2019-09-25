import React, { Component } from 'react'
import HeaderMenu from '../components/header-menu'
import BlogHeader from '../components/blog-list/blog-header'
import Blogs from '../components/blog-list/blogs'
export default class BlogList extends Component {
    render() {
        return (
            <div>
                <HeaderMenu />
                <BlogHeader />
                <Blogs />
            </div>
        )
    }
}