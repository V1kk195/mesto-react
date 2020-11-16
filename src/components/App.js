import React from 'react';

import Header from "./header/Header";
import Main from "./main/Main";
import Popup from "./popup/Popup";
import ImagePopup from "./imagePopup/ImagePopup";
import api from '../utils/api';


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState(null);

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
    })

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
          <Header />
          <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
          >
              <Popup title="Редактировать профиль" name="user-profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                  <input type="text" name="username" id="username" required className="popup__input popup__input_type_username field-not-clickable" placeholder="Имя" />
                  <span className="error-message" id="error-username"></span>
                  <input type="text" name="about" id="about" required className="popup__input popup__input_type_about field-not-clickable" placeholder="О себе" />
                  <span className="error-message" id="error-about"></span>
                  <button type className="edit-profile__button field-not-clickable" id="edit-profile__button">Сохранить</button>
              </Popup>

              <Popup title="Новое место" name="new" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                  <input type="text" name="name" id="imgname" className="popup__input popup__input_type_name field-not-clickable" placeholder="Название" />
                  <span className="error-message" id="error-imgname" />
                  <input type="URL" name="link" id="link" className="popup__input popup__input_type_link-url field-not-clickable" placeholder="Ссылка на картинку" />
                  <span className="error-message" id="error-link" />
                  <button type className="button popup__button field-not-clickable">+</button>
              </Popup>

              <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          </Main>

        </>
    );
}

export default App;
