import React from 'react';

function ImagePopup(props) {
    return (
        <img alt="card" className="image-popup__image field-not-clickable" src={props.image} />
    );
}

export default ImagePopup;