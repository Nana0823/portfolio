import React, { Component } from 'react'
import ProfilePicture from './profile-picture'
import Introduce from './introduce'
import History from './history'

export default class Profile extends Component {
    render() {
        return (
            <div style={{ margin: '0 auto', maxWidth: '960px' }}>
                <ProfilePicture />
                <Introduce />
                <History />
            </div>
        )
    }
}