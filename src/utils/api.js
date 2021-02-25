 class Api {
  constructor({url, key}) {
    this._url = url;
    this._key = key;
  }
  getUserData() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._key
      }
    })
      .then((res) => {
        return this._getResponseData(res);
      });

  }
  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then((res) => {
        return this._getResponseData(res);
      });
  }
  editAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then((res) => {
        return this._getResponseData(res);
      });
  }
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: {
        authorization: this._key
      }
    })
      .then((res) => {
        return this._getResponseData(res);
      });
  }
  addCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then((res) => {
        return this._getResponseData(res);
      });
  }
  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._key
      }
    })
      .then((res) => {
        return this._getResponseData(res);
      });
  }
  likeCard(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'PUT',
      headers: {
        authorization: this._key
      }
    })
      .then((res) => {
        return this._getResponseData(res);
      });
  }
  dislikeCard(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._key
      }
    })
      .then((res) => {
        return this._getResponseData(res);
      });
  }
  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
}
const api = new Api ({
  url: 'https://mesto.nomoreparties.co/v1/cohort-19',
  key: 'e17fa530-896d-4705-bcb2-e2630586390c'});

 export default api;
