import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'gatsby'
export default class HeaderMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: props.activeItem
        }
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        return (
            <div style={{ backgroundColor: 'black' }}>
                <Segment inverted size='tiny'>
                    <Menu inverted pointing secondary>
                        <Link to='/'>
                            <Menu.Item
                                name='HOME'
                                active={this.state.activeItem === 'HOME'}
                                onClick={this.handleItemClick}
                            />
                        </Link>
                        <Link to='blog-list'>
                            <Menu.Item
                                name='BLOG'
                                active={this.state.activeItem === 'BLOG'}
                                onClick={this.handleItemClick}
                            />
                        </Link>
                        <Link to='profile-page'>
                            <Menu.Item
                                name='PROFILE'
                                active={this.state.activeItem === 'PROFILE'}
                                onClick={this.handleItemClick}
                            />
                        </Link>
                    </Menu>
                </Segment>
            </div>
        )
    }
}
