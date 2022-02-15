import * as api from '../../api/UserApi';
import { ACCESS_TOKEN, IS_LOGGED_IN } from '../../configs/VariablesConfig';


export const login = (data) => {
  return (dispatch, getState) => {
    return api.login(data)
      .then(response => {
      localStorage.setItem(ACCESS_TOKEN, response.token);
      localStorage.setItem(IS_LOGGED_IN, true.toString());
        return response
      })
      .catch(error => {
        return Promise.reject(error);
      })
  }
}

export const refreshToken = () => {
  return (dispatch, getState) => {
    return api.login()
      .then(response => {
      localStorage.setItem(ACCESS_TOKEN, response.token);
      localStorage.setItem(IS_LOGGED_IN, true.toString());
        return response
      })
      .catch(error => {
        return Promise.reject(error);
      })
  }
}

export const whoami = () => {
  return (dispatch, getState) => {
    return api.whoami()
      .then(response => {
      console.log('whoami response: 2', response);
      localStorage.setItem(IS_LOGGED_IN, true.toString());
        return response
      })
      .catch(error => {
        return Promise.reject(error);
      })
  }
}