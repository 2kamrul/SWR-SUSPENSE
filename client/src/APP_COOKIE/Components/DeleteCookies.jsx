import { useEffect, useState } from 'react'
import { DELETE_COOKIES } from '../Api'

const DeleteCookies = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await DELETE_COOKIES()
                setData(result?.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])

    return (
        <div>{data?.message}</div>
    )
}

export default DeleteCookies