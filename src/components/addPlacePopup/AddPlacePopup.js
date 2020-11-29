import React from 'react';
import PopupWithForm from "../popupWithForm/PopupWithForm";

function AddPlacePopup(props) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');
    const buttonRef = React.useRef();
    const linkFieldRef = React.useRef();
    const [errors, setErrors] = React.useState({name: '', description: ''});
    const [formValid, setFormValid] = React.useState(false);
    const [nameValid, setNameValid] = React.useState(false);
    const [linkValid, setLinkValid] = React.useState(false);


    React.useEffect(() => {
        const validateField = (fieldName, fieldValue, field) => {
            if(fieldValue.trim() === '') {
                setErrors((errs) => ({...errs, [fieldName]: 'Это обязательное поле'}));
                fieldName === 'name' ? setNameValid(false) : setLinkValid(false);
                return false;
            }
            if(fieldName === 'name' && !(fieldValue.trim().length > 1 && fieldValue.trim().length < 30)) {
                setErrors((errs) => ({...errs, [fieldName]: 'Должно быть от 2 до 30 символов'}));
                setNameValid(false);
                return false;
            }
            if(fieldName === 'link' && field.validity.typeMismatch) {
                setErrors((errs) => ({...errs, [fieldName]: 'Здесь должна быть ссылка'}));
                setLinkValid(false);
                return false;
            }
            setErrors((errs) => ({...errs, [fieldName]: ''}));
            fieldName === 'name' ? setNameValid(true) : setLinkValid(true);
            return true;
        }

        validateField('name', name);
        validateField('link', link, linkFieldRef.current);
    }, [name, link])

    React.useEffect(() => {
        const validateForm = () => {
            if(nameValid && linkValid) {
                return setFormValid(true);
            }
            return setFormValid(false);
        }

        validateForm();
    }, [nameValid, linkValid])

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
            <input value={name} type="text" name="name" id="imgname" className="popup__input popup__input_type_name"
                   placeholder="Название" onChange={handleNameChange} />
            <span className="error-message" id="error-imgname">
                {errors.name || ''}
            </span>
            <input ref={linkFieldRef} value={link} type="URL" name="link" id="link" className="popup__input popup__input_type_link-url"
                   placeholder="Ссылка на картинку" onChange={handleLinkChange} />
            <span className="error-message" id="error-link">
                {errors.link || ''}
            </span>
            <button ref={buttonRef} type="submit" className={`button popup__button ${formValid && "popup__button_active"}`} disabled={!formValid}>+</button>
        </PopupWithForm>
    )
}

export default AddPlacePopup;