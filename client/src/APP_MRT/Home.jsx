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
                    navigate('/mrt/server-side')
                }}>
                SERVER SIDE
            </Button>
        </Stack>
    )
}

export default Home