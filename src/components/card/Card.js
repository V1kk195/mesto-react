import React from 'react';

function Card(props) {
    return (
        <div className="place-card">
            <div className="place-card">
                <div className="place-card__image" style={{ backgroundImage: `url(${props.image})`}}>
                    <button className="place-card__delete-icon"></button>
                </div>
                <div className="place-card__description">
                    <h3 className="place-card__name">{props.name}</h3>
                    <div className="place-card__like-block">
                        <button className="place-card__like-icon"></button>
                        <p className="place-card__like-counter">{props.likes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;