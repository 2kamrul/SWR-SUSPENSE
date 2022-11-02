import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate()
    return (
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
    )
}

export default Home