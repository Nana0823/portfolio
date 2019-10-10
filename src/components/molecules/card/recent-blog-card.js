import React, { Component } from 'react'
import { Item, Responsive, Card, Image } from 'semantic-ui-react';
import { StaticQuery, graphql, Link } from "gatsby";
export default class RecentBlogCard extends Component {
    render() {
        return (
            <StaticQuery
                query={graphql`
                     query MyQuery3 {
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
                            <div>
                                <Responsive minWidth={780} >
                                    <Item.Group >
                                        {data.allContentfulBlog.edges.map((blog) => {
                                            return (
                                                <>
                                                    <Item>
                                                        <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                                        <Link to='blog-page'>
                                                            <Item.Content verticalAlign='middle' header={blog.node.title} meta={blog.node.updatedAt} />
                                                        </Link>
                                                    </Item>
                                                </>
                                            )
                                        })}
                                    </Item.Group>
                                </Responsive>
                                <Responsive maxWidth={780}>
                                    {data.allContentfulBlog.edges.map((blog) => {
                                        return (
                                            <>
                                                <Card>
                                                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped ui={false} />
                                                    <Card.Content>
                                                        <Link to='blog-list'>
                                                            <Card.Header>{blog.node.title}</Card.Header>
                                                        </Link>
                                                        <Card.Meta>
                                                            <span>{blog.node.updatedAt}</span>
                                                        </Card.Meta>
                                                    </Card.Content>
                                                </Card>
                                            </>
                                        )
                                    })}
                                </Responsive>
                            </div>
                        )
                    }
                }
            />
        )
    }
}