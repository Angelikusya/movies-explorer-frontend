import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

import './Header.css';

function Header({email, onExit}) {

  const { pathname } = useLocation();
  const activatedHeader = (pathname === '/profile' || pathname === '/movies' || pathname === '/saved-movies');

  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);
  
  const handleBurgerMenuOpen = () => {
    setIsBurgerMenuOpened(true);
  };

  const handleBurgerMenuClose = () => {
    setIsBurgerMenuOpened(false);
  };

  const handleLinkClick = () => {
    handleBurgerMenuClose();
  }

    return (
      <>
      {/* если пользователь не залогинен */}
      {(!localStorage.getItem('token') && pathname === '/') && (
      <header className='header header-signin'>
        <div className='header__content'>
          <Link className='header__logo' to='/'></Link>
          <nav className='header__navigation'>
            <Link className='header__link header__signup' to='/signup'>Регистрация</Link>
            <Link className='header__link header__signin' to='/signin'><span className='header__signin-span'>Войти</span></Link>
          </nav>
        </div>
      </header> )}

        {/* если пользователь залогинен для меню */}
      {(localStorage.getItem('token') && (activatedHeader || pathname === '/') ) && (
      <header className={pathname === '/' ? 'header' : 'header header-logged'}>
        <div className='header__content-logged'>
          <Link className='header__logo' to='/'></Link>
          <button className='burger-menu__open' onClick={handleBurgerMenuOpen} type='button'></button>

          <nav className='header__navigation-logged'>
            <div className='header__navigation-movies'>
              <Link className='header__logo__nav' to='/'></Link>
              <Link className={pathname === '/movies' ? 'header__link-logged  header__link-logged_active' : 'header__link-logged'} to='/movies'>Фильмы</Link>
              <Link className={pathname === '/saved-movies' ? 'header__link-logged  header__link-logged_active' : 'header__link-logged' } to='/saved-movies'>Сохранённые фильмы</Link>
            </div>
              <Link className='header__link-user' to='/profile'>
                <p className='header__navigation-user'>Аккаунт</p>
                <div className='header__profile-icon'></div>
              </Link>
          </nav>
          <nav className={`burger-menu ${isBurgerMenuOpened ? 'burger-menu_opened' : 'burger-menu_disabled'}`}>
          <button className='burger-menu__close' onClick={handleBurgerMenuClose} type='button'></button>
            <div className='burger-menu__container'>
              <Link className={pathname === '/' ? 'header__burger-menu__link  header__burger-menu__link_active' : 'header__burger-menu__link'} onClick={handleLinkClick} to='/'>Главная</Link>
              <Link className={pathname === '/movies' ? 'header__burger-menu__link  header__burger-menu__link_active' : 'header__burger-menu__link'} onClick={handleLinkClick} to='/movies'>Фильмы</Link>
              <Link className={pathname === '/saved-movies' ? 'header__burger-menu__link  header__burger-menu__link_active' : 'header__burger-menu__link'} onClick={handleLinkClick} to='/saved-movies'>Сохранённые фильмы</Link>
              </div>
                <Link className='burger-menu__link-user' to='/profile' onClick={handleLinkClick}>
                  <p className='header__navigation-user'>Аккаунт</p>
                  <div className='header__profile-icon'></div>
                </Link>
          </nav>
        </div>
      </header> )}
    </>
  );
}

export default Header;