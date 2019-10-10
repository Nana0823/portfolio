import React, { Component } from 'react'
import { Grid, Responsive, Image } from 'semantic-ui-react';
import { StaticQuery, graphql } from "gatsby";

export default class RecommendBlogCard extends Component {
    render() {
        return (
            <StaticQuery
                query={graphql`
                     query MyQuery4 {
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
                                {data.allContentfulBlog.edges.map((blog) => {
                                    return (
                                        <>
                                            <Grid.Column style={{
                                                border: 'solid', borderWidth: '1px', padding: '0px', backgroundColor: 'white', margin: '0px 10px'
                                            }}>
                                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                                <h4>{blog.node.title}</h4>
                                                <p style={{ marginBottom: '20px' }}>
                                                    {blog.node.description.description}
                                                </p>
                                            </Grid.Column>
                                        </>
                                    )
                                })}
                            </div>
                        )
                    }
                }
            />
        )
    }
}
