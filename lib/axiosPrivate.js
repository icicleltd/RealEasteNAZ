import axios from "axios";

// 🔹 Change the baseURL here if your backend address changes
const axiosPrivate = axios.create({
    baseURL: "http://localhost:5000", // Your backend base URL
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosPrivate;