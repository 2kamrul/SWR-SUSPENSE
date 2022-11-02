import { Container } from '@mui/material'
import { Suspense } from 'react'
import Spinner from 'Core/Spinner'
import UserDetails from 'APP_SWR/Components/UserDetails'
import { ErrorBoundary } from 'react-error-boundary'
import Error from 'APP_SWR/Components/Error'

const Home = () => {
    return (
        <Container sx={{ p: 4, height: '100vh' }}>
            <ErrorBoundary fallback={<Error>Could not fetch data</Error>}>
                <Suspense fallback={<Spinner />}>
                    <UserDetails />
                </Suspense>
            </ErrorBoundary>
        </Container>
    )
}

export default Home