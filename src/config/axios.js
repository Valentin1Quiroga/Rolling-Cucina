import axiosOriginal from "axios";

const axios = axiosOriginal.create({
//    baseURL:"https://mongodb+srv://rollingcucina:"+import.meta.env.VITE_APP_BACKEND_PASSWORD+"@rollingcucina.p9tqofe.mongodb.net/rollingcucinaDB"
baseURL:"http://localhost:4500"
})

export default axios