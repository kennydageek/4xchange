import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://reqres.in/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  registerUser(body) {
    return apiClient.post('/register', body);
  },
};

// {
//   "id": 1,
//   "email": "george.bluth@reqres.in",
//   "first_name": "George",
//   "last_name": "Bluth",
//   "avatar": "https://reqres.in/img/faces/1-image.jpg"
// },
