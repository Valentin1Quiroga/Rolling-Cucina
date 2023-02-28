import axiosOriginal from "axios";

const axios = axiosOriginal.create({
baseURL:"http://localhost:"+import.meta.env.VITE_APP_PORT
})

export default axios