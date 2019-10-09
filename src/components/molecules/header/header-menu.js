import React, { Component } from 'react'
import { Menu, Segment, Responsive, Icon, Sidebar } from 'semantic-ui-react'
import { Link } from 'gatsby'
import MenuItem from '../../organisms/side-menu/menu-item'

const headerMenuItem = [
    { idx: 1, title: 'HOME', page: '/' },
    { idx: 2, title: 'BLOG', page: 'blog-list' },
    { idx: 3, title: 'PROFILE', page: "profile-page" },
]
export default class HeaderMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: props.activeItem,
            visible: false,
        }
    }
    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })
    handleSidebarHide = () => this.setState({ visible: false })
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        return (
            <div>
                <div style={{ backgroundColor: 'black' }}>
                    <Responsive minWidth={860}>
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
                    </Responsive>
                </div>
                <Responsive maxWidth={860}>
                    <Sidebar.Pushable >
                        <Sidebar
                            as={Menu}
                            direction='left'
                            animation='overlay'
                            icon='labeled'
                            inverted
                            onHide={this.handleSidebarHide}
                            vertical
                            visible={this.state.visible}
                            width='thin'
                        >
                            <Menu.Item as='a' style={{ textAlign: 'left' }}>
                                <Menu.Menu>
                                    {headerMenuItem.map((header) => {
                                        return (
                                            <MenuItem key={header.idx} title={header.title} page={header.page} />
                                        )
                                    })}
                                </Menu.Menu>
                            </Menu.Item>
                        </Sidebar>
                        <Sidebar.Pusher dimmed={this.state.visible}>
                            <div style={{ backgroundColor: 'black' }}>
                                <Segment inverted size='tiny'>
                                    <Icon name='bars' link onClick={this.handleShowClick} />
                                </Segment>
                            </div>
                            <div
                                style={{
                                    margin: `0 auto`,
                                    maxWidth: 920,
                                    padding: `0px 1.0875rem 1.45rem`,
                                    paddingTop: 0,
                                }}
                            >
                                <main style={{ paddingTop: '30px' }}>{this.props.children}</main>
                            </div>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Responsive>
            </div>
        )
    }
}