import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.blockchain.com/'
});

export default api;