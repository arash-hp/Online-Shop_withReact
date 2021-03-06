import axios from 'axios';
import { ACCESS_TOKEN, BASE_URL, IS_LOGGED_IN } from '../configs/VariablesConfig';
import { getProduct } from '../api/ProductApi';
import { toast } from 'react-toastify';
import { LOGIN, REFRESH_TOKEN, WHOAMI } from '../configs/UrlConfig';
import history from './history.service';
import { PATHS } from '../configs/RoutesConfig';
import errorMap from '../asset/data/error-map.json';
import store from '../redux/store';
import { refreshToken } from '../redux/actions/UserAction';

let canRefresh = true;

class HttpService {
    constructor() {
        axios.defaults.baseURL = BASE_URL;

        axios.interceptors.request.use((config) => {
            const token = localStorage.getItem(config.url !== REFRESH_TOKEN ? ACCESS_TOKEN : REFRESH_TOKEN)
            if (config.url !== LOGIN && (config.url === WHOAMI || token)) {
                config.headers['token'] = `${token}`
            }

            return config;
        }, (error) => {
            return Promise.reject(error);
        });

        axios.interceptors.response.use((response) => {
            // console.log('interceptor :', response)
            // canRefresh = true;
            return response;
        },
            async (error) => {
                if (!error.response) return Promise.reject(error)
                    ;
                const originalRequest = error.config;
                console.log('error', originalRequest);
                if (error.response.status === 401) {
                    if (canRefresh) {
                        canRefresh= false;
                        try {
                            await store.dispatch(refreshToken());
                            return new Promise((resolve, reject) => {
                                axios.request(originalRequest).then((res) => {
                                    console.log('res originalRequest ;', res)
                                    resolve(res)
                                }).catch(e => {
                                    reject(e)
                                })
                            });

                        } catch (e) {
                             localStorage.setItem(IS_LOGGED_IN, false.toString());
                            history.push(PATHS.LOGIN)
                            return Promise.reject(error)
                        }
                    }
                } else {
                    toast.error(errorMap[error.response.status])
                }
                return Promise.reject(error);
            })
    }
    get(url, config) {
        return axios.get(url, config)
    }
    post(url, data, config) {
        return axios.post(url, data, config)
    }
    delete(url, config) {
        return axios.delete(url, config)
    }
    patch(url, data, config) {
        return axios.patch(url, data, config)
    }
    put(url, data, config) {
        return axios.put(url, data, config)
    }
}

export default new HttpService()