import React, { Component } from 'react'
import { Grid, GridColumn, Image, Segment, Responsive, Card } from 'semantic-ui-react';
import { StaticQuery, graphql, Link } from "gatsby";
export default class BlogCard extends Component {
    render() {
        return (
            <StaticQuery
                query={graphql`
                     query MyQuery {
                        allContentfulBlog {
                            edges {
                                node {
                                    body {
                                        childMarkdownRemark {
                                            html
                                        }
                                    }
                                    title
                                    updatedAt
                                    description {
                                        description
                                    }
                                }
                            }
                        }
                    }
                     `
                }
                render={
                    data => {
                        return (
                            <Segment>
                                <Responsive minWidth={600}>
                                    <Grid>
                                        {data.allContentfulBlog.edges.map((blog) => {
                                            return (
                                                <>
                                                    <GridColumn width={5}>
                                                        <Link to='blog-page'>
                                                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
                                                        </Link>
                                                    </GridColumn>
                                                    <GridColumn width={11}>
                                                        <Link to='blog-page'>
                                                            <h3 style={{ marginBottom: '26px' }}>{blog.node.title}</h3>
                                                        </Link>
                                                        <p>
                                                            {blog.node.updatedAt}
                                                        </p>
                                                        <p>
                                                            {blog.node.description.description}
                                                        </p>
                                                    </GridColumn>
                                                </>
                                            )
                                        })}
                                    </Grid>
                                </Responsive>
                                <Responsive maxWidth={600}>
                                    <Grid>
                                        <Grid.Row columns={2}>
                                            {data.allContentfulBlog.edges.map((blog) => {
                                                return (
                                                    <>
                                                        <Grid.Column style={{ margin: '10px 0px' }}>
                                                            <Card>
                                                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped ui={false} />
                                                                <Card.Content>
                                                                    <Link to='blog-page'>
                                                                        <Card.Header>{blog.node.title}</Card.Header>
                                                                    </Link>
                                                                    <Card.Meta>
                                                                        <span>{blog.node.updatedAt}</span>
                                                                    </Card.Meta>
                                                                </Card.Content>
                                                            </Card>
                                                        </Grid.Column>
                                                    </>
                                                )
                                            })}
                                        </Grid.Row>
                                    </Grid>
                                </Responsive>
                            </Segment>
                        )
                    }
                }
            />
        )
    }
}
