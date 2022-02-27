import httpService from "../services/http.service";


export function getAllCategories(data) {
    return httpService.get(`/categories`).then((res) => res.data);
}
