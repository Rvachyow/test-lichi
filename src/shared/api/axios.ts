import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://62f0dfbae2bca93cd23ec61f.mockapi.io/blogs',
});

export default instance;
