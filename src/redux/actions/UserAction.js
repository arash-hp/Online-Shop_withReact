import * as api from '../../api/UserApi';
import { ACCESS_TOKEN, IS_LOGGED_IN } from '../../configs/VariablesConfig';


export const login = (data) => {
  return (dispatch, getState) => {
    return api.login(data)
      .then(response => {
      console.log('login response: 2', response.token);
      localStorage.setItem(ACCESS_TOKEN, response.token);
      localStorage.setItem(IS_LOGGED_IN, true.toString());
        return response
      })
      .catch(error => {
        return Promise.reject(error);
      })
  }
}