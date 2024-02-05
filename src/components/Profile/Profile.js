import React from 'react'
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {

    return (
        <main>
            <section className='profile'>
                <h1 className='profile__greeting'>Привет, Виталий!</h1>

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
                    <button className="profile__change" type='submit'>Редактировать</button>
                    <Link className="profile__exit" to='/'>Выйти из аккаунта</Link>
                </form>
            </section>
        </main>
    )
}

export default Profile;
