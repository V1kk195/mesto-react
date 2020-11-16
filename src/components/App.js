import React from 'react';

import Header from "./header/Header";
import Main from "./main/Main";
import PopupWithForm from "./popupWithForm/PopupWithForm";
import ImagePopup from "./imagePopup/ImagePopup";
import EditProfilePopup from "./editProfilePopup/EditProfilePopup";
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState({});

    React.useEffect(() => {
        api.getUserInfo()
            .then(data => {
                if(!data.name) return Promise.reject(data.message);
                setCurrentUser(data);
            })
            .catch(err => {
                console.log(err);
                return err;
            })
    }, [])

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }

    const handleCardClick = (e) => {
        setSelectedCard(e);
    }

    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }

    return (
        <>
            <CurrentUserContext.Provider value={currentUser}>
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                >

                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

                    <PopupWithForm title="Новое место" name="new" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                        <input type="text" name="name" id="imgname" className="popup__input popup__input_type_name field-not-clickable" placeholder="Название" />
                        <span className="error-message" id="error-imgname" />
                        <input type="URL" name="link" id="link" className="popup__input popup__input_type_link-url field-not-clickable" placeholder="Ссылка на картинку" />
                        <span className="error-message" id="error-link" />
                        <button type="button" className="button popup__button field-not-clickable">+</button>
                    </PopupWithForm>

                    <ImagePopup card={selectedCard} onClose={closeAllPopups} />

                </Main>
            </CurrentUserContext.Provider>
        </>
    );
}

export default App;
