import React, { Component } from 'react'
import { Image, Grid } from 'semantic-ui-react'

export default class RecommendBlogCard extends Component {
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
            <Grid.Column style={{
                border: 'solid', borderWidth: '1px', padding: '0px', backgroundColor: 'white', margin: '10px 10px'
            }}>
                <Image src={this.state.picture} />
                <h4>{this.state.title}</h4>
                <p style={{ marginBottom: '20px' }}>
                    {this.state.text}
                </p>
            </Grid.Column>
        )
    }
}