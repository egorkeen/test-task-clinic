class Api {
  constructor(url, headers) {
    this._url = url;
    this._headers = headers;
  }

  // проверить статус запроса
  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status} ${res.statusText}`);
    };
  };

  // пример написания запроса к серверу
  sendMessage(userEmail, message) {
    return fetch(this._url + '/messages', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        userEmail: userEmail,
        message: message
      })
    }).then(this._checkStatus);
  };
};

// здесь мы создаем api с адресом сервера
const api = new Api('https://your-backend.ru');

export default api;