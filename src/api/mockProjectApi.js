import axios from 'axios';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
  const url = `users`;
  return get(url);
};

function get (url) {
  return axios.get(baseUrl + url).then(onSuccess, onError);
};

function onSuccess(res) {
  return res.data;
}

function onError(err) {
  console.log(err);
}
