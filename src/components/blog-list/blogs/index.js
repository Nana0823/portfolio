import React, { Component } from 'react'
import Blog from './blog'

const blogItems = [
    {
        image: { name: 'https://react.semantic-ui.com/images/wireframe/image.png', page: 'blog-list' },
        date: '日付',
        title: { name: 'タイトル', page: 'blog-list' },
        text: '本文'
    },
    {
        image: { name: 'https://react.semantic-ui.com/images/wireframe/image.png', page: 'blog-list' },
        date: '日付',
        title: { name: 'タイトル', page: 'blog-list' },
        text: '本文'
    },
    {
        image: { name: 'https://react.semantic-ui.com/images/wireframe/image.png', page: 'blog-list' },
        date: '日付',
        title: { name: 'タイトル', page: 'blog-list' },
        text: '本文'
    },
]

export default class Blogs extends Component {
    render() {
        return (
            <div>
                {blogItems.map((blogItem) => {
                    return (
                        <Blog
                            key={blogItem.title}
                            blogItem={blogItem} />
                    )
                })}
            </div>
        )
    }
}