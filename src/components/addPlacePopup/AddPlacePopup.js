import React from 'react';
import PopupWithForm from "../popupWithForm/PopupWithForm";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import formValidator from "../../utils/formValidator";

function AddPlacePopup(props) {
    return (
        <PopupWithForm title="Новое место" name="new" isOpen={props.isOpen} onClose={props.onClose}>
            <input type="text" name="name" id="imgname" className="popup__input popup__input_type_name field-not-clickable" placeholder="Название" />
            <span className="error-message" id="error-imgname" />
            <input type="URL" name="link" id="link" className="popup__input popup__input_type_link-url field-not-clickable" placeholder="Ссылка на картинку" />
            <span className="error-message" id="error-link" />
            <button type="button" className="button popup__button field-not-clickable">+</button>
        </PopupWithForm>
    )
}

export default AddPlacePopup;