import React, { Component } from 'react'
import ProfilePicture from './profile-picture'
import ProfileText from './profile-text'

const profiles = [
    { title: '紹介文', text: 'https://react.semantic-ui.com/images/wireframe/paragraph.png' },
    { title: '学歴', text: 'https://react.semantic-ui.com/images/wireframe/paragraph.png' },
    { title: 'SNS', text: 'https://react.semantic-ui.com/images/wireframe/paragraph.png' },
]
export default class Profile extends Component {
    render() {
        return (
            <div style={{ margin: '0 auto', maxWidth: '960px' }}>
                <ProfilePicture />
                {profiles.map((profile) => {
                    return < ProfileText
                        key={profile.title}
                        title={profile.title}
                        text={profile.text}
                    />;
                })}
            </div>
        )
    }
}