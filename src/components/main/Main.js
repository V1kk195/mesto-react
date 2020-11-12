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

            {props.children}

        </main>
    );
}

export default Main;