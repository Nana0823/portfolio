import React, { Component } from 'react'
import { Input, Button, Segment, Responsive } from 'semantic-ui-react'
import SearchTheme from '../../molecules/blog-list/search-theme'
import RefineTheme from '../../molecules/blog-list/refine-theme'

const categories = [
    { key: 1, text: 'ブログ' },
    { key: 2, text: '学び' },
    { key: 3, text: '暮らし' },
    { key: 4, text: 'メモ' },
];
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