import '../components/css/imageStyle.css'
import React from 'react'
import ImageCard from './ImageCard'

const ImageList = (props) => {
    let images = props.images.map((image) => {
        return (
            <ImageCard key={image.id} image={image} id="ImageCard"/>
        )
    })
    if (!images.length) {
        images = <li>NO IMAGES FOUND!!</li>
    }
    return (
        <div id="ImageList">
            <ul className="imgUL">
                {images}
            </ul>
        </div>
    );
}

export default ImageList;