import React, { Component } from 'react'
import RecentPosts from './recent-posts'
import BlogItem from './blog'
import RecommendBlog from './recommend-blog'
import BlogProfile from '../../molecules/card/blog-profile'
import BlogPicture from '../../atoms/blog-picture'
import { Grid, GridColumn, Segment, Responsive } from 'semantic-ui-react';

export default class Blog extends Component {
    render() {
        return (

            <div style={{ margin: '0 auto', maxWidth: '960px' }}>
                <BlogPicture />
                <Responsive minWidth={710}>
                    <Grid>
                        <GridColumn width={12}>
                            <BlogItem />
                            <Segment>
                                <h3 style={{ textAlign: 'center' }}>オススメの記事</h3>
                                <RecommendBlog />
                            </Segment>
                            <RecentPosts />
                        </GridColumn>
                        <GridColumn width={4}>
                            <BlogProfile />
                        </GridColumn>
                    </Grid>
                </Responsive>
                <Responsive maxWidth={710}>
                    <BlogItem />
                    <Segment>
                        <h3 style={{ textAlign: 'center' }}>オススメの記事</h3>
                        <RecommendBlog />
                    </Segment>
                    <RecentPosts />
                    <BlogProfile />
                </Responsive>
            </div>
        )
    }
}