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
                    <Image src={Himawari} size='small' circular style={{ margin: '0 auto' }} />
                    <h2 style={{ textAlign: 'center', color: 'white', fontFamily: 'Courier', marginTop: '15px' }}>Nanako Ohno</h2>
                </div>
            </div>
        )
    }
}