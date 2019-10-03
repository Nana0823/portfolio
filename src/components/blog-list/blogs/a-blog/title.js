import React, { Component } from 'react'
import { Link } from "gatsby"

export default class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogItem: props.blogItem
        };
    }
    render() {
        return (
            <Link to={this.state.blogItem.title.page}>
                <h3 style={{ marginBottom: '26px' }}>{this.state.blogItem.title.name}</h3>
            </Link>
        )
    }
}