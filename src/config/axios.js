import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/",
});

axiosClient.interceptors.request.use((request) => {
  console.log("interceptor request");
  // console.log(request);
  // request.headers.channelName = "gafahtec";
  return request;
});

axiosClient.interceptors.response.use((response) => {
  console.log("interceptor response");
  // console.log(response);
  // console.log(response.status);
  // console.log(response.headers);
  return response;
});

// axiosClient.interceptors.response.use(
//     function (response) {
//         return response;
//     },
//     function (error) {
//         const access_token = localStorage.getItem("accesstoken");
//         if (error.response.status === 401 && access_token) {
//             //Your logic to refresh token and reattempt request
//         } else {
//             console.error(error);
//         }
//         return Promise.reject(error);
//     }
// );


// if (error.response) {
//   // Request made and server responded
//   console.log(error.response.data);
//   console.log(error.response.status);
//   console.log(error.response.headers);
// }

export default axiosClient;


