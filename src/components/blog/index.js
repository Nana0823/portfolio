import React, { Component } from 'react'
import BlogFooter from './blog-footer'
import BlogItem from './blog-item'

const picture = 'https://react.semantic-ui.com/images/wireframe/image.png'
const title = 'タイトル'
const date = '2019/10/20'
const text = 'https://react.semantic-ui.com/images/wireframe/paragraph.png'

export default class Blog extends Component {
    render() {
        return (
            <div style={{ margin: '0 auto', maxWidth: '960px' }}>
                <BlogItem picture={picture}
                    title={title}
                    date={date}
                    text={text}
                />
                <BlogFooter />
            </div>
        )
    }
}