import './MoviesCardList.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import {
  WINDOW_SIZE_DESKTOP,
  WINDOW_SIZE_TABLET,
  WINDOW_SIZE_MOBILE,
  DESKTOP_QUANTITY_MOVIES,
  TABLET_QUANTITY_MOVIES,
  MOBILE_QUANTITY_MOVIES,
  DESKTOP_MORE_MOVIES,
  TABLET_MORE_MOVIES,
  MOBILE_MORE_MOVIES,
} from '../../constants/constants';

function MoviesCardList ({ cards, saveMovie, notFound, deleteMovie, isLoading}) {

  const { pathname } = useLocation();

  const [foundMovies, setFoundMovies] = useState(0);
  const [moreMovies, setMoreMovies] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setTimeout(() => {
      setWindowWidth(window.innerWidth);
    }, 1000);
  }, []);

  //изменение списка в зависимости от размера экрана
  useEffect(() => {
    const resizeWindow = () => {
      setWindowWidth(window.innerWidth);
    }
  
    if (pathname === '/movies' && windowWidth >= WINDOW_SIZE_DESKTOP) {
      setFoundMovies(DESKTOP_QUANTITY_MOVIES);
      setMoreMovies(DESKTOP_MORE_MOVIES)
    }
    else if (pathname === '/movies' && windowWidth >= WINDOW_SIZE_TABLET) {
      setFoundMovies(TABLET_QUANTITY_MOVIES);
      setMoreMovies(TABLET_MORE_MOVIES )
    }
    else if (pathname === '/movies' && windowWidth >= WINDOW_SIZE_MOBILE) {
      setFoundMovies(MOBILE_QUANTITY_MOVIES);
      setMoreMovies(MOBILE_MORE_MOVIES )
    } 
    else if (pathname === '/saved-movies') {
      setFoundMovies(cards?.length)
    }
  
    window.addEventListener('resize', resizeWindow);
  
    return () => {
      window.removeEventListener("resize", resizeWindow);
      setWindowWidth(window.innerWidth);
    };
  }, [pathname, windowWidth, cards?.length]);
  
    // "Еще"
    const showMoreMovies = () => {
    setFoundMovies(foundMovies + moreMovies);
  };

  return (
    <main>
        {isLoading ? ( <Preloader /> ) : (
          <section className='movies-card-list'>
            <ul className='movies-card-list__container'>
            {(cards && !isLoading) && cards.map((card, index) => {
             if (index < foundMovies) { 
              return (
                <MoviesCard 
                {...card}
                movies={cards}
                movie={card}
                key={card.id || card._id || index} 
                src={card.image}
                title={card.nameRU}
                saveMovie={saveMovie}
                deleteMovie={deleteMovie}
                /> 
              )
            } 
            return null;
          })} 
        </ul>
            {(pathname === '/movies' && (cards?.length > foundMovies)) && (
            <button className='movies-card-list__button' type='button' onClick={showMoreMovies}>Еще</button>)}
            {notFound === 'notFound' && <p className='movie-cardlist__error'>Ничего не найдено</p>}
          </section>
        )}
    </main>
  )
}
  

export default MoviesCardList;