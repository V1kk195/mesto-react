import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const isOwner = props.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    const handleClick = (e) => {
        props.onCardClick(e.target.style.backgroundImage.slice(4, -1).replace(/['"]/g, ""));
    }

    const handleLikeClick = () => {
        props.onCardLike(props.card);
    }

    const handleDeleteClick = () => {
        props.onCardDelete(props.card);
    }

    return (
        <div className="place-card" onClick={handleClick}>
            <div className="place-card">
                <div className="place-card__image" style={{ backgroundImage: `url(${props.image})`}}>
                    <button className={`place-card__delete-icon ${isOwner && "place-card__delete-icon_visible"}`} onClick={handleDeleteClick} />
                </div>
                <div className="place-card__description">
                    <h3 className="place-card__name">{props.name}</h3>
                    <div className="place-card__like-block">
                        <button className={`place-card__like-icon ${isLiked && "place-card__like-icon_liked"}`} onClick={handleLikeClick} />
                        <p className="place-card__like-counter">{props.likes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;