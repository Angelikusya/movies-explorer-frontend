// export const BASE_URL = 'https://api.movies-angelikusya.nomoredomainsmonster.ru';
export const BASE_URL = 'http://localhost:3001';

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
};
  
export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    })
    .then((res) => checkResponse(res))
};
  
export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then((res) => checkResponse(res))
};
  
export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        }
})
.then((res) => checkResponse(res))
};

export const getUser = () => {
    return fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": 'application/json',
        "Authorization" : localStorage.getItem('token')
      },
    })
    .then((res) => checkResponse(res));
}

export const editUser = (userData) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: {
        "Content-Type": 'application/json',
        "Authorization" : localStorage.getItem('token')
      },
      body: JSON.stringify(userData)
    })
    .then((res) => checkResponse(res));
}

export const saveMovie = (data) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token'),
        },
        body: JSON.stringify(data),
    })
    .then((res) => checkResponse(res));
}
  
export const getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
        headers: {
            "Content-Type": 'application/json',
            "Authorization" : localStorage.getItem('token')
        },
})
    .then((res) => checkResponse(res));
}
  
export const deleteMovie = (movieId) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": 'application/json',
            "Authorization" : localStorage.getItem('token')
        },
    })
    .then((res) => checkResponse(res));
}


