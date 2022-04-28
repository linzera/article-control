import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:6060/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('userToken')}`,
  },
  timeout: 1500,
});
