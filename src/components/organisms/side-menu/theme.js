import React, { Component } from 'react'
import { Segment, Responsive } from 'semantic-ui-react'
import SearchTheme from '../../molecules/blog-list/search-theme'
import RefineTheme from '../../molecules/blog-list/refine-theme'

export default class Theme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        };
    }
    render() {
        return (
            <Responsive minWidth={860}>
                <Segment style={{ marginTop: '93px' }}>
                    <SearchTheme />
                    <RefineTheme />
                </Segment>
            </Responsive>
        )
    }
}