import React, { Component } from 'react'
import Blog from './a-blog'
import Theme from './side-menu'
import BlogHeader from '../blog-header'
import { Grid, Segment, GridColumn, Responsive } from 'semantic-ui-react';

const blogItems = [
    {
        image: { name: 'https://react.semantic-ui.com/images/wireframe/image.png', page: 'blog-list' },
        date: '日付',
        title: { name: 'タイトル', page: 'blog-page' },
        text: '本文'
    },
    {
        image: { name: 'https://react.semantic-ui.com/images/wireframe/image.png', page: 'blog-list' },
        date: '日付',
        title: { name: 'タイトル', page: 'blog-page' },
        text: '本文'
    },
    {
        image: { name: 'https://react.semantic-ui.com/images/wireframe/image.png', page: 'blog-list' },
        date: '日付',
        title: { name: 'タイトル', page: 'blog-page' },
        text: '本文'
    },
]
export default class Blogs extends Component {
    render() {
        return (
            <div>
                <Responsive minWidth={860}>
                    <Grid style={{ margin: '0 auto', maxWidth: '1000px' }}>
                        <GridColumn width={12}>
                            <BlogHeader />
                            {blogItems.map((blogItem) => {
                                return (
                                    <Segment>
                                        <Blog
                                            key={blogItem.title}
                                            blogItem={blogItem} />
                                    </Segment>
                                )
                            })}
                        </GridColumn>
                        <GridColumn width={4}>
                            <Theme />
                        </GridColumn>
                    </Grid>
                </Responsive>
                <Responsive maxWidth={860}>
                    <div style={{ margin: '0 auto', maxWidth: '1000px' }}>
                        <BlogHeader />
                        {blogItems.map((blogItem) => {
                            return (
                                <Segment>
                                    <Blog
                                        key={blogItem.title}
                                        blogItem={blogItem} />
                                </Segment>
                            )
                        })}
                    </div>
                </Responsive>
            </div>
        )
    }
}