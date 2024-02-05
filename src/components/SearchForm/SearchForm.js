import search from '../../images/search.svg';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';

function SearchForm (){
  const { pathname } = useLocation();
    
  const showSearchForm = () => pathname === '/movies' || pathname === '/saved-movies';  

  return (
      <section className= {showSearchForm() ? 'search-form' : 'search-form search-form_closed'}>
        <form id='search-form'>
          <div className='search-form__content'>
            <div className='search-form__bar'>
              <img className='search-form__search' alt='Поиск' src={search} />
              <div className='search-form__container'>
                  <input 
                    className='search-form__input' 
                    type='text' 
                    placeholder='Фильм'
                    required
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