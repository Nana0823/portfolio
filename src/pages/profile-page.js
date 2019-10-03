import React, { Component } from 'react'
import HeaderMenu from '../components/header-menu'
import Profile from '../components/profile'
import Footer from '../components/footer'

const profile = "black"
export default class ProfilePage extends Component {
    render() {
        return (
            <div>
                <HeaderMenu profile={profile} />
                <div style={{ margin: '0 auto', maxWidth: '960px' }}>
                    <Profile />
                </div>
                <Footer />
            </div>
        )
    }
}