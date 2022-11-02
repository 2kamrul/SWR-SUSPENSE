import { axiosSecretInstance } from 'Services/AxiosInstances'


export const SET_COOKIES = async () => {
    return await axiosSecretInstance.get('/cookie/set-cookies')
}

export const GET_COOKIES = async () => {
    return await axiosSecretInstance.get('/cookie/get-cookies')
}

export const DELETE_COOKIES = async () => {
    return await axiosSecretInstance.get('/cookie/delete-cookies')
}