import React, { Component } from 'react'
import { Image, Card, Icon, Responsive, Grid, Segment, GridColumn } from 'semantic-ui-react';
import { Link } from 'gatsby'
import Profile from '../../atoms/images/profile2.png'
export default class BlogProfile extends Component {
    render() {
        return (
            <div>
                <Responsive minWidth={710}>
                    <Card>
                        <Card.Content textAlign='center'>
                            <Image
                                src={Profile}
                            />
                            <Link to='profile-page'>
                                <Card.Header>大野奈那子　</Card.Header>
                            </Link>
                            <Card.Description>
                                エンジニア志望の大学３年生
                            </Card.Description>
                        </Card.Content>
                        <Card.Content>
                            <a href='https://www.instagram.com/nanako_0823/?hl=ja'>
                                <p>
                                    <Icon name='instagram' />
                                    Nanako0823
                                </p>
                            </a>
                            <a href='https://github.com/Nana0823'>
                                <p>
                                    <Icon name='github' />
                                    Nana0823
                                </p>
                            </a>
                        </Card.Content>
                    </Card>
                </Responsive>
                <Responsive maxWidth={710}>
                    <Segment>
                        <Grid>
                            <GridColumn width={4}>
                                <Image src={Profile} />
                            </GridColumn>
                            <GridColumn width={12}>
                                <Link to='profile-page'>
                                    <h5 style={{ marginBottom: '10px' }}>大野奈那子</h5>
                                </Link>
                                エンジニア志望の大学３年生。
                                <p>
                                    <a href='https://www.instagram.com/nanako_0823/?hl=ja'>
                                        <span>
                                            <Icon name='instagram' />
                                            Nanako0823
                                    </span>
                                    </a>
                                    <a href='https://github.com/Nana0823'>
                                        <span style={{ marginLeft: '5px' }}>
                                            <Icon name='github' />
                                            Nana0823
                                    </span>
                                    </a>
                                </p>
                            </GridColumn>
                        </Grid>
                    </Segment>
                </Responsive>
            </div>
        )
    }
}