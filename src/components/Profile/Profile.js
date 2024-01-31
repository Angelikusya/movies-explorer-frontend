import React from 'react'
import './Profile.css';

function Profile() {

    return (
        <div className='profile'>
            <h2 className='profile__greeting'>Привет, Виталий!</h2>

            <form className='profile__form' novalidate>
                <div className='profile__form-flex'>
                    <p className='profile__text'>Имя</p>
                    <input
                        id="name-input"
                        type="text"
                        className='profile__input'
                        placeholder="Введите имя"
                        minLength="2"
                        maxLength="40"
                        required
                    />
                </div>
                <div className='profile__form-flex'>
                    <p className='profile__text'>E-mail</p>
                    <input
                        id="email-input"
                        type="email"
                        className='profile__input'                    
                        placeholder="Введите Email"
                        minLength="2"
                        maxLength="40"
                        required
                    />
                </div>
                <p className="profile__change">Редактировать</p>
                <p className="profile__exit">Выйти из аккаунта</p>
            </form>
        </div>
    )
}

export default Profile;
