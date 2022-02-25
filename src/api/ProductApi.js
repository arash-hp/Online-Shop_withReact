import { UPLOAD_IMG } from '../configs/UrlConfig';
import http from '../services/http.service';

export async function getProduct() {
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
   
   export async function deleteProduct(id) {
     try {
       console.log('api',id);
       const response = await http.delete(`/products/${id}`);
       return response.data;
     } catch (e) {
       return e;
     }
   }


   export async function uploadImg(data) {
    try {
        const response = await http.post(`/upload`, data)
        console.log(response.data)
        return  response.data
    }catch(e){
        return e
    }
}
   
// export async function editProduct(id,data) {
//   try {
//     console.log('api',id);
//     const response = await http.delete(`/products/${id}`,data);
//     return response.data;
//   } catch (e) {
//     return e;
//   }
// }


   