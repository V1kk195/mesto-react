import React from 'react';
import closeIcon from "../../images/close.svg";

function PopupWithForm(props) {
    const formName = props.name;
    const formTitle = props.title;
    const isOpen = props.isOpen;

    return (
        <div className={`popup popup_type_${formName} ${isOpen && 'popup_is-opened'}`}>
            <div className="popup__close-field" onClick={props.onClose} />
            <div className="popup__content" id="popup-content">
                <img src={closeIcon} alt="" className="popup__close new-card__close" onClick={props.onClose} />
                <div className="popup__form-container">
                    <h3 className="popup__title">{formTitle}</h3>
                    <form className="popup__form" id="popup" name={formName} onSubmit={props.onSubmit}>
                        {props.children}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PopupWithForm;