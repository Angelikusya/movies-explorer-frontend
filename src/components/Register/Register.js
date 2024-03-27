import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Register.css';
import { useForm } from 'react-hook-form';
// import Preloader from '../Preloader/Preloader';


function Register ({ onRegister, errorMessage, isLoading }) {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { 
    register, 
    formState: { errors, isValid }, 
    watch 
  } = useForm({ mode: 'onChange' });


  useEffect(() => {
    const subscription = watch(({name, email, password}) => {
      setName(name);
      setEmail(email);
      setPassword(password);
      return () => {
        subscription.unsubscribe();
      }
    })
  }, [watch]);

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    onRegister(name, email, password)
  };

  return (
    <main>
      <section className='register'>
        <div className='register__header'>
          <Link className='register__logo' to='/'></Link>
          <h1 className='register__greeting'>Добро пожаловать!</h1>
        </div>
        <form className='register__form' onSubmit={handleSubmitRegister} noValidate>
          <p className='register__text'>Имя</p>
          <input
            id="name-input"
            type="text"
            value={name}
            className='register__input'
            placeholder="Введите Ваше имя"
            disabled={isLoading}
            {...register('name', {
              required: 'Имя пользователя должно быть заполнено',
              minLength: {
                value: 2,
                message: 'Минимальное количество символов: 2'
              },
              maxLength: {
                value: 40,
                message: 'Максимальное количество символов: 40'
              }
            })}  
          />
          <div className={`register__form-error ${errors?.name ? 'register__form-error_active' : ''}`}>{errors?.name?.message || 'Ошибка'}</div>
          <p className='register__text'>E-mail</p>
          <input
            id="email-input"
            type="email"
            className='register__input'
            placeholder="Введите почту"
            minLength="2"
            maxLength="60"
            value={email}
            disabled={isLoading}
            {...register('email', {
              required: 'Введите Ваш Email ',
              minLength: {
                value: 5,
                message: 'Минимальное количество символов: 5'
              },
              maxLength: {
                value: 40,
                message: 'Максимальное количество символов: 40'
              },
              pattern: {
                value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                message: 'Введите корректный e-mail'
              },
            })} 
          />
          <div className={`register__form-error ${errors?.email ? 'register__form-error_active' : ''}`}>{errors?.email?.message || 'Что-то пошло не так' }</div>
          <p className='register__text'>Пароль</p>
          <input
            id="password-input"
            type="password"
            className='register__input'                        
            placeholder="Введите Ваш пароль"
            minLength="6"
            maxLength="40"
            value={password}
            disabled={isLoading}
            {...register('password', {
              required: 'Имя пользователя должно быть обязательно заполнено',
              minLength: {
                value: 6,
                message: 'Минимальное количество символов: 6'
              },
              maxLength: {
                value: 40,
                message: 'Максимальное количество символов: 40'
              }
            })} 
          />
          <div className={`register__form-error ${errors?.password ? 'register__form-error_active' : ''}`}>{errors?.password?.message || "Что-то пошло не так"}</div>
          <div className='register__submit-error'>{errorMessage}</div> 
          <button className='register__button' disabled={!isValid || isLoading}>Зарегистрироваться</button>
          <Link to="/signin" className="register__question">Уже зарегистрированы? <span className="register__link">Войти</span></Link>
        </form>
      </section>
    </main>
  )
}

export default Register;
