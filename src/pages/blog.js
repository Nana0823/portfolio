import React, { Component } from 'react'
import HeaderMenu from '../components/header-menu'
import Blog from '../components/blog/blog'
export default class BlogPage extends Component {
    render() {
        return (
            <div>
                <HeaderMenu />
                <Blog />
            </div>
        )
    }
}