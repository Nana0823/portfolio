import React, { Component } from 'react'
import { Image, Card, Icon } from 'semantic-ui-react';

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
                    <p>
                        <Icon name='instagram' />
                        Nanako0823
                    </p>
                    <p>
                        <Icon name='github' />
                        Nana0823
                    </p>
                </Card.Content>
            </Card>
        )
    }
}