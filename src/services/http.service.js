import  axios  from 'axios';
import { ACCESS_TOKEN, BASE_URL, IS_LOGGED_IN } from '../configs/VariablesConfig';
import { GetSlider } from '../api/SliderApi';
import { toast } from 'react-toastify';


class HttpService {
    constructor() {
        axios.defaults.baseURL = BASE_URL;

        axios.interceptors.request.use((config) => {

            return config;
        });

        axios.interceptors.response.use((response) => {
            return response;
        },
            (error) => {
                // toast.error(error.data)
                // console.dir('response error'+  error)

                // return Promise.reject(error);
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