import React, { Component } from "react"
import Tokyo from '../../atoms/images/tokyo2.png'
import { Responsive } from 'semantic-ui-react'

export default class MainEyecatch extends Component {
    render() {
        return (
            <Responsive>
                <div style={{ position: 'relative', backgroundColor: '#99CCCC' }}>
                    <img alt='ホーム画面' src={Tokyo} style={{ borderRadius: '5px', borderCollapse: 'separate' }} />
                    <div style={{ position: 'absolute', top: '200px', right: '100px' }}>
                        <h2 style={{ fontFamily: 'Bookman Old Style' }}>NANAKO OHNO</h2>
                        <p>Welcome to my portfolio site.</p>
                    </div>
                </div>
            </Responsive>
        )
    }
}