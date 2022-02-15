import http from '../services/http.service';

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
   