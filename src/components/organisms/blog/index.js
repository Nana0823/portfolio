import React, { Component } from 'react'
import BlogFooter from '../../molecules/footer/blog-footer'
import BlogItem from './blog'
import RecommendBlog from './recommend-blog'
import BlogProfile from '../../organisms/card/blog-profile'
import BlogPicture from '../../atoms/blog-picture'
import { Grid, GridColumn } from 'semantic-ui-react';

export default class Blog extends Component {
    render() {
        return (
            <div style={{ margin: '0 auto', maxWidth: '960px' }}>
                <BlogPicture />
                <Grid>
                    <GridColumn width={12}>
                        <BlogItem />
                        <RecommendBlog />
                        <BlogFooter />
                    </GridColumn>
                    <GridColumn width={4}>
                        <BlogProfile />
                    </GridColumn>
                </Grid>
            </div>
        )
    }
}