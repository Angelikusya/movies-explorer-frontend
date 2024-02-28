import search from '../../images/search.svg';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './SearchForm.css';

function SearchForm ({ activeCheckbox, handleCheckbox, handleSearchMovie, handleSearcSavedMovies }) {
  const { pathname } = useLocation();
  const showSearchForm = () => pathname === '/movies' || pathname === '/saved-movies';  

  const [movieSearch, setMovieSearch] = useState('');


  let condition;
  if (activeCheckbox === true) {
    condition = true
  };

  let searchMovieLocalStorage
  if (localStorage.getItem('searchMovie')) {
    searchMovieLocalStorage = JSON.parse(localStorage.getItem('searchMovie'));
  };

  useEffect(() => {
    if (localStorage.getItem('searchMovie')) {
      setMovieSearch(searchMovieLocalStorage);
    } 
  }, [searchMovieLocalStorage]);

  const { 
    register, 
    handleSubmit, 
    watch,
  } = useForm({ mode: 'onSubmit' });

  // очистка инпута
  useEffect(() => {
    if(pathname === '/saved-movies') {
      setMovieSearch('')
    }
  }, [pathname]);
  
  useEffect(() => {
    const subscription = watch((value) => {
      setMovieSearch(value.movie);
      return () => {
        subscription.unsubscribe();
      }
    })
  }, [watch]);

  const handleSubmitSearchForm = (e) => {
    if (pathname === '/movies') {
      handleSearchMovie(movieSearch);
    } else {
      handleSearcSavedMovies(movieSearch);
    }
  };

  return (
      <section className= {showSearchForm() ? 'search-form' : 'search-form search-form_closed'}>
        <form id='search-form' onSubmit={handleSubmit(handleSubmitSearchForm)} noValidate>
          <div className='search-form__content'>
            <div className='search-form__bar'>
              <img className='search-form__search' alt='Поиск' src={search} />
              <div className='search-form__container'>
                  <input 
                    className='search-form__input' 
                    type='text' 
                    placeholder='Фильм'
                    {...register('movie', {
                      required: 'Нужно ввести ключевое слово',
                      minLength: {
                        value: 1,
                        message: 'Минимум 1 символ'
                      },
                      maxLength: {
                        value: 50,
                        message: 'Максимум 50 символов'
                      }
                    })} value={movieSearch}
                  />
                  <button className='search-form__button' type='submit'>Найти
                  </button>
            </div>
            </div>
            <div className='search-form__options'>
              <div className='search-form__checkbox'>
                  <input 
                    className='search-form__checkbox-switch' 
                    type='checkbox' 
                    id="switch"
                    {...(condition ? {checked: true} : {checked: false})} 
                    onClick={handleCheckbox}
                    onChange={(e) => { e.preventDefault() }} 
                  />
                  <label className='search-form__checkbox-button' htmlFor="switch" type='button'></label>
                  <p className='search-form__checkbox-text'>Короткометражки</p>
              </div>
            </div>
          </div>
        </form>
      </section>
    )
}

export default SearchForm;