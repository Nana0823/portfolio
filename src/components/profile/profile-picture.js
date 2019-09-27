import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
export default class ProfilePicture extends Component {
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <img alt="ヘッダー画像" src='https://react.semantic-ui.com/images/wireframe/image.png' style={{ width: '1250px', height: '370px', borderRadius: '5px', borderCollapse: 'separate' }} />
                <div style={{
                    position: 'absolute', top: '30px', left: '350px'
                }}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='midium' circular style={{ border: 'solid' }} />
                    <h2 style={{ textAlign: 'center' }}>大野　奈那子</h2>
                </div>
            </div>
        )
    }
}