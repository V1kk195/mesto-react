import React from 'react';
import PopupWithForm from "../popupWithForm/PopupWithForm";

function EditAvatarPopup(props) {
    const [link, setLink] = React.useState('');
    const buttonRef = React.useRef();
    const inputRef = React.useRef();
    const [errors, setErrors] = React.useState({name: '', description: ''});
    const [formValid, setFormValid] = React.useState(false);
    const [linkValid, setLinkValid] = React.useState(false);


    React.useEffect(() => {
        const validateField = (fieldName, fieldValue, field) => {
            if(fieldValue.trim() === '') {
                setErrors((errs) => ({...errs, [fieldName]: 'Это обязательное поле'}));
                setLinkValid(false);
                return false;
            }
            if(field.validity.typeMismatch) {
                setErrors((errs) => ({...errs, [fieldName]: 'Здесь должна быть ссылка'}));
                setLinkValid(false);
                return false;
            }
            setErrors((errs) => ({...errs, [fieldName]: ''}));
            setLinkValid(true);
            return true;
        }

        validateField('link', link, inputRef.current);
    }, [link])

    React.useEffect(() => {
        const validateForm = () => {
            if(linkValid) {
                return setFormValid(true);
            }
            return setFormValid(false);
        }

        validateForm();
    }, [linkValid])


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

    const clearInput = () => {
        setLink('');
    }

    return (
        <PopupWithForm title="Изменить аватар" name="avatar" isOpen={props.isOpen} onClose={handleClose} onSubmit={handleSubmit} >
            <input ref={inputRef} value={link} type="URL" name="link" id="link" className="popup__input field-not-clickable"
                   placeholder="Ссылка на картинку" onChange={handleChange} />
            <span className="error-message" id="error-link">
                {errors.link || ''}
            </span>
            <button ref={buttonRef} type="submit" className={`button popup__button field-not-clickable ${formValid && "popup__button_active"}`} disabled={!formValid}>+</button>
        </PopupWithForm>
    )
}


export default EditAvatarPopup;