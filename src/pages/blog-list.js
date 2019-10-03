import React, { Component } from 'react'
import Layout from '../components/layout'
import BlogHeader from '../components/blog-list/blog-header'
import Blogs from '../components/blog-list/blogs'

const blog = 'black'
export default class BlogList extends Component {
    render() {
        return (
            <Layout blog={blog} >
                <Blogs />
            </Layout>
        )
    }
}