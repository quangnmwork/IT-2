import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'http://localhost:5000',
  headers: { 'Content-Type': 'application/json' },
});

axiosClient.interceptors.request.use(async (config) => {
  let accessToken = '';

  accessToken = localStorage.getItem('auth') || '';

  // console.log(process.env.REACT_APP_NAME_TOKEN);
  return {
    ...config,
    headers: {
      auth: accessToken,
    },
  };
});
