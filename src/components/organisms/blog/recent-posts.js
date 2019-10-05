import React, { Component } from 'react'
import { Item, Segment } from 'semantic-ui-react'

export default class RecentPosts extends Component {
    render() {
        return (
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <Item.Content verticalAlign='middle' header='タイトル' meta='日付' />
                    </Item>
                    <Item>
                        <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <Item.Content verticalAlign='middle' header='タイトル' meta='日付' />
                    </Item>
                    <Item>
                        <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <Item.Content verticalAlign='middle' header='タイトル' meta='日付' />
                    </Item>
                </Item.Group>
            </Segment>
        )
    }
}