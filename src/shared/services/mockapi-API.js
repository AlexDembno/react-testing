import axios from 'axios';

const instans = axios.create({
  baseURL: 'https://6401070a0a2a1afebee4fbc5.mockapi.io',
});

export default instans;
