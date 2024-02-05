import './MoviesCard.css';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import moviephoto from '../../images/grid-12.png'


function MoviesCard(props) {
  const { pathname } = useLocation();

  const [liked, setLiked] = useState(false);
  
  const handleLikeClick = () => {
    setLiked(!liked);
  };

  // // конвертируем время
  // const conversionDuration = (duration) => {
  //   const hours = Math.floor(duration / 60);
  //   const minutes = duration % 60;
  //   return `${(hours)}ч ${(minutes)}м`;
  // };

  return (
      <li className='movies-card'>
        <div className='movies-card__container'>
          <Link to={props.link} target="_blank">
            <img className='movies-card__image' alt={`Заставка к фильму ${props.name}`} src={moviephoto}/>
          </Link>
          <div className='movies-card__info'>
            <h2 className='movies-card__name'>{props.name}</h2>
            {(pathname === '/movies' && !liked) && <button className='movies-card__like' onClick={handleLikeClick} type='button'/>}
            {(pathname === '/movies' && liked) && <button className='movies-card__like-active' onClick={handleLikeClick} type='button'/>}
            {(pathname === '/saved-movies') && <button className='movies-card__delete' type='button'/>}
          </div>
          <p className='movies-card__dutarion'>{props.duration}</p>
        </div>
      </li>
  )
}

export default MoviesCard;