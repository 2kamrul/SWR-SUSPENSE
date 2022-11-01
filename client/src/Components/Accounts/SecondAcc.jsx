import Spinner from 'Core/Spinner'
import { Suspense } from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import useSWR from 'swr'
import { ErrorBoundary } from 'react-error-boundary'
import Error from 'Components/Error'

const SecondAcc = () => {
    return (
        <Card elevation={2} sx={{ maxWidth: 345, minHeight: 100, display: 'flex', justifyContent: 'center' }}>
            <ErrorBoundary fallback={<Error>Could not fetch data</Error>}>
                <Suspense fallback={<Spinner width={50} strokeWidht={1} />}>
                    <MyCard />
                </Suspense>
            </ErrorBoundary>
        </Card>
    )
}

export default SecondAcc

const MyCard = () => {
    const { data } = useSWR('/swr/second-account-info')
    return <Box>
        <Typography fontWeight='bold' textAlign='center' color='text.secondary' sx={{ letterSpacing: 1.2 }}>Second Account</Typography>
        <CardContent>
            <Typography gutterBottom variant="h5" color='primary' fontWeight='bold'>
                Balance : {data.balance}
            </Typography>
            <Typography variant="body2" color="red" fontWeight='bold'>
                Withdraw: {data.withdraw}
            </Typography>
        </CardContent>
    </Box>
}