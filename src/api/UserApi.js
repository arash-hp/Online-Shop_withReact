import { LOGIN } from '../configs/UrlConfig';
import http from '../services/http.service';

export async function login(data) {
  try {
    const response = await http.post(LOGIN, data);
    return response.data;
  } catch (e) {
    return Promise.reject(e);
  }
}
