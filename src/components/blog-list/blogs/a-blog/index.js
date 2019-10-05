import React, { Component } from 'react'
import { Grid, GridColumn, Image, Segment, Link } from 'semantic-ui-react';
import { StaticQuery, graphql } from "gatsby";
export default class Blog extends Component {
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
                                <Grid >
                                    {data.allContentfulBlog.edges.map((blog) => {
                                        return (
                                            <>
                                                <GridColumn width={5}>
                                                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
                                                </GridColumn>
                                                <GridColumn width={11}>
                                                    <h3 style={{ marginBottom: '26px' }}>{blog.node.title}</h3>
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
                            </Segment>
                        )
                    }

                }
            />
        )
    }
}