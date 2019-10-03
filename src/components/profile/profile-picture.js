import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import YokosukaImage from '../../images/yokosuka1.png'
export default class ProfilePicture extends Component {
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <img src={YokosukaImage} style={{ width: '1250px', height: '370px', borderRadius: '5px', borderCollapse: 'separate' }} />
                <div style={{
                    position: 'absolute', top: '30px', left: '350px'
                }}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='midium' circular style={{ border: 'solid', borderWidth: '2px' }} />
                    <h2 style={{ textAlign: 'center', color: 'white', fontFamily: 'Courier' }}>Nanako Ohno</h2>
                </div>
            </div>
        )
    }
}