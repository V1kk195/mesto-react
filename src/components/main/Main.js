import React from 'react';
import Popup from "../popup/Popup";

function Main(props) {
    return (
        <main>
            <div className="profile root__section">
                <div className="user-info">
                    <div className="user-info__photo"></div>
                    <div className="user-info__data">
                        <h1 className="user-info__name"></h1>
                        <p className="user-info__job"></p>
                        <button className="button user-info__edit-button" onClick={props.onEditProfile}>Edit</button>
                    </div>

                    <button className="button user-info__button" onClick={props.onAddPlace}>+</button>
                </div>
            </div>

            <div className="places-list root__section" />

            <Popup title="Редактировать профиль" name="user-profile" isOpen={props.isEditProfilePopupOpen}>
                <input type="text" name="username" id="username" required className="popup__input popup__input_type_username field-not-clickable" placeholder="Имя" />
                <span className="error-message" id="error-username"></span>
                <input type="text" name="about" id="about" required className="popup__input popup__input_type_about field-not-clickable" placeholder="О себе" />
                <span className="error-message" id="error-about"></span>
                <button type className="edit-profile__button field-not-clickable" id="edit-profile__button">Сохранить</button>
            </Popup>

            <Popup title="Новое место" name="new" isOpen={props.isAddPlacePopupOpen}>
                <input type="text" name="name" id="imgname" className="popup__input popup__input_type_name field-not-clickable" placeholder="Название" />
                <span className="error-message" id="error-imgname" />
                <input type="URL" name="link" id="link" className="popup__input popup__input_type_link-url field-not-clickable" placeholder="Ссылка на картинку" />
                <span className="error-message" id="error-link" />
                <button type className="button popup__button field-not-clickable">+</button>
            </Popup>

        </main>
    );
}

export default Main;