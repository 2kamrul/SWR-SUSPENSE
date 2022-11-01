import axios from 'axios'

// const token = store?.getState().auth?.auth?.accessToken
// const _URL = process.env.REACT_APP_ENV === 'PRODUCTION'
//     ? process.env.REACT_APP_API_PROD
//     : process.env.REACT_APP_API_DEV


/** ========PUBLIC INSTANCE======*/
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:7100/',
    headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
    },
})


/** ========SECRET INSTANCE======
 * ***Important*** => The requests for setting-cookies and sending-cookies should use the same instance.
 * ***Important*** => For example : We are setting cookies from LOGIN request and sending this from REFRESH_TOKEN request so both should be in same instance.
 * Note : We can use multiple instances by enableing withCredentials: true.
 * Something like this :
 *      instace a x name cookie set korche
 *      instance b y name cookie send korche
 *      instance c z name cookie set korche
 * So jokhon instace a or b or c use kore server e jekono request kora hobe tokhon x,y,z cookies gula server e send kora hobe.
 * So single instance e credential enable kora better.
 */
export const axiosSecretInstance = axios.create({
    baseURL: 'http://localhost:7100/',
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
    baseURL: 'http://localhost:7100/',
    headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
    }
})