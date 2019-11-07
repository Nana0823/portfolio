import React, { Component } from 'react'
import { graphql } from "gatsby"
import RecentPosts from '../organisms/blog/recent-posts'
import RecommendBlog from '../organisms/blog/recommend-blog'
import BlogProfile from '../molecules/card/blog-profile'
import BlogPicture from '../atoms/blog-picture'
import Layout from '../layout'
import { Grid, GridColumn, Segment, Responsive } from 'semantic-ui-react';
export default ({ data }) => {
    const post = data.contentfulBlog
    return (
        <Layout activeItem='BLOG'>
            <div style={{ margin: '0 auto', maxWidth: '960px' }}>
                <BlogPicture />
                <Responsive minWidth={710}>
                    <Grid>
                        <GridColumn width={12}>
                            <Segment>
                                <h2 style={{ textAlign: 'center' }}>{post.title}</h2>
                                <p style={{ textAlign: 'center' }}>{post.updatedAt}</p>
                                <div dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
                            </Segment>
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
                    <Segment>
                        <h2 style={{ textAlign: 'center' }}>{post.title}</h2>
                        <p style={{ textAlign: 'center' }}>{post.updatedAt}</p>
                        <div dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
                    </Segment>
                    <Segment>
                        <h3 style={{ textAlign: 'center' }}>オススメの記事</h3>
                        <RecommendBlog />
                    </Segment>
                    <RecentPosts />
                    <BlogProfile />
                </Responsive>
            </div>
        </Layout>
    )
}
export const query = graphql`
  query($title: String!) {
    contentfulBlog( title: { eq: $title }) {
        body {
            childMarkdownRemark {
                html
            }
        }
        title
        updatedAt
        description {
            description
        }
    }
  }
`