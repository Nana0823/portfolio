import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

export default class BlogCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: props.picture,
            title: props.title,
            text: props.text
        };
    }
    render() {
        return (
            <div style={{
                border: 'solid', borderWidth: '1px', padding: '0px', margin: '0 14px', backgroundColor: 'white'
            }}>
                <Image src={this.state.picture} />
                <h4>{this.state.title}</h4>
                <p style={{ marginBottom: '20px' }}>
                    {this.state.text}
                </p>
            </div>
        )
    }
}