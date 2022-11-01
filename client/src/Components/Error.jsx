import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Button, Typography } from '@mui/material'
import { axiosInstance, axiosPrivateInstance, axiosSecretInstance } from 'Services/AxiosInstances'
import useSWR from 'swr'

const Error = (props) => {
    const { error, resetErrorBoundary } = props
    console.log(props)
    // const Error = ({ error, resetErrorBoundary }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ErrorOutlineIcon fontSize='small' sx={{ color: 'red', mr: 1 }} />
            <Typography fontWeight='bold' style={{ color: 'red', paddingRight: 8 }}>{error?.response?.data?.message || 'Data loading failed!'}</Typography>
            <Button
                color='primary'
                variant='outlined'
                onClick={() => {
                    try {
                        return axiosPrivateInstance(error.config)
                        // return useSWR('/swr/first-account-info', {
                        //     ...error.config
                        // })
                    } catch (err) {
                        return Promise.reject(error)
                    }
                }}
            >
                Try again
            </Button>
        </Box>
    )
}

export default Error