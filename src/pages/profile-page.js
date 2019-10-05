import React, { Component } from 'react'
import ProfilePicture from '../components/organisms/eyecatch/profile-picture'
import Introduces from '../components/organisms/profile/introduces'
import Timeline from '../components/organisms/timeline/timeline'
import HeaderMenu from '../components/molecules/header/header-menu'
import Footer from '../components/molecules/footer/footer'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <HeaderMenu />
                <div style={{ margin: '0 auto', maxWidth: '960px' }}>
                    <ProfilePicture />
                    <Introduces />
                    <Timeline />
                    <Footer />
                </div>
            </div>
        )
    }
}