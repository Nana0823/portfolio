import React, { Component } from 'react'
import HeaderMenu from '../components/header-menu'
import Profile from '../components/profile'
export default class ProfilePage extends Component {
    render() {
        return (
            <div>
                <HeaderMenu />
                <div style={{ margin: '0 auto', maxWidth: '960px' }}>
                    <Profile />
                </div>
            </div>
        )
    }
}