import http from '../services/http.service';

export async function getOrder() {
    try {
      const response = await http.get('/orders');
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    }
   }

export async function addOrder(data) {
    try {
      const response = await http.post('/orders',data);
      return response;
    } catch (e) {
      return e;
    }
   }

   export async function deleteOrder(id) {
    try {
      const response = await http.delete(`/orders/${id}`);
      return response.data;
    } catch (e) {
      return e;
    }
  }
