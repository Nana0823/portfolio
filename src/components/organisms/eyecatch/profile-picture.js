import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import YokosukaImage from '../../atoms/images/yokosuka2.png'
import Himawari from '../../atoms/images/himawari2.png'
import '../../../styles/profile.css'
export default class ProfilePicture extends Component {
    render() {
        return (
            <div class='picture'>
                <img class='sky' src={YokosukaImage} style={{ borderRadius: '5px', borderCollapse: 'separate' }} />
                <div>
                    <Image src={Himawari} size='small' circular style={{ margin: '0 auto', width: '40%', maxWidth: '40%', height: 'auto' }} />
                    <p style={{ textAlign: 'center', color: 'white', fontFamily: 'Courier', padding: '2%', fontSize: '3vw' }}>Nanako Ohno</p>
                </div>
            </div>
        )
    }
}