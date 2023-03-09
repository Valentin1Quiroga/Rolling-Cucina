import axiosOriginal from "axios";

const axios = axiosOriginal.create({
  // baseURL: import.meta.env.VITE_APP_PORT_DEPLOYED,
  baseURL: import.meta.env.VITE_APP_PORT
});

export default axios;
