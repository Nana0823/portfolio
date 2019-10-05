import React, { Component } from 'react'
import ProfilePicture from '../organisms/eyecatch/profile-picture'
import Introduces from '../organisms/profile/introduces'
import Timeline from '../organisms/timeline/timeline'

export default class Profile extends Component {
    render() {
        return (
            <div style={{ margin: '0 auto', maxWidth: '960px' }}>
                <ProfilePicture />
                <Introduces />
                <Timeline />
            </div>
        )
    }
}