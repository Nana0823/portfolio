import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
export default class HeaderMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'HOME'
        };
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        return (
            <div style={{ maxWidth: '500px', margin: '0 auto', marginBottom: '30px' }}>
                <Menu secondary widths={3}>
                    <Menu.Item
                        name='HOME'
                        active={this.state.activeItem === 'HOME'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='BLOG'
                        active={this.state.activeItem === 'BLOG'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='SKILLS'
                        active={this.state.activeItem === 'SKILLS'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </div>
        )
    }
}