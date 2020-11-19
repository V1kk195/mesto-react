import React from 'react';
import PopupWithForm from "../popupWithForm/PopupWithForm";
import formValidator from "../../utils/formValidator";

function AddPlacePopup(props) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');
    const buttonRef = React.useRef();

    React.useEffect(() => {
        const validationCard = new formValidator(document.forms['new-card'], buttonRef.current);
        validationCard.checkValidityInitial();
        validationCard.setEventListeners();
        validationCard.setSubmitButtonState();
    }, [])

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleLinkChange = (e) => {
        setLink(e.target.value);
    }

    const handleClose = () => {
        props.onClose();
        clearInput();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddPlace(name, link);
        clearInput();
    }

    const clearInput = () => {
        setName('');
        setLink('');
    }

    return (
        <PopupWithForm title="Новое место" name="new-card" isOpen={props.isOpen} onClose={handleClose} onSubmit={handleSubmit} >
            <input value={name} type="text" name="name" id="imgname" className="popup__input popup__input_type_name field-not-clickable"
                   placeholder="Название" onChange={handleNameChange} />
            <span className="error-message" id="error-imgname" />
            <input value={link} type="URL" name="link" id="link" className="popup__input popup__input_type_link-url field-not-clickable"
                   placeholder="Ссылка на картинку" onChange={handleLinkChange} />
            <span className="error-message" id="error-link" />
            <button ref={buttonRef} type="submit" className="button popup__button field-not-clickable">+</button>
        </PopupWithForm>
    )
}

export default AddPlacePopup;