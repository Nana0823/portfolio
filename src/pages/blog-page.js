import React, { Component } from 'react'
import Blog from '../components/organisms/blog/index'
import Layout from '../components/layout'

export default class BlogPage extends Component {
    render() {
        return (
            <div>
                <Layout activeItem='BLOG'>
                    <Blog />
                </Layout>
            </div>
        )
    }
}