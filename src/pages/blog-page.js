import React, { Component } from 'react'
import HeaderMenu from '../components/molecules/header/header-menu'
import Blog from '../components/organisms/blog/index'
import Layout from '../components/layout'

const activeItem = 'BLOG'
export default class BlogPage extends Component {
    render() {
        return (
            <div>
                <HeaderMenu activeItem={activeItem} />
                <Layout>
                    <Blog />
                </Layout>
            </div>
        )
    }
}