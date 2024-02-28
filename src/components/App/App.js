import './App.css';
import '../../vendor/normalize.css';
import { CurrentUserContext}  from '../../context/CurrentUserContext';
import { Route, Routes, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import * as auth from '../../utils/MainApi';
import { moviesApi}  from '../../utils/MoviesApi';
import { SHORT_MOVIE } from '../../constants/constants'

function App() {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [currentUser, setCurrentUser] = useState({});
  const [logedIn, setLogedIn] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchMovies, setSearchMovies] = useState(JSON.parse(localStorage.getItem('searchMovies')) || []);
  const [notFound, setNotFound] = useState('');
  const [shortMovies, setShortMovies] = useState(JSON.parse(localStorage.getItem('searchMovies')) || []);
  const [activeCheckbox, setActiveCheckbox] = useState(JSON.parse(localStorage.getItem('checkbox')));
  const [activeCheckboxSavedMovies, setActiveCheckboxSavedMovies] = useState(false);
  const [savedMovie, setSavedMovie] = useState(JSON.parse(localStorage.getItem('savedMovies')) || []);
  const [searchSavedMovies, setSearchSavedMovies] = useState([]);
  const [showSavedMovies, setShowSavedMovies] = useState(false);
  const [noticeProfile, setNoticeProfile] = useState('');
  const [errorMessageRegister, setErrorMessageRegister] = useState('');
  const [errorMessageLogin, setErrorMessageLogin] = useState('');

  // регистрация
  const handleRegister = (name, email, password) => {
    setIsLoading(true);
    auth
      .register(name, email, password)
      .then((data) => {
        handleLogin(email, password);
        navigate('/movies', {replace: true});
        getSavedMovies();
      })
      .catch((err) => {
        console.error(err);
        if (err === 'Ошибка: 409') {
          setErrorMessageRegister('Пользователь с таким email уже существует');
        } else if (err === 'Ошибка: 500') {
          setErrorMessageRegister('На сервере произошла ошибка');
        } else {
          setErrorMessageRegister('При регистрации пользователя произошла ошибка');
        }
      })
      .finally(() => setIsLoading(false))
  };

  // авторизация
  const handleLogin = (email, password) => { 
    setIsLoading(true);
    auth
      .login(email, password)
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          getSavedMovies();
          navigate('/movies', {replace: true});
          return data;
        }
      })
      .catch((err) => {
        console.error(err);
        if (err === 'Ошибка: 401') {
            setErrorMessageLogin('Неправильный email или пароль');
        } else if (err === 'Ошибка: 400') {
          setErrorMessageLogin('На сервере произошла ошибка, попробуйте чуть позже');
        } else {
          setErrorMessageLogin('При входе произошла ошибка');
        }
      })
      .finally(() => setIsLoading(false))
  };

  // получить данные о пользователе
  const getUser = () => {
    auth
      .getUser()
      .then((dataUser) => {
        setCurrentUser(dataUser);
      })
      .catch((err) => console.log(err));
  };

  // отредактировать пользователя
  const editUser = (data) => {
    setIsLoading(true);
    auth
      .editUser(data)
      .then((newData) => {
        setCurrentUser(newData);
      })
      .then(() => {
        setNoticeProfile('Данные обновлены');
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  };

  // получение сохраненных фильмов
  const getSavedMovies = () => {
    auth
    .getSavedMovies()
    .then((data) => {
      localStorage.setItem('savedMovies', JSON.stringify(data));
      setSavedMovie(JSON.parse(localStorage.getItem('savedMovies')));
    })
    .catch((err) => console.log(err));
  };

    // проверка токена
    useEffect(() => {
      const jwt = localStorage.getItem('token');
      if (jwt) { handleTokenCheck(jwt) }
    }, [])
      
    const handleTokenCheck = (jwt) => {
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setLogedIn(true);
            setCurrentUser(res);
            getUser();
          }
        })
        .catch((err) => console.error(`Ошибка: ${err}`))
    }

  // выход из аккаунта 
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('checkbox');
    localStorage.removeItem('searchMovies');
    localStorage.removeItem('searchMovie');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('allMovies');
    setLogedIn(false);
    setSearchMovies([]);
    setShortMovies([]);
    setSavedMovie([]);
    setActiveCheckbox(null);
    setActiveCheckboxSavedMovies(false);
  };

  // удаление всех ошибок 
  useEffect(() => {
    setShowSavedMovies(false);
    setErrorMessageLogin('');
    setErrorMessageRegister('');
    setNoticeProfile('');
    localStorage.removeItem('savedSearchMovies');
  }, [pathname]);

  useEffect(() => {
    localStorage.setItem('searchMovies', JSON.stringify(shortMovies));
  }, [shortMovies]);

  // работа с чекбоксом
  const handleCheckbox = () => {
    setActiveCheckbox(!activeCheckbox);
  };

  const handleCheckboxSavedMovies = () => {
    setActiveCheckboxSavedMovies(!activeCheckboxSavedMovies);
  }

  const filterMovies = (movies) => {
    return movies.filter((movie) => movie.duration <= SHORT_MOVIE);
  }

  // хранение состояния чекбокса
  if (localStorage.getItem('token')) {
    localStorage.setItem('checkbox', JSON.stringify(activeCheckbox)); 
  }

  // отрисовка фильмов, в зависимости от состояния чекбокса
  useEffect(() => {
    if (pathname === '/movies') {
      if (activeCheckbox) {
        setSearchMovies(filterMovies(shortMovies));
      } else {
        setSearchMovies(shortMovies);
      } 
    } else if (pathname === '/saved-movies') {
      if (activeCheckboxSavedMovies) {
        setSavedMovie(filterMovies(!showSavedMovies ? JSON.parse(localStorage.getItem('savedMovies')) : searchSavedMovies));
      } else {
        setSavedMovie(!showSavedMovies ? JSON.parse(localStorage.getItem('savedMovies')) : searchSavedMovies);
      } 
    }
  }, [activeCheckbox, activeCheckboxSavedMovies, pathname, searchSavedMovies, shortMovies, showSavedMovies]);


  // поиск по базе фильмов
  const handleSearchMovies = (searchMovie) => {
    setIsLoading(true);
    const allMoviesBF = JSON.parse(localStorage.getItem('allMovies'));
  
    const filterMovies = (movies) => movies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(searchMovie.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(searchMovie.toLowerCase())
    );
  
    if (!allMoviesBF) {
      moviesApi.getMovies()
        .then((movies) => {
          localStorage.setItem('allMovies', JSON.stringify(movies));
          const currentSearchMovies = filterMovies(movies);
          setShortMovies(currentSearchMovies);
          setSearchMovies(currentSearchMovies);
          saveData(searchMovie, currentSearchMovies);
          setNotFound(currentSearchMovies.length > 0 ? 'found' : 'notFound');
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    } else {
      const currentSearchMovies = filterMovies(allMoviesBF);
      setShortMovies(currentSearchMovies);
      setSearchMovies(currentSearchMovies);
      saveData(searchMovie, currentSearchMovies);
      setNotFound(currentSearchMovies.length > 0 ? 'found' : 'notFound');
      setIsLoading(false);
    }
  };
  
  // поиск сохраненных фильмов 
  const handleSearchSavedMovies = (searchMovie) => {
    setShowSavedMovies(true);
    setIsLoading(true);
  
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    const currentSavedSearchMovies = savedMovies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(searchMovie.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(searchMovie.toLowerCase())
    );
  
    setSearchSavedMovies(currentSavedSearchMovies);
    localStorage.setItem('savedSearchMovies', JSON.stringify(currentSavedSearchMovies));
    setIsLoading(false);
    setNotFound(currentSavedSearchMovies.length > 0 ? 'found' : 'notFound');
  };

  // сохранение фильма
  const saveMovie = (movie) => {
    auth
    .saveMovie(movie)
    .then((movie) => {
      setIsLiked(true);
      const newSavedMovies = [movie, ...savedMovie];
      setSavedMovie(newSavedMovies);
      localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
      getSavedMovies();
    })
    .catch((err) => console.log(err));
  };

  // удаление фильма 
  const deleteMovie = async (movie) => {
    const savedSearchMovies = JSON.parse(localStorage.getItem('savedSearchMovies')) || [];
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
  
    const foundMovie = savedSearchMovies.find((item) => item.movieId === movie.movieId);
    const foundSavedMovie = savedMovies.find((item) => item.movieId === movie.movieId);
  
    if (foundMovie) {
      try {
        await auth.deleteMovie(foundMovie._id);
        const updatedSearchMovies = savedSearchMovies.filter((item) => item.movieId !== movie.movieId);
        localStorage.setItem('savedSearchMovies', JSON.stringify(updatedSearchMovies));
        setSavedMovie(activeCheckboxSavedMovies ? filterMovies(updatedSearchMovies) : updatedSearchMovies);
      } catch (err) {
        console.log(err);
      }
    } else if (foundSavedMovie) {
      try {
        await auth.deleteMovie(foundSavedMovie._id);
        const updatedSavedMovies = savedMovies.filter((item) => item.movieId !== movie.movieId);
        localStorage.setItem('savedMovies', JSON.stringify(updatedSavedMovies));
        setSavedMovie(activeCheckboxSavedMovies ? filterMovies(updatedSavedMovies) : updatedSavedMovies);
      } catch (err) {
        console.log(err);
      }
    }
  };
  
  // после удаления фильма
  useEffect(() => {
    if (pathname === '/saved-movies' && localStorage.getItem('savedSearchMovies'))
      if (activeCheckboxSavedMovies) {
        setSavedMovie(filterMovies(JSON.parse(localStorage.getItem('savedSearchMovies'))))
      } else {
        setSavedMovie(JSON.parse(localStorage.getItem('savedSearchMovies')))
      } 
  }, [activeCheckboxSavedMovies,  pathname])

  // хранение данных 
  const saveData = (searchMovie , item) => {
    localStorage.setItem('searchMovie', JSON.stringify(searchMovie));
    localStorage.setItem('searchMovies', JSON.stringify(item));
    localStorage.setItem('checkbox', JSON.stringify(activeCheckbox));
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Header logedIn={logedIn} />
        <Routes>
          <Route path="/signin" element= { 
            logedIn ? <Navigate to="/movies" replace /> : 
            <Login 
              onLogin={handleLogin} 
              errorMessage={errorMessageLogin}
              isLoading={isLoading}
            /> 
          }/>
          <Route 
            path="/signup" element={
              logedIn ? <Navigate to="/movies" replace /> :
              <Register 
                onRegister={handleRegister} 
                errorMessage={errorMessageRegister}
                isLoading={isLoading}
            /> 
          }/>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={
            <ProtectedRoute 
              logedIn={logedIn}
              element={Movies} 
              isLoading={isLoading} 
              notFound={notFound} 
              movies={searchMovies} 
              handleSearchMovie={handleSearchMovies}
              saveMovie={saveMovie}
              deleteMovie={deleteMovie}
              isLiked={isLiked}
              activeCheckbox={activeCheckbox} 
              handleCheckbox={handleCheckbox} 
            />
          } />

          <Route path="/saved-movies" element={
            <ProtectedRoute 
              element={SavedMovies} 
              movies={savedMovie}
              isLoading={isLoading} 
              handleSearchMovie={handleSearchMovies}
              handleSearcSavedMovies={handleSearchSavedMovies}
              deleteMovie={deleteMovie}
              activeCheckbox={activeCheckboxSavedMovies} 
              handleCheckbox={handleCheckboxSavedMovies} 
              notFound={notFound}
            />
          } />

          <Route path="/profile" element={
            <ProtectedRoute 
              element={Profile}
              editUser={editUser}
              noticeProfile={noticeProfile}
              isLoading={isLoading}
              logout={logout}
            /> 
          } />
          
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  )
};

export default App;