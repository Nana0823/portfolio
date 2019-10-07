import React, { Component } from 'react'
import BlogCard from '../components/molecules/card/blog-card'
import Theme from '../components/organisms/side-menu/theme'
import BlogHeader from '../components/molecules/header/blog-header'
import HeaderMenu from '../components/molecules/header/header-menu'
import Layout from '../components/layout'
import { Grid, GridColumn, Responsive } from 'semantic-ui-react';

const activeItem = 'BLOG'
export default class Blogs extends Component {
    render() {
        return (
            <div>
                <HeaderMenu activeItem={activeItem} />
                <Layout>
                    <Responsive minWidth={860}>
                        <Grid style={{ margin: '0 auto', maxWidth: '1000px' }}>
                            <GridColumn width={12}>
                                <BlogHeader />
                                <BlogCard />
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
                        </div>
                    </Responsive>
                </Layout>
            </div>
        )
    }
}