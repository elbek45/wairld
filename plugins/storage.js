import Cookies from 'js-cookie'
import cookie from 'cookie'

export default ({ req, isDev }, inject ) => {
  const token = 'access_token';
  const tokenTime = 'access_token_time';
  inject('storage', {
    getItem: (key) => {
      var value = null;
      if(process.client){
        value = Cookies.get(key);
      }else{
        value = cookie.parse(req.headers.cookie || '')[key]
      }
      return value?JSON.parse(value):null;
    },
    setItem: (key, value) => Cookies.set(key, JSON.stringify(value), { expires: 30, secure: !isDev }), // 30 days 
    removeItem: key => Cookies.remove(key),
    getToken: () => process.client ? Cookies.get(token) : cookie.parse(req.headers.cookie || '')[token],
    setToken: (value) => Cookies.set(token, value, { expires: 30, secure: !isDev }), // 30 days 
    clearForLogout: () => {
      Cookies.remove(token);
      Cookies.remove(tokenTime);
    },
  })
}