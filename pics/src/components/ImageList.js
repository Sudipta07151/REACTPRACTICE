import React from 'react'

const ImageList = (props) => {
    let images = props.images.map((image, index) => {
        return (
            <li key={index}><img src={image.urls.regular} alt="" /></li>
        )
    })
    if (!images.length) {
        images = <li>NO IMAGES FOUND!!</li>
    }
    return (
        <div id="ImageList">
            <ul>
                {images}
            </ul>
        </div>
    );
}

export default ImageList;