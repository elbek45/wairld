import Cookies from 'js-cookie'
import { removeItem, getItem, setItem } from '@/utils/storage'
import { resetState } from '@/store/index'

export function getToken() {
  return getItem('access_token');
}

export function setToken(token) {
  clearForLogout();
  return setItem('access_token', token);
}

export function removeToken() {
  return removeItem('access_token');
}

export function clearForLogout() {
  Cookies.remove('role');
  Cookies.remove('user');
  Cookies.remove('access_token');
  Cookies.remove('access_token_time');
  removeItem('user');
  resetState();
  return true;
}

export function setTokenTime(expires_in) {
  var d = new Date();
  d.setHours(d.getHours() + ((expires_in / 60) / 60));
  setItem('access_token_time', d.getTime());
}

export function getTokenTime() {
  return getItem('access_token_time')
}

export function checkTokenTime() {
  let tokenTime = getItem('access_token_time');
  return tokenTime > (new Date()).getTime();
}