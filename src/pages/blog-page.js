import React, { Component } from 'react'
import Blog from '../components/organisms/blog/index'
import Layout from '../components/layout'

const activeItem = 'BLOG'
export default class BlogPage extends Component {
    render() {
        return (
            <div>
                <Layout activeItem={activeItem}>
                    <Blog />
                </Layout>
            </div>
        )
    }
}