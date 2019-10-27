import React, { Component } from 'react'
import { Item, Segment, Responsive } from 'semantic-ui-react'
import RecentBlogCard from '../../molecules/card/recent-blog-card'

export default class RecentPosts extends Component {
    render() {
        return (
            <Segment>
                <h3 style={{ textAlign: 'center' }}>最新の記事</h3>
                <Responsive minWidth={780}>
                    <Item.Group>
                        <RecentBlogCard />
                    </Item.Group>
                </Responsive>
                <Responsive maxWidth={780}>
                    <RecentBlogCard />
                </Responsive>
            </Segment>
        )
    }
}