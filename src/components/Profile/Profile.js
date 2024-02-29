import React, { useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile({ editUser, noticeProfile, logout, isLoading }) {

    const currentUser = React.useContext(CurrentUserContext);    // Подписка на контекст
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [isEdited, setIsEdited] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    function handleName(e) {
        const newName = e.target.value;
        setName(newName);
        setIsEdited(true);
        if (newName === currentUser.name || newName.length < 2 || newName.length > 40) {
            setNameError(true);
            setIsDisabled(true);
        } else {
            setNameError(false);
            setIsDisabled(emailError);
        }
    }
    
    function handleEmail(e) {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsEdited(true);
        if (newEmail === currentUser.email || !/^\S+@\S+\.\S+$/.test(newEmail)) {
            setEmailError(true);
            setIsDisabled(true);
        } else {
            setEmailError(false);
            setIsDisabled(nameError);
        }
    }

    function handleEditUser(e) {
        e.preventDefault();

        editUser({name, email});
        setIsEdited(false);
    }
    
    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

    return (
        <main>
            <section className='profile'>
                <h1 className='profile__greeting'>Привет, {currentUser.name}!</h1>
                <form className='profile__form' onSubmit={handleEditUser} noValidate >
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
                            value={name || ''}
                            onChange={handleName}
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
                            value={email || ''}
                            onChange={handleEmail}
                        />
                    </div>
                    <p className='profile__form-error-contaiter'>
                        <span className='profile__form-error'>{noticeProfile}</span>
                    </p>
                    {isEdited ? ( 
                        <button className={`profile__button ${isDisabled || isLoading ? 'profile__button profile__button_disabled' : ''}`} type='submit'>Сохранить</button> ) : ( <button className="profile__change" type='submit'>Редактировать</button>)}
                    {isEdited ? (
                    <Link className="profile__exit_disabled" to='/'>Выйти из аккаунта</Link> ) : (
                    <Link className="profile__exit" to='/' onClick={logout}>Выйти из аккаунта</Link> )}
                </form>
            </section>
        </main>
    )
}

export default Profile;

