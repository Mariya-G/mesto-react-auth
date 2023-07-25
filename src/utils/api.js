class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }
  _checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
  }

  // Получение карточек с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
    .then(res => this._checkResponse(res));
  }

  // Добавление новой карточки через попап
  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.title,
        link: data.link
      })
    })
    .then(res => this._checkResponse(res));
  }

  // Удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => this._checkResponse(res));
  }

// Статус лайка
  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: isLiked ? 'PUT' : 'DELETE',
      headers: this._headers
    })
    .then(res => this._checkResponse(res));
  }

// Получение информации о пользователе с сервера
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(res => this._checkResponse(res));
  }

// Редактирование информации о пользователе через попап
  editUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
      
    })
    .then(res => this._checkResponse(res));
  }

  // Редактирование аватара пользователя через попап
  editAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then(res => this._checkResponse(res));
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-68',
  headers: {
    Authorization: '84ea1e46-d5a8-4474-bc0b-e051ea435c21',
    'Content-Type': 'application/json'
  }
});
