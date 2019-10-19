import React, { Component } from 'react'
import { StaticQuery, graphql } from "gatsby";
import { Segment } from 'semantic-ui-react'

export default class BlogItem extends Component {
    render() {
        return (
            <StaticQuery
                query={graphql`
                     query MyQuery2 {
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
                                {data.allContentfulBlog.edges.map((blog) => {
                                    return (
                                        <>
                                            <h2 style={{ textAlign: 'center' }}>{blog.node.title}</h2>
                                            <p style={{ textAlign: 'center' }}>{blog.node.updatedAt}</p>
                                            <div dangerouslySetInnerHTML={{ __html: blog.node.body.childMarkdownRemark.html }} />
                                        </>
                                    )
                                })}
                            </Segment>
                        )
                    }
                }
            />
        )
    }
}