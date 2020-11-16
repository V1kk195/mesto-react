import React from 'react';
import Api from '../../utils/api';
import Card from "../card/Card";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Main(props) {
    const [cards, setCards] = React.useState([]);
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        Api.getInitialCards()
            .then(data => {
                if(!Array.isArray(data)) return  Promise.reject(data.message);
                setCards(data.splice(0,14));
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
                    <div className="user-info__photo" style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
                    <div className="user-info__data">
                        <h1 className="user-info__name">{currentUser.name}</h1>
                        <p className="user-info__job">{currentUser.about}</p>
                        <button className="button user-info__edit-button" onClick={props.onEditProfile}>Edit</button>
                    </div>

                    <button className="button user-info__button" onClick={props.onAddPlace}>+</button>
                </div>
            </div>

            <div className="places-list root__section">
                {cards.map((card, i) => (
                    <Card key={card._id} image={card.link} name={card.name} likes={card.likes.length} owner={card.owner} onCardClick={props.onCardClick} />
                ))}
            </div>

            {props.children}

        </main>
    );
}

export default Main;