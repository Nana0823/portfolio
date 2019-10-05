import React, { Component } from 'react'
import { Image, Segment } from 'semantic-ui-react';
import { Link } from 'gatsby'
export default class BlogProfile extends Component {
    render() {
        return (
            <Segment>
                <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' circular />
                <Link to='profile-page'>
                    <h4 style={{ textAlign: 'center', marginBottom: '10px' }}>大野奈那子</h4>
                </Link>
                <ul>
                    <li>1998年8月生まれ</li>
                    <li>神奈川県出身</li>
                    <li>法政大学在学</li>
                </ul>
            </Segment>
        )
    }
}