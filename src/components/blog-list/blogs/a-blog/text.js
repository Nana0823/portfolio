import React, { Component } from 'react'

export default class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogItem: props.blogItem
        };
    }
    render() {
        return (
            <p>
                {this.state.blogItem.text}
            </p>
        )
    }
}