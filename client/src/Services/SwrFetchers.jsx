import { axiosInstance, axiosPrivateInstance, axiosSecretInstance } from 'Services/AxiosInstances'



export const axiosInstanceFetcher = async (...args) => {
    try {
        const result = await axiosInstance(...args)
        return result?.data
    } catch (error) {
        throw error
    }
}


export const axiosPrivateInstanceFetcher = async (...args) => {
    try {
        const result = await axiosPrivateInstance(...args)
        return result?.data
    } catch (error) {
        throw error
    }
}