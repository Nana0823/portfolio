import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import { Link } from "gatsby"

export default class Picture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogItem: props.blogItem
        };
    }
    render() {
        return (
            <Link to={this.state.blogItem.image.page}>
                <Image src={this.state.blogItem.image.name} size='small' />
            </Link>
        )
    }
}