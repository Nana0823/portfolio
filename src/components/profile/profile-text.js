import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
export default class ProfileText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            text: props.text,
        };
    }
    render() {
        return (
            <div style={{ margin: '25px 0px' }}>
                <h3>{this.state.title}</h3>
                <p>
                    <Image src={this.state.text} />
                </p>
            </div>
        )
    }
}