import React, { Component } from "react"
import Tokyo from '../../atoms/images/tokyo2.png'
import { Responsive } from 'semantic-ui-react'
import '../../../styles/eyecatch.css'


export default class MainEyecatch extends Component {
    render() {
        return (
            <Responsive>
                <div class='photo' style={{ position: 'relative', backgroundColor: '#99CCCC' }}>
                    <img alt='ホーム画面' src={Tokyo} style={{ borderRadius: '5px', borderCollapse: 'separate' }} />
                    <div>
                        <h2 style={{ fontFamily: 'Bookman Old Style', fontSize: '3vw', margin: '0', paddingBottom: '5%' }}>NANAKO OHNO</h2>
                        <p style={{ fontSize: '1.5vw' }}>Welcome to my portfolio site.</p>
                    </div>
                </div>
            </Responsive>
        )
    }
}