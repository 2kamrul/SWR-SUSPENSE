import axios from 'axios'
const BASE_URL = 'http://localhost:7100'

export const axiosSecretInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, // For sending cookies
    headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
    },
})