import React, { Component } from 'react'
import Picture from './picture'
import Title from './title'
import Date from './date'
import Text from './text'
import { Grid, GridColumn } from 'semantic-ui-react';
export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogItem: props.blogItem
        };
    }
    render() {
        return (
            <Grid style={{ maxWidth: '960px', margin: '0 auto', borderTop: 'solid', paddingTop: '20px', borderTopWidth: '1px' }}>
                <GridColumn width={4}>
                    <Picture blogItem={this.state.blogItem} />
                </GridColumn>
                <GridColumn width={12}>
                    <Date blogItem={this.state.blogItem} />
                    <Title blogItem={this.state.blogItem} />
                    <Text blogItem={this.state.blogItem} />
                </GridColumn>
            </Grid>
        )
    }
}