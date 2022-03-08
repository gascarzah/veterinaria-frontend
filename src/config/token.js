import axiosClient from './axios';

const tokenAuth = (token) => {
  axiosClient.defaults.headers.common['Content-Type'] = 'application/json';
//   'Content-Type': 'multipart/form-data',
  if (token) {
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosClient.defaults.headers.common['Authorization'];
  }
};

export default tokenAuth;
