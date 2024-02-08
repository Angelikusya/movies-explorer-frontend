import './Login.css';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login({onLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);


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
        if ( emailError || passwordError) {
            return;
        } else {
            onLogin({ email, password });
        }
    }

    return (
        <main>
            <section className='login'>
                <div className='login__header'>
                    <Link className='login__logo' to='/'></Link>
                    <h1 className='login__greeting'>Рады видеть!</h1>
                </div>
                <form className='login__form' onSubmit={handleSubmit} noValidate>
                    <p className='login__text'>E-mail</p>
                    <input
                        id="email-input"
                        type="email"
                        className={`login__input ${emailError ? 'login__input_error' : ''}`}
                        placeholder="Введите Ваш Email"
                        minLength="2"
                        maxLength="40"
                        required
                        value={email}
                        onChange={handleEmail}
                    />
                    {emailError && <div className='login__form-error_active'>Что-то пошло не так...</div>}
                    <p className='login__text'>Пароль</p>
                    <input
                        id="password-input"
                        type="password"
                        className={`login__input ${passwordError ? 'login__input_error' : ''}`}
                        placeholder="Введите Ваш пароль"
                        minLength="6"
                        maxLength="40"
                        required
                        value={password}
                        onChange={handlePassword}
                    />
                    {passwordError && <div className='login__form-error_active'>Что-то пошло не так...</div>}
                    <button className="login__button" type='submit'>Войти</button>
                    <Link to="/signup" className="login__question">Еще не зарегистрированы? <span className="login__link">Регистрация</span></Link>
                </form>
            </section>
        </main>
    )
}

export default Login;
