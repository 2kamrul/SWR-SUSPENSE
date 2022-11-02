import Spinner from 'Core/Spinner'
import { Suspense } from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import useSWR from 'swr'
import { ErrorBoundary } from 'react-error-boundary'
import Error from 'APP_SWR/Components/Error'

const FirstAcc = () => {
    return (
        <Card elevation={2} sx={{ maxWidth: 345, minHeight: 100, display: 'flex', justifyContent: 'center' }}>
            <ErrorBoundary FallbackComponent={Error}>
                <Suspense fallback={<Spinner width={50} strokeWidht={1} />}>
                    <MyCard />
                </Suspense>
            </ErrorBoundary>
        </Card>
    )
}

export default FirstAcc

const MyCard = () => {
    const { data, mutate } = useSWR('/swr/first-account-info')
    return <Box>
        <Typography fontWeight='bold' textAlign='center' color='text.secondary' sx={{ letterSpacing: 1.2 }}>First Account</Typography>
        <CardContent>
            <Typography gutterBottom variant="h5" color='primary' fontWeight='bold'>
                Balance : {data.balance}
            </Typography>
            <Typography variant="body2" color="red" fontWeight='bold'>
                Withdraw: {data.withdraw}
            </Typography>
            <Button
                onClick={mutate}
            >
                Reload
            </Button>
        </CardContent>
    </Box>
}