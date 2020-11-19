import React from 'react';
import PopupWithForm from "../popupWithForm/PopupWithForm";
import formValidator from "../../utils/formValidator";


function EditAvatarPopup(props) {
    const [link, setLink] = React.useState('');
    const buttonRef = React.useRef();
    const inputRef = React.useRef();

    const handleChange = () => {
        setLink(inputRef.current.value);
    }

    const handleClose = () => {
        props.onClose();
        clearInput();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onUpdateAvatar(link);
        clearInput();
    }

    const  clearInput = () => {
        setLink('');
    }

    return (
        <PopupWithForm title="Изменить аватар" name="avatar" isOpen={props.isOpen} onClose={handleClose} onSubmit={handleSubmit} >
            <input ref={inputRef} type="URL" name="link" id="link" className="popup__input field-not-clickable"
                   placeholder="Ссылка на картинку" onChange={handleChange} />
            <span className="error-message" id="error-link" />
            <button ref={buttonRef} type="submit" className="button popup__button field-not-clickable">+</button>
        </PopupWithForm>
    )
}


export default EditAvatarPopup;