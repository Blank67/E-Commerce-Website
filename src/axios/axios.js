import axios from "axios";

const API = axios.create({
    baseURL: "https://react-ecommnerce-data-default-rtdb.firebaseio.com/"
})

export default API;