import { authKey } from "@/constants/storageKey";
import { getFromLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const instance = axios.create();

// instance er maddhome kichu default value set korbo
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    // request sent howar age authentication er khetre, access token k header er maddhome pathaye dibo. Authentication er somoy accessToken k localstorage theke nibe then nicher kaj tuku korbe.
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      // accessToken thakle authentication er somoy headers er moddhe authorization a accessToken set kore dibo
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export { instance };

// axios interceptors: eta request and response k modify korte help kore.
