import { useEffect, useState } from 'react'
import { SET_COOKIES } from '../Api'

const SetCookies = () => {
    console.log('test')
    const [data, setData] = useState(null)
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await SET_COOKIES()

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

export default SetCookies