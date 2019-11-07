import PropTypes from "prop-types"
import React from 'react'

const BlogPicture = ({ link, text }) => (
    <img alt={text} src={link} style={{ width: '1250px', height: '300px', borderRadius: '5px', borderCollapse: 'separate' }} />
)

BlogPicture.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string,
}

BlogPicture.defaultProps = {
    link: `https://react.semantic-ui.com/images/wireframe/square-image.png`,
    text: 'トップ画像',
}
export default BlogPicture