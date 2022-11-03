import { Button, Container, Stack, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <Container maxWidth='md' sx={{ p: 4 }}>
            <Stack spacing={3}>
                <Typography variant='h4' fontWeight='bold' color='textSecondary' textAlign='center' >TEST PROJECT</Typography>
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
                        navigate('/mui')
                    }}>
                    MUI TABLE
                </Button>

                <Button
                    variant='contained'
                    size='large'
                    disableElevation
                    onClick={() => {
                        navigate('/mrt')
                    }}>
                    MATERIAL REACT TABLE
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