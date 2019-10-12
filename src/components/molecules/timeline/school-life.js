import React, { Component } from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class SchoolLife extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.date,
            name: props.name,
            text: props.text,
            picture: props.picture
        };
    }
    render() {
        return (
            <VerticalTimelineElement
                date={this.state.date}
                iconStyle={{ background: 'gray' }}
            >
                <h3>{this.state.name}</h3>
                {this.state.text}
                <p>
                    <img src={(this.state.picture)} />
                </p>
            </VerticalTimelineElement>
        )
    }
}