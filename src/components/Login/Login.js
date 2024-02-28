import './Login.css';
import React,  { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login({ onLogin, errorMessage, isLoading }) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');

  const { 
    register, 
    formState: { errors, isValid }, 
    watch 
  } = useForm({ mode: 'onChange' });

  useEffect(() => {
    const subscription = watch(({email, password}) => {
      setEmail(email);
      setPassword(password);
      return () => {
        subscription.unsubscribe();
      }
    })
  }, [watch]);

  const handleSubmitLogin= (e) => {
    e.preventDefault();
    onLogin(email, password)
  };

  return (
    <main>
      <section className='login'>
        <div className='login__header'>
            <Link className='login__logo' to='/'></Link>
            <h1 className='login__greeting'>Рады видеть!</h1>
        </div>
        <form className='login__form' onSubmit={handleSubmitLogin} noValidate>
           <p className='login__text'>E-mail</p>
            <input
              id="email-input"
              type="email"
              className='login__input'
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
            <div className={`login__form-error ${errors?.email ? 'login__form-error_active' : ''}`}>{errors?.email?.message || 'Ошибка' }</div>
            <p className='login__text'>Пароль</p>
            <input
              id="password-input"
              type="password"
              className='login__input'                        
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
            <div className={`login__form-error ${errors?.password ? 'login__form-error_active' : ''}`}>{errors?.password?.message || 'Ошибка'}</div>
            <div className='login__submit-error'>{errorMessage}</div> 
            <button className='login__button' disabled={!isValid || isLoading}>Войти</button>
            <Link to="/signup" className="login__question">Еще не зарегистрированы? <span className="login__link">Регистрация</span></Link>
        </form>
      </section>
    </main>
  )
}

export default Login;
