import React from 'react';
import closeIcon from "../../images/close.svg";

function ImagePopup(props) {
    return (
        <div className={`popup ${props.card && 'popup_is-opened'}`}>
            <div className="popup__close-field" onClick={props.onClose} />
            <div className="image-popup__content" id="popup-content">
                <img src={closeIcon} alt="" className="popup__close new-card__close" onClick={props.onClose} />
                <img alt="card" className="image-popup__image" src={props.card} />
            </div>
        </div>
    );
}

export default ImagePopup;