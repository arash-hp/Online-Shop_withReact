import * as api from '../../api/UserApi';


export const login = (data) => {
  return (dispatch, getState) => {
    return api.login(data)
      .then(response => {
        return response
      })
      .catch(error => {
        return Promise.reject(error);
      })
  }
}