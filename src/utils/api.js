class Api {
    constructor(options) {
      this.options = options;
      this.url = this.options.baseUrl;
      this.headers = this.options.headers;
      this.authorization = this.headers.authorization;
      this.contentType = this.headers['Content-Type'];
    }
  
    getUserInfo() {
        return fetch(`${this.url}/users/me`, {
            method: 'GET',
            headers: {
                authorization: this.authorization
            }
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => {
                return err;
            })
    }

    getInitialCards() {
        return fetch(`${this.url}/cards`, {
            method: 'GET',
            headers: {
                authorization: this.authorization
            }
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    editUserInfo(name, about) {
        return fetch(`${this.url}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this.authorization,
                'Content-Type': this.contentType
            },
            body: JSON.stringify({ name, about })
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch(err => {
            console.log(err);
        })
    }
  
    addNewCard(name, link) {
        return fetch(`${this.url}/cards`, {
            method: 'POST',
            headers: {
                authorization: this.authorization,
                'Content-Type': this.contentType
            },
            body: JSON.stringify({ name, link })
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch(err => {
            console.log(err);
        })
    }

    deleteCard(cardId) {
        return fetch(`${this.url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this.authorization
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch(err => {
            console.log(err);
        })
    }

    putLike(cardId) {
        return fetch(`${this.url}/cards/like/${cardId}`, {
            method: 'PUT',
            headers: {
                authorization: this.authorization
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch(err => {
            console.log(err);
        })
    }

    removeLike(cardId) {
        return fetch(`${this.url}/cards/like/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this.authorization
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch(err => {
            console.log(err);
        })
    }

  }

export default new Api({
    baseUrl: 'https://nomoreparties.co/cohort10',
    headers: {
        authorization: '5c788b82-fc9e-4eb0-ad75-9ff368bd7858',
        'Content-Type': 'application/json'
    }
});


  
