import React, { Component } from 'react'
import Blog from './a-blog'
import Theme from '../../organisms/side-menu/theme'
import BlogHeader from '../blog-header'
import { Grid, GridColumn, Responsive } from 'semantic-ui-react';

export default class Blogs extends Component {
    render() {
        return (
            <div>
                <Responsive minWidth={860}>
                    <Grid style={{ margin: '0 auto', maxWidth: '1000px' }}>
                        <GridColumn width={12}>
                            <BlogHeader />
                            <Blog />
                        </GridColumn>
                        <GridColumn width={4}>
                            <Theme />
                        </GridColumn>
                    </Grid>
                </Responsive>
                <Responsive maxWidth={860}>
                    <div style={{ margin: '0 auto', maxWidth: '1000px' }}>
                        <BlogHeader />
                        <Blog />
                    </div>
                </Responsive>
            </div>
        )
    }
}