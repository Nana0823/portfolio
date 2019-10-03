import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'

export default class Tag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        };
    }
    render() {
        return (
            <Checkbox label={this.state.text} style={{ margin: '10px' }} />
        )
    }
}