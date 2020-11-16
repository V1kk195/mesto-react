import React from 'react';
import PopupWithForm from "../popupWithForm/PopupWithForm";

function EditProfilePopup(props) {
    return (
        <PopupWithForm title="Редактировать профиль" name="user-profile" isOpen={props.isOpen} onClose={props.onClose}>
            <input type="text" name="username" id="username" required className="popup__input popup__input_type_username field-not-clickable" placeholder="Имя" />
            <span className="error-message" id="error-username" />
            <input type="text" name="about" id="about" required className="popup__input popup__input_type_about field-not-clickable" placeholder="О себе" />
            <span className="error-message" id="error-about" />
            <button type="button" className="edit-profile__button field-not-clickable" id="edit-profile__button">Сохранить</button>
        </PopupWithForm>
    )
}

export default EditProfilePopup;