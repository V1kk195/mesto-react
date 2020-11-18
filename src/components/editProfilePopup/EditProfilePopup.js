import React from 'react';
import PopupWithForm from "../popupWithForm/PopupWithForm";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import formValidator from "../../utils/formValidator";


function EditProfilePopup(props) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name || '');
        setDescription(currentUser.about || '');
        const validationUser = new formValidator(document.forms['user-profile']);
        validationUser.setEventListeners();
        validationUser.setSubmitButtonState();
    }, [currentUser])

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onUpdateUser(name, description);
    }

    return (
        <PopupWithForm title="Редактировать профиль" name="user-profile" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} >
            <input type="text" value={name} name="username" id="username" required className="popup__input popup__input_type_username field-not-clickable"
                   placeholder="Имя" onChange={handleNameChange} />
            <span className="error-message" id="error-username" />
            <input type="text" value={description} name="about" id="about" required className="popup__input popup__input_type_about field-not-clickable"
                   placeholder="О себе" onChange={handleDescriptionChange} />
            <span className="error-message" id="error-about" />
            <button className="edit-profile__button popup__button field-not-clickable" id="edit-profile__button">Сохранить</button>
        </PopupWithForm>
    )
}

export default EditProfilePopup;