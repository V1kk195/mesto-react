import React from 'react';

function Preloader(props) {
    return (
        <div className={`results__waiting preloader-block ${props.isOpen && 'preloader-block_opened'}`}>
            <i className="circle-preloader preloader-block__spinner" />
            <p className="preloader-block__text">Загружаем карточки...</p>
        </div>
    )
}

export default Preloader;