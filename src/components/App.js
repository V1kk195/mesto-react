import React from 'react';

import Header from "./header/Header";
import Main from "./main/Main";


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
        console.log('edit profile clicked');
        // document.querySelector('.popup_type_user-profile').classList.add('popup_is-opened');
    }

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
        console.log('add card clicked');

        // document.querySelector('.popup_type_new').classList.add('popup_is-opened');
    }

    return (
        <>
          <Header />
          <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              isEditProfilePopupOpen={isEditProfilePopupOpen}
              isAddPlacePopupOpen={isAddPlacePopupOpen}
          />
        </>
    );
}

export default App;
