import React, { Component } from 'react'

export default class Date extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogItem: props.blogItem
        };
    }
    render() {
        return (
            <p>
                {this.state.blogItem.date}
            </p>
        )
    }
}