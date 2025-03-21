// api.js (or wherever you manage your API calls)
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1/', // Replace with your API base URL
});

export default api;