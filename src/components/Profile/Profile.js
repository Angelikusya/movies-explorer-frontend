import React, { useState, useContext, useEffect } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile({ editUser, noticeProfile, logout, isLoading }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [edit, setEdit] = useState(false);
    const [formValid, setFormValid] = useState(false);
  

    useEffect(() => {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }, [currentUser]);
    
    const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  
    const isNameValid = ({name}) => {
        return Boolean(typeof name === 'string' && name.length >= 2);
    };

    const isEmailValid = ({email}) => {
        return Boolean(emailRegex.test(email));
      };
  
    const validateForm = ({name, email}) => {
        const emailValidation = isEmailValid({email});
        const nameValidation = isNameValid({name})
        return Boolean(emailValidation && nameValidation);
    };
  
    useEffect(() => {
      const isFormValid = Boolean(validateForm({name, email}));
      setFormValid(isFormValid);
    }, [name, email]);
  
    const disabled = validateForm({name, email}) && (name !== currentUser.name || email !== currentUser.email);
  
    const changeName = (e) => {
      setName(e.target.value);
    };
  
    const changeEmail = (e) => {
      setEmail(e.target.value);
    };
  
    const handleEdit = () => {
      setEdit(true);
    };
  
    const handleEditUser = (e) => {
      e.preventDefault();
      editUser({name, email});
      setEdit(false);
    };
  
    const handleExit = () => {
      logout();
    };

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
                            onChange={changeName} 
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
                            onChange={changeEmail}
                        />
                    </div>
                    <p className='profile__form-error-contaiter'>
                        <span className='profile__form-error'>{noticeProfile}</span>
                    </p>
                    <button className='profile__change' onClick={handleEdit} disabled={!disabled || isLoading}>Редактировать</button>
                    <Link className="profile__exit" to='/' onClick={handleExit}>Выйти из аккаунта</Link>

                    {/* {isEdited ? ( 
                        <button className={`profile__button ${isDisabled || isLoading ? 'profile__button profile__button_disabled' : ''}`} type='submit'>Сохранить</button> ) : ( <div className="profile__change" onClick={() => setIsEdited(true)}>Редактировать</div>)}
                    {isEdited ? (
                    <Link className="profile__exit_disabled" to='/'>Выйти из аккаунта</Link> ) : (
                    <Link className="profile__exit" to='/' onClick={logout}>Выйти из аккаунта</Link> )} */}
                </form>
            </section>
        </main>
    )
}

export default Profile;

