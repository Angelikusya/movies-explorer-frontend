import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import NotFound from '../NotFound/NotFound'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';


function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/signup' element={ <Register />} />
        <Route path='/signin' element={ <Login />} />
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={ <Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;