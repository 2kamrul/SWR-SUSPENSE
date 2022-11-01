import { useEffect, useState } from 'react'
import { GET_COOKIES } from '../Api'

const GetCookies = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await GET_COOKIES()
                setData(result?.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])


    return (
        <div>{JSON.stringify(data)}</div>
    )
}

export default GetCookies