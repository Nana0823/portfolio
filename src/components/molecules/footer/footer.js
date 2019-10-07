import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
export default class Footer extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'black', color: 'white', marginTop: '30px', padding: '40px' }}>
                <div style={{ maxWidth: '200px', margin: '0 auto' }}>
                    <Icon name='mail' />nanako.ohno.2f@gmail.com
                    <Icon name='instagram' />@nanako0823
                </div>
            </div>
        )
    }
}