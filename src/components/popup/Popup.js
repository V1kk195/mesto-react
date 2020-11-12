import React from 'react';
import closeIcon from "../../images/close.svg";

function Popup(props) {
    const formName = props.name;
    const formTitle = props.title;
    const isOpen = props.isOpen;

    return (
        <div className={`popup popup_type_${formName} ${isOpen && 'popup_is-opened'}`}>
            <div className="field-not-clickable popup__content" id="popup-content">
                <img src={closeIcon} alt="" className="popup__close new-card__close" />
                <div className="field-not-clickable">
                    <h3 className="popup__title field-not-clickable">{formTitle}</h3>
                    <form className="popup__form field-not-clickable" id="popup" name={formName}>
                        {props.children}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Popup;