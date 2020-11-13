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

// createdAt: "2020-04-17T17:25:58.616Z"
// likes: (11) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// link: "https://avatars.mds.yandex.net/get-pdb/202366/454455e8-1665-4dca-bf63-207efd51e0d7/s1200"
// name: "Тигруша 2"
// owner:
//     about: "Охота и рыбалка"
// avatar: "https://avatars.mds.yandex.net/get-pdb/202366/454455e8-1665-4dca-bf63-207efd51e0d7/s1200"
// cohort: "cohort10"
// name: "Тигруша"
// _id: "ebd5818b69420092f498d150"
// __proto__: Object
// _id: "5e99e6a669fae7001f72cfb4"