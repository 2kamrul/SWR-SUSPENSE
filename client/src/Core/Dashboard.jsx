import { Button, Container, Stack } from '@mui/material';

import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <Container maxWidth='md' sx={{ p: 4 }}>
            <Stack spacing={3}>
                <Button
                    variant='contained'
                    size='large'
                    disableElevation
                    onClick={() => {
                        navigate('/swr')
                    }}>
                    SWR
                </Button>

                <Button
                    variant='contained'
                    size='large'
                    disableElevation
                    onClick={() => {
                        navigate('/cookie')
                    }}>
                    COOKIE
                </Button>

            </Stack>
        </Container>
    )
}

export default Dashboard