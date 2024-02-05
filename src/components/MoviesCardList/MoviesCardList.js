import './MoviesCardList.css';
import React, { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import initialCards from '../../constants/constants';


function MoviesCardList () {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <main>
        {isLoading ? ( <Preloader /> ) : (
          <section className='movies-card-list'>
            <ul className='movies-card-list__container'>
              {initialCards.map((card, index) => (
                <MoviesCard
                  key={index}
                  name={card.name}
                  image={card.image}
                  duration={card.duration}
                  link={card.link}
                />
              ))}
            </ul>
            <button className='movies-card-list__button' type='button'>Еще</button>
          </section>
        )}
    </main>
  )
}
  

export default MoviesCardList;