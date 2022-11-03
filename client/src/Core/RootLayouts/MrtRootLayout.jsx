import { Container, Typography } from '@mui/material'
import { Outlet } from "react-router-dom"

const MrtRootLayout = () => {
    return (
        <Container maxWidth='lg' sx={{ p: 4 }}>
            <Typography variant='h4' fontWeight='bold' color='textSecondary' textAlign='center' sx={{ paddingBottom: 4 }} >MATERIL REACT TABLE TEST</Typography>
            <Outlet />
        </Container>
    )
}

export default MrtRootLayout