import React, { Component } from 'react'
import BlogCard from '../components/molecules/card/blog-card'
import Theme from '../components/organisms/side-menu/theme'
import BlogHeader from '../components/molecules/header/blog-header'
import Layout from '../components/layout'
import { Grid, GridColumn, Responsive, Pagination } from 'semantic-ui-react';

export default class Blogs extends Component {
    render() {
        return (
            <Layout activeItem='BLOG'>
                <Responsive minWidth={860}>
                    <Grid style={{ margin: '0 auto', maxWidth: '1000px' }}>
                        <GridColumn width={12}>
                            <BlogHeader />
                            <BlogCard />
                            <Pagination defaultActivePage={1} totalPages={10} />
                        </GridColumn>
                        <GridColumn width={4}>
                            <Theme />
                        </GridColumn>
                    </Grid>
                </Responsive>
                <Responsive maxWidth={860}>
                    <div style={{ margin: '0 auto', maxWidth: '1000px' }}>
                        <BlogHeader />
                        <BlogCard />
                        <Pagination defaultActivePage={1} totalPages={10} size='mini' boundaryRange='0' />
                    </div>
                </Responsive>
            </Layout>
        )
    }
}