import './App.css';
import React from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import NotFound from '../NotFound/NotFound'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import { useEffect, useState } from 'react';
import * as auth from '../../utils/MainApi';


function App() {

  const navigate = useNavigate();
  
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [ email, setEmail] = useState('');

  // зарегистрироваться
  function handleRegister({name, email, password}) {
    auth 
    .register(name, email, password)
    .then(() => {
      // setIsSuccessfulRegistration(true);
      setLoggedIn(true);
      navigate('/');
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);       
      // setIsSuccessfulRegistration(false);
    })
    .finally(() => {
      // setIsInfoTooltipOpen(true);
    });
  }

  function handleLogin({email, password}) {
    auth 
    .login(email, password)
    .then((res) => {
      if(res.token) {
        setLoggedIn(true);
        setEmail(email);
        navigate('/');
        localStorage.setItem('token', res.token);
        return res;
      }
    })
    .catch((err) => 
    console.error(`Ошибка: ${err}`)
    )
  }

  function handleExit() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setEmail('');
  }

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
            setLoggedIn(true);
            navigate('/', {replace: true})
          }
        })
        .catch((err) => console.error(`Ошибка: ${err}`))
    }

    // получение пользователя
  
  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Routes>
          <Route 
            path='/signup' 
            element={<Register onRegister={handleRegister} />} 
          />
          <Route 
            path='/signin' 
            element={ <Login  onLogin={handleLogin} />} 
          />
          <Route path='/' element={<Main />} />
          <Route 
            path='/movies' 
            element={ loggedIn ? ( <Movies /> ) : ( <Navigate to="/signin" />)}
          />
          <Route 
            path='/saved-movies' 
            element={ loggedIn ? ( <SavedMovies /> ) : ( <Navigate to="/signin" />)}
          />

          <Route 
            path='/profile' 
            element={ loggedIn ? ( <Profile  onExit={handleExit} /> ) : ( <Navigate to="/signin" />)}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
