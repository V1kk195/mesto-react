import React from 'react';
import PopupWithForm from "../popupWithForm/PopupWithForm";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const buttonRef = React.useRef();
    const [errors, setErrors] = React.useState({name: '', description: ''});
    const [formValid, setFormValid] = React.useState(false);
    const [nameValid, setNameValid] = React.useState(false);
    const [descriptionValid, setDescriptionValid] = React.useState(false);

    React.useEffect(() => {
        setName(currentUser.name || '');
        setDescription(currentUser.about || '');
    }, [currentUser])

    React.useEffect(() => {
        const validateField = (fieldName, fieldValue) => {
            if(fieldValue.trim() === '') {
                setErrors((errs) => ({...errs, [fieldName]: 'Это обязательное поле'}));
                fieldName === 'name' ? setNameValid(false) : setDescriptionValid(false);
                return false;
            }
            if(!(fieldValue.trim().length > 1 && fieldValue.trim().length < 30)) {
                setErrors((errs) => ({...errs, [fieldName]: 'Должно быть от 2 до 30 символов'}));
                fieldName === 'name' ? setNameValid(false) : setDescriptionValid(false);
                return false;
            }
            setErrors((errs) => ({...errs, [fieldName]: ''}));
            fieldName === 'name' ? setNameValid(true) : setDescriptionValid(true);
            return true;
        }

        validateField('name', name);
        validateField('description', description);
    }, [name, description])

    React.useEffect(() => {
        const validateForm = () => {
            if(nameValid && descriptionValid) {
                return setFormValid(true);
            }
            return setFormValid(false);
        }

        validateForm();
    }, [nameValid, descriptionValid])


    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleClose = () => {
        props.onClose();
        setName(currentUser.name);
        setDescription(currentUser.about);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onUpdateUser(name, description);
    }

    return (
        <PopupWithForm title="Редактировать профиль" name="user-profile" isOpen={props.isOpen} onClose={handleClose} onSubmit={handleSubmit} >
            <input type="text" value={name} name="username" id="username" required className="popup__input popup__input_type_username field-not-clickable"
                   placeholder="Имя" onChange={handleNameChange} />
            <span className="error-message" id="error-username">
                {errors.name || ''}
            </span>
            <input type="text" value={description} name="about" id="about" required className="popup__input popup__input_type_about field-not-clickable"
                   placeholder="О себе" onChange={handleDescriptionChange} />
            <span className="error-message" id="error-about">
                {errors.description || ''}
            </span>
            <button ref={buttonRef} type="submit" className={`edit-profile__button popup__button field-not-clickable ${formValid && "popup__button_active"}`}
                    id="edit-profile__button" disabled={!formValid} >Сохранить</button>
        </PopupWithForm>
    )
}

export default EditProfilePopup;