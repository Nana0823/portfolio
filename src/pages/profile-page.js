import React, { Component } from 'react'
import ProfilePicture from '../components/organisms/eyecatch/profile-picture'
import Introduces from '../components/organisms/profile/introduces'
import Timeline from '../components/organisms/timeline/timeline'
import Layout from '../components/layout'
const activeItem = 'PROFILE'

export default class Profile extends Component {
    render() {
        return (
            <Layout activeItem='PROFILE'>
                <ProfilePicture />
                <Introduces />
                <Timeline />
            </Layout>
        )
    }
}