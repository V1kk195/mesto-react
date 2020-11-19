import React from 'react';

import Header from "./header/Header";
import Main from "./main/Main";
import ImagePopup from "./imagePopup/ImagePopup";
import EditProfilePopup from "./editProfilePopup/EditProfilePopup";
import EditAvatarPopup from "./editAvatarPopup/EditAvatarPopup";
import AddPlacePopup from "./addPlacePopup/AddPlacePopup";
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);


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

    React.useEffect(() => {
        api.getInitialCards()
            .then(data => {
                if(!Array.isArray(data)) return  Promise.reject(data.message);
                setCards(data.splice(0,14));
            })
            .catch(err => {
                console.log(err);
                return err;
            })
    }, []);

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

    const handleCardLike = (card) => {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        const updateCard = (newCard) => {
            const newCards = cards.map((c) => c._id === card._id ? newCard : c);
            setCards(newCards);
        }

        if(isLiked) {
            api.removeLike(card._id)
                .then(newCard => {
                    updateCard(newCard);
                })
        } else {
            api.putLike(card._id)
                .then(newCard => {
                    updateCard(newCard);
                })
        }
    }

    const handleCardDelete = (card) => {
        api.deleteCard(card._id)
            .then(() => {
                const newCards = cards.filter(c => c._id !== card._id);
                setCards(newCards);
            })
    }

    const handleUpdateAvatar = (link) => {
        api.editAvatar(link)
            .then(user => {
                if(!user.name) {
                    throw new Error(`${user}`);
                }
                setCurrentUser(user);
                closeAllPopups();
            })
            .catch(err => {
                console.log(err);
                return err;
            })
    }

    const handleUpdateUser = (name, about) => {
        api.editUserInfo(name, about)
            .then(user => {
                if(!user.name) {
                   throw new Error(`${user}`);
                }
                setCurrentUser(user);
                closeAllPopups();
            })
            .catch(err => {
                console.log(err);
                return err;
            })
    }

    const handleAddPlaceSubmit = (name, link) => {
        api.addNewCard(name, link)
            .then((newCard) => {
                if(!newCard.name) {
                    throw new Error(`${newCard}`);
                }
                setCards([...cards, newCard]);
                closeAllPopups();
            })
            .catch(err => {
                console.log(err);
                return err;
            })
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
                    cards={cards}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                >

                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

                    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

                    <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

                    <ImagePopup card={selectedCard} onClose={closeAllPopups} />

                </Main>
            </CurrentUserContext.Provider>
        </>
    );
}

export default App;
