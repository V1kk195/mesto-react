import React from 'react';
import Api from '../../utils/api';

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Api.getUserInfo()
            .then(data => {
                if(!data.name) return Promise.reject(data.message);
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch(err => {
                console.log(err);
                return err;
            })
    }, []);

    React.useEffect(() => {
        Api.getInitialCards()
            .then(data => {
                if(!Array.isArray(data)) return  Promise.reject(data.message);
                setCards(data);
            })
            .catch(err => {
                console.log(err);
                return err;
            })
    }, []);

    return (
        <main>
            <div className="profile root__section">
                <div className="user-info">
                    <div className="user-info__photo" style={{ backgroundImage: `url(${userAvatar})` }}></div>
                    <div className="user-info__data">
                        <h1 className="user-info__name">{userName}</h1>
                        <p className="user-info__job">{userDescription}</p>
                        <button className="button user-info__edit-button" onClick={props.onEditProfile}>Edit</button>
                    </div>

                    <button className="button user-info__button" onClick={props.onAddPlace}>+</button>
                </div>
            </div>

            <div className="places-list root__section">
                {cards.map((card, i) => (
                    <div className="place-card" key={card._id}>
                        <div className="place-card">
                            <div className="place-card__image" style={{ backgroundImage: `url(${card.link})`}}>
                                <button className="place-card__delete-icon"></button>
                            </div>
                            <div className="place-card__description">
                                <h3 className="place-card__name">{card.name}</h3>
                                <div className="place-card__like-block">
                                    <button className="place-card__like-icon"></button>
                                    <p className="place-card__like-counter">{card.likes.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {props.children}

        </main>
    );
}

export default Main;