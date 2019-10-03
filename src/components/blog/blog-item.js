import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
export default class BlogItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            date: props.date,
            text: props.text
        };
    }
    render() {
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>{this.state.title}</h2>
                <p style={{ textAlign: 'center' }}>{this.state.date}</p>
                <Image src={this.state.text} style={{ margin: '0 auto' }} />
            </div>
        )
    }
}