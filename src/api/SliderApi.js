import http from '../services/http.service';

export async function GetSlider() {
    try {
      const response = await http.get('/products');
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    }
   }
   
   export async function addProduct(data) {
     try {
       const response = await http.post(`/products`,data);
       return response.data;
     } catch (e) {
       return e;
     }
   }
   

   