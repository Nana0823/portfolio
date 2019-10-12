import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
export default class Footer extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'black', color: 'white', marginTop: '30px', padding: '40px' }}>
                <div style={{ maxWidth: '200px', margin: '0 auto' }}>
                    <a href="mailto:nanako.ohno.2f@gmail.com">
                        <Icon name='mail' />nanako.ohno.2f@gmail.com
                    </a>
                    <a href='https://www.instagram.com/nanako_0823/?hl=ja'>
                        <Icon name='instagram' />nanako0823
                    </a>
                    <p>
                        <a href='https://github.com/Nana0823'>
                            <Icon name='github' />Nana0823
                    </a>
                    </p>
                </div>
            </div>
        )
    }
}