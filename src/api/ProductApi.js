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
       const response = await http.delete(`/products/${id}`);
       return response.data;
     } catch (e) {
       return e;
     }
   }


   export async function uploadImg(data) {
    try {
        const response = await http.post(`/upload`, data)
        return  response.data
    }catch(e){
        return e
    }
}
   
export async function editProduct(data) {
  try {
    const response = await http.put(`/products/${data.id}`,data);
    return response.data;
  } catch (e) {
    return e;
  }
}

export async function editStock(data) {
  try {
    const response = await http.put(`/products/${data[0]}`,data[1]);
    return response.data;
  } catch (e) {
    return e;
  }
}


   