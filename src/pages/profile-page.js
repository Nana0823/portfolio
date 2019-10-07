import React, { Component } from 'react'
import ProfilePicture from '../components/organisms/eyecatch/profile-picture'
import Introduces from '../components/organisms/profile/introduces'
import Timeline from '../components/organisms/timeline/timeline'
import HeaderMenu from '../components/molecules/header/header-menu'
import Layout from '../components/layout'
const activeItem = 'PROFILE'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <HeaderMenu activeItem={activeItem} />
                <Layout>
                    <ProfilePicture />
                    <Introduces />
                    <Timeline />
                </Layout>
            </div>
        )
    }
}