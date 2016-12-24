import axios from 'axios';

const BASE_URL = 'https://api.github.com/';

export function getUser(name = '') {
  const url = `users/${name}`;
  return get(url);
};

function get (url) {
  return axios.get(BASE_URL + url).then(onSuccess, onError);
};

function onSuccess(res) {
  return res.data;
}

function onError(err) {
  console.log(err);
}
