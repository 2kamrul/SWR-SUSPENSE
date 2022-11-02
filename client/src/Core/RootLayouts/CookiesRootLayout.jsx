import { Container, Typography } from '@mui/material'
import { Outlet } from "react-router-dom"

const CookiesRootLayout = () => {
    return (
        <Container maxWidth='lg' sx={{ p: 4 }}>
            <Typography variant='h4' fontWeight='bold' color='textSecondary' textAlign='center' >COOKIES TEST</Typography>
            <Outlet />
        </Container>
    )
}

export default CookiesRootLayout