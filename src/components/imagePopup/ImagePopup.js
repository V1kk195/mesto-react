import React from 'react';
import closeIcon from "../../images/close.svg";

function ImagePopup(props) {
    return (
        <div className={`popup ${props.card && 'popup_is-opened'}`}>
            <div className="field-not-clickable image-popup__content" id="popup-content">
                <img src={closeIcon} alt="" className="popup__close new-card__close" onClick={props.onClose} />
                <img alt="card" className="image-popup__image field-not-clickable" src={props.card} />
            </div>
        </div>
    );
}

export default ImagePopup;