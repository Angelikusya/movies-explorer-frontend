import './MoviesCard.css';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


function MoviesCard(props) {
  const { pathname } = useLocation();

  const [liked, setLiked] = useState(false);
  
  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className='movies-card'>
      <div className='movies-card__container'>
        <Link to={props.link} target="_blank">
          <img className='movies-card__image' alt='Заставка фильма' src={props.image}/>
        </Link>
        <div className='movies-card__info'>
          <p className='movies-card__name'>{props.name}</p>
          {(pathname === '/movies' && !liked) && <button className='movies-card__like' onClick={handleLikeClick}/>}
          {(pathname === '/movies' && liked) && <button className='movies-card__like-active' onClick={handleLikeClick}/>}
          {(pathname === '/saved-movies') && <button className='movies-card__delete'/>}
        </div>
        <p className='movies-card__dutarion'>{props.duration}</p>
      </div>
    </div>
  )
}

export default MoviesCard;