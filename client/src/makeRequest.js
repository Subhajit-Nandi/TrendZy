import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const apiToken = import.meta.env.VITE_REACT_APP_API_TOKEN;

export const makeRequest = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${apiToken}`, // Correctly formatted Authorization header
    },
});