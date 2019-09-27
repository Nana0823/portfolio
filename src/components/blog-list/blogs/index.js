import React, { Component } from 'react'
import Blog from './blog'
import Theme from './theme'
import { Grid, Segment, GridColumn } from 'semantic-ui-react';

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
            <Grid style={{ margin: '0 auto', maxWidth: '1100px' }}>
                <GridColumn width={12}>
                    <Segment style={{ maxWidth: '750px', margin: '0 auto' }}>
                        <div>
                            {blogItems.map((blogItem) => {
                                return (
                                    <Blog
                                        key={blogItem.title}
                                        blogItem={blogItem} />
                                )
                            })}
                        </div>
                    </Segment>
                </GridColumn>
                <GridColumn width={4}>
                    <Theme />
                </GridColumn>
            </Grid>
        )
    }
}