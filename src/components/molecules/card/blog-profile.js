import React, { Component } from 'react'
import { Image, Button, Card, Icon } from 'semantic-ui-react';
import { Link } from 'gatsby'

export default class BlogProfile extends Component {
    render() {
        return (
            <Card>
                <Card.Content textAlign='center'>
                    <Image
                        size='small'
                        src='https://react.semantic-ui.com/images/wireframe/image.png'
                    />
                    <Card.Header>大野奈那子　</Card.Header>
                    <Card.Description>
                        エンジニア志望の大学３年生
                    </Card.Description>
                </Card.Content>
                <Card.Content>
                    <Icon color='teal' name='instagram' size='big' />
                    @Nanako0823
                </Card.Content>
            </Card>
        )
    }
}