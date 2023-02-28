import axiosOriginal from "axios";

const axios = axiosOriginal.create({
  baseURL: import.meta.env.VITE_APP_PORT,
  // baseURL: import.meta.env.VITE_APP_PORT_DEPLOYED,
});

export default axios;
