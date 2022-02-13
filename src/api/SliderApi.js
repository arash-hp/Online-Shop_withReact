import axios from 'axios';
import http from '../services/http.service';
import {BASE_URL} from '../configs/VariablesConfig';


axios.defaults.baseURL = BASE_URL;


// export function GetSlider() {
//   return new Promise((resolve, reject) => {
//     axios.get('http://localhost:3002/products')
//       .then(response => resolve(response))
//       .catch(error => reject(error))
//   });
// }

export async function GetSlider() {
    try {
      const response = await http.get('/products');
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    }
   }
   
//    export async function deleteSlide(id) {
//      try {
//        const response = await http.delete(`/slider/${id}`);
//        return response.data;
//      } catch (e) {
//        return e;
//      }
//    }
   
//    export async function getSlide(id) {
//      try {
//        const response = await http.get(`/slider/${id}`);
//        return response.data;
//      } catch (e) {
//        return e;
//      }
//    }
   