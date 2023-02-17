import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://mongodb+srv://rollingcucina:rollingcucina@"+import.meta.env.VITE_APP_BACKEND_PASSWORD+".p9tqofe.mongodb.net/rollingcucinaDB"
})

export default axiosInstance