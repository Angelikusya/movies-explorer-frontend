import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Register.css';

function Register({onRegister}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    function handleName(e) {
        setName(e.target.value);
        if (e.target.value.length < 2 || e.target.value.length > 40) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    };

    function handleEmail(e) {
        setEmail(e.target.value);
        if (!/^\S+@\S+\.\S+$/.test(e.target.value)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };

    function handlePassword(e) {
        setPassword(e.target.value);
        if (e.target.value.length < 6) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    };

    function handleSubmit(e) {
        e.preventDefault();

        // Валидация формы
        if (nameError || emailError || passwordError) {
            return;
        } else {
            onRegister({ email, password });
        }
    }

    return (
        <main>
            <section className='register'>
                <div className='register__header'>
                    <Link className='register__logo' to='/'></Link>
                    <h1 className='register__greeting'>Добро пожаловать!</h1>
                </div>
                <form className='register__form' onSubmit={handleSubmit} novalidate>
                    <p className='register__text'>Имя</p>
                    <input
                        id="name-input"
                        type="text"
                        className={`register__input ${nameError ? 'register__input_error' : ''}`}
                        placeholder="Введите Ваше имя"
                        minLength="2"
                        maxLength="40"
                        required
                        value={name}
                        onChange={handleName}
                    />
                    {nameError && <div className='register__form-error_active'>Что-то пошло не так...</div>}
                    <p className='register__text'>E-mail</p>
                    <input
                        id="email-input"
                        type="email"
                        className={`register__input ${emailError ? 'register__input_error' : ''}`}
                        placeholder="Введите Ваш Email"
                        minLength="2"
                        maxLength="40"
                        required
                        value={email}
                        onChange={handleEmail}
                    />
                    {emailError && <div className='register__form-error_active'>Что-то пошло не так...</div>}
                    <p className='register__text'>Пароль</p>
                    <input
                        id="password-input"
                        type="password"
                        className={`register__input ${passwordError ? 'register__input_error' : ''}`}
                        placeholder="Введите Ваш пароль"
                        minLength="6"
                        maxLength="40"
                        required
                        value={password}
                        onChange={handlePassword}
                    />
                    {passwordError && <div className='register__form-error_active'>Что-то пошло не так...</div>}
                    <button className="register__button" type='submit'>Зарегистрироваться</button>
                    <Link to="/signin" className="register__question">Уже зарегистрированы? <span className="register__link">Войти</span></Link>
                </form>
            </section>
        </main>
    )
}

export default Register;
