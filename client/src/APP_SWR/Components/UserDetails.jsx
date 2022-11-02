import { Box, Typography, Stack } from '@mui/material'
import useSWR from 'swr'
import FirstAcc from 'APP_SWR/Accounts/FirstAcc'
import SecondAcc from 'APP_SWR/Accounts/SecondAcc'
import ThirdAcc from 'APP_SWR/Accounts/ThirdAcc'
import { axiosInstanceFetcher } from 'Services/SwrFetchers'
const UserDetails = () => {
    const { data, error, mutate } = useSWR('/swr/user/details', axiosInstanceFetcher, {
        // revalidateOnFocus: true,
        // refreshInterval: 1000, // Reload data after 1 second
    })

    return (
        <Box>
            <Box sx={{ pb: 3 }}>
                <Typography variant='h6' fontWeight='bold' color='text.secondary'>Account Holder Details</Typography>
                <Box sx={{ pl: 4 }}>
                    <Typography>Name : {data?.name}</Typography>
                    <Typography>Account No : {data?.userId}</Typography>
                    <Typography>City : {data?.city}</Typography>
                </Box>
            </Box>
            <Stack spacing={3}>
                {/* <ErrorBoundary fallback={<Error>Could not fetch data</Error>}>
                    <Suspense fallback={<Spinner />}> */}
                <FirstAcc />
                {/* </Suspense>
                </ErrorBoundary> */}
                {/* <Suspense fallback={<Spinner />}> */}
                <SecondAcc />
                {/* </Suspense> */}
                {/* <Suspense fallback={<Spinner />}> */}
                <ThirdAcc />
                {/* </Suspense> */}
            </Stack>
        </Box >
    )
}

export default UserDetails