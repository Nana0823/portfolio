import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
export default class BlogItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: props.picture,
            title: props.title,
            date: props.date,
            text: props.text
        };
    }
    render() {
        return (
            <div style={{ margin: '0 auto', maxWidth: '960px' }}>
                <img alt="トップ画像" src={this.state.picture} style={{ width: '1250px', height: '300px', borderRadius: '5px', borderCollapse: 'separate' }} />
                <h2 style={{ textAlign: 'center' }}>{this.state.title}</h2>
                <p style={{ textAlign: 'center' }}>{this.state.date}</p>
                <Image src={this.state.text} style={{ margin: '0 auto' }} />
            </div>
        )
    }
}