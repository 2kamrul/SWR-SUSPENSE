import { Container, Typography } from '@mui/material'
import { Outlet } from "react-router-dom"

const MuiRootLayout = () => {
    return (
        <Container maxWidth='lg' sx={{ p: 4 }}>
            <Typography variant='h4' fontWeight='bold' color='textSecondary' textAlign='center' sx={{ paddingBottom: 4 }} >MUI TABLE TEST</Typography>
            <Outlet />
        </Container>
    )
}

export default MuiRootLayout