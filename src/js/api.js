// api.js (or wherever you manage your API calls)
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://smooth-vast-thrush.ngrok-free.app/', // Replace with your API base URL
});

export default api;