import axios from "axios";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

const baseURL = "http://localhost:8080";

const axiosClient = axios.create({
  baseURL: `${baseURL}`,
});

axiosClient.interceptors.request.use(async (request) => {
  const user = sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : null;

  if (user) {
    request.headers.Authorization = `Bearer ${user.access_token}`;

    const decodeAccessToken = jwt_decode(user.access_token);

    const accessTokenisExpired =
      dayjs.unix(decodeAccessToken.exp).diff(dayjs()) < 1;

    if (!accessTokenisExpired) return request;

    const response = await axios.get(`${baseURL}/api/usuarios/token/refresh`, {
      headers: {
        Authorization: `Bearer ${user.refresh_token}`,
      },
    });

    const usurNewTokens = {
      access_token: response.data.access_token,
      refresh_token: response.data.refresh_token,
      logged: true,
    };

    sessionStorage.setItem("user", JSON.stringify(usurNewTokens));
    request.headers.Authorization = `Bearer ${response.data.access_token}`;
  }

  return request;
});

export default axiosClient;
