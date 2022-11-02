import axios from 'axios'
const BASE_URL = 'http://localhost:7100/'

/** ========PUBLIC INSTANCE======*/
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
    },
})

/** ========SECRET INSTANCE====== */
export const axiosSecretInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, // For sending cookies
    headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
    },
})


/** ========PRIVATE INSTANCE======
 * With access token.
 */
export const axiosPrivateInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
    }
})