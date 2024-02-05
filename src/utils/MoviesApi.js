export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export default class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    };

    //подтягиваем карточки
    getMovies() {
        return fetch (`${this.baseUrl}`, {
            headers: {
                Accept: 'application/json',   
            }   
        })
        .then(this._checkResponse)
    }
}
const moviesApi = new Api({
    baseUrl: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}); 
    
export {moviesApi};
