import React, { Component } from 'react'
export default class Introduce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            text: props.text
        };
    }
    render() {
        return (
            <p>{this.state.title}：　　　　{this.state.text}</p>
        )
    }
}