import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/Auth";
import axiosClient from "./axios";

const SetupInterceptors = async (navigate) => {
  const dispatch = useDispatch();

  axiosClient.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      if (err.response) {
        if (err.response.status === 403 || err.response.status === 401) {
          dispatch(logout());

          navigate("/");
        }
      }

      return Promise.reject(err);
    }
  );
};

export default SetupInterceptors;
