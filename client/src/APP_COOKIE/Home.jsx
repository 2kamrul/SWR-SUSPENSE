import { Button, Container, Stack } from '@mui/material';

import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <Container maxWidth='md' sx={{ p: 4 }}>
            <Stack spacing={3}>
                <Button
                    variant='contained'
                    size='large'
                    disableElevation
                    onClick={() => {
                        navigate('/cookie/set-cookies')
                    }}>
                    SET COOKIES
                </Button>

                <Button
                    variant='contained'
                    size='large'
                    disableElevation
                    onClick={() => {
                        navigate('/cookie/get-cookies')
                    }}>
                    GET COOKIES
                </Button>

                <Button
                    variant='contained'
                    size='large'
                    disableElevation
                    onClick={() => {
                        navigate('/cookie/delete-cookies')
                    }}>
                    DELETE COOKIES
                </Button>

            </Stack>
        </Container>
    )
}

export default Home