import axios from "axios";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

const baseURL = "http://localhost:8080";
const user = sessionStorage.getItem("user")
  ? JSON.parse(sessionStorage.getItem("user"))
  : null;
  
const axiosClient = axios.create({
  baseURL: `${baseURL}`,
});

axiosClient.interceptors.request.use(async (request) => {
  console.log("interceptor request");
  console.log(user);
  if (user) {
    request.headers.Authorization = `Bearer ${user.access_token}`;

    const decodeAccessToken = jwt_decode(user.access_token);

    const accessTokenisExpired =
      dayjs.unix(decodeAccessToken.exp).diff(dayjs()) < 1;

    if (!accessTokenisExpired) return request;

    //verificar el refresh_token vencido

    console.log('access_token vencido')

    // const decodeRefreshToken = jwt_decode(user.refresh_token);
    // const refreshTokenisExpired =
    //   dayjs.unix(decodeRefreshToken.exp).diff(dayjs()) < 1;

    // if (!refreshTokenisExpired) {
      
      const response = await axios.get(
        `${baseURL}/api/usuarios/token/refresh`,
        {
          headers: {
            Authorization: `Bearer ${user.refresh_token}`,
          },
        }
      );
      
      const usurNewTokens = {
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token,
        logged: true,
      };

      sessionStorage.setItem("user", JSON.stringify(usurNewTokens));
      request.headers.Authorization = `Bearer ${response.data.access_token}`;

    // }else{
    //   console.log('sale dispatcher')
    //   const userVencido = { logged: false }

    //   sessionStorage.setItem('user', userVencido);
    
    //   console.log('refresh_token vencido')
      
      
    // }
  }

  return request;
});

axiosClient.interceptors.response.use((response) => {
  console.log("interceptor response");

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
