import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "gatsby"

export default class MenuItem extends Component {
    state = {}
    handleItemClick = (name) => this.setState({ activeItem: name })
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            page: props.page
        };
    }
    render() {
        const { activeItem } = this.state
        return (
            <Link to={this.state.page}>
                <Menu.Item
                    name={this.state.title}
                    active={activeItem === (this.state.title)}
                    onClick={this.handleItemClick}
                    style={{ marginTop: '10px', textAlign: 'left' }}
                />
            </Link>
        )
    }
}