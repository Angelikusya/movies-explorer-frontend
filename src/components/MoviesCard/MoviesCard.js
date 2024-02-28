import './MoviesCard.css';
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

function MoviesCard ({
    src,
     title, 
     movies, 
     movie, 
     saveMovie, 
     deleteMovie, 
     ...props
  }) {

  const { pathname } = useLocation();

  const [isLiked, setIsLiked] = useState(JSON.parse(localStorage.getItem('savedMovies'))?.some((item) => item.movieId === movie.id));

  // собираю общие данные
  const commonData = {
    country: props.country,
    director: props.director,
    duration: props.duration,
    year: props.year,
    description: props.description,
    trailerLink: props.trailerLink,
    nameRU: props.nameRU,
    nameEN: props.nameEN,
  };

  // отдельные данные с ссылками
  let dataMovie = {
    ...commonData,
    movieId: pathname === '/movies' ? props.id : props.movieId,
    image: pathname === '/movies' ? `https://api.nomoreparties.co${props.image.url}` : props.image,
    thumbnail: pathname === '/movies' ? `https://api.nomoreparties.co${props.image.formats.thumbnail.url}` : props.thumbnail,
    _id: props._id,
  };

  // проставить лайк и добавить карточку
  const handleSaveMovie = () => {
      saveMovie(dataMovie); 
      setIsLiked(dataMovie); 
  };

  // удаление фильма 
  const handleDeleteMovie = () => {
      deleteMovie(dataMovie);
      setIsLiked(!isLiked);
  };

  const handleLikeMovie = () => {
    if (isLiked) {
      handleDeleteMovie(dataMovie);
    }
    else {
      handleSaveMovie(dataMovie);
    }
  };
    
  // конвертер времени
  const convertingDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${(hours)}ч ${(minutes)}м`;
  };

  return (
    <li className='movies-card'>
      <div className='movies-card__container'>
        <Link to={dataMovie.trailerLink} target="_blank">
          <img className='movies-card__image' alt={`Заставка к фильму ${title}`} src={dataMovie.image}/>
        </Link>
        <div className='movies-card__info'>
          <h2 className='movies-card__name'>{title}</h2>
          {(pathname === '/movies' && !isLiked) && <button className='movies-card__like' onClick={handleLikeMovie} type='button'/>}
          {(pathname === '/movies' && isLiked) && <button className='movies-card__like-active' onClick={handleDeleteMovie} type='button'/>}
          {(pathname === '/saved-movies') && <button className='movies-card__delete' type='button' onClick={handleDeleteMovie}/>}
        </div>
        <p className='movies-card__dutarion'>{convertingDuration(dataMovie.duration)}</p>
      </div>
    </li>
  )
}

export default MoviesCard;