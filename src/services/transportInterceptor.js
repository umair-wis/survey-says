import axios from "axios";
import { toast } from "react-toastify";

const initTransportInterceptor = (store) => {
  // TODO: Token should be sent using this snippet
  /*
    axios
      .interceptors
      .request
      .use(
        (config) => {
          const token = localStorage.getItem('Token');
  
          config.headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          };
  
          return config;
        },
      );
    */

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      const error = {
        status: err?.response?.status,
        title: err?.response?.data?.message,
      };

      if (error.status === 401 && error.title === "Unauthorized") {
        // localStorage.clear();
        const message = `${error.status} / ${error.title}`;
        toast.error(message);
      }
      else if (error?.code === "ERR_NETWORK" && error?.message === "Network Error") {
        toast.error('what')
      } else {
        const message = `${error.status} / ${error.title}`;
        toast.error(message);
      }

      return Promise.reject(err);
    }
  );
};

const initInterceptors = (store) => {
  initTransportInterceptor(store);
};

export default initInterceptors;
