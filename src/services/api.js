import { create } from 'apisauce';

const api = create({
    baseURL: 'https://slauth-5e266.firebaseio.com/'
});

api.addResponseTransform(response => {
   if (!response.ok) throw response
});

export default api;