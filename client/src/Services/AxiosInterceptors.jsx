// import { axiosPrivateInstance } from 'Services/AxiosService'
import { Outlet } from 'react-router-dom'
import { axiosPrivateInstance, axiosInstance } from 'Services/AxiosInstances'

const AxiosInterceptors = () => {

    // axiosInstance.interceptors.request.use(
    //     (config) => {
    //         // console.log('request => ', config)
    //         return config
    //     },
    //     (error) => {
    //         // console.log(error)
    //         Promise.reject(error)
    //     })

    // axiosPrivateInstance.interceptors.request.use(
    //     (config) => {
    //         // console.log('request => ', config)
    //         return config
    //     },
    //     (error) => {
    //         Promise.reject(error)
    //     })

    // axiosPrivateInstance.interceptors.response.use(
    //     response => {
    //         // console.log(response)
    //         return response
    //     },
    //     async (error) => {
    //         return error
    //         console.log(error)
    //     }
    // )

    return <Outlet />
}

export default AxiosInterceptors