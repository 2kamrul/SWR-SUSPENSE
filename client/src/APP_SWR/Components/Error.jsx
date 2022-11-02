import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { Box, Typography } from '@mui/material'

const Error = ({ error }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ErrorOutlineIcon fontSize='small' sx={{ color: 'red', mr: 1 }} />
            <Typography fontWeight='bold' style={{ color: 'red', paddingRight: 8 }}>{error?.response?.data?.message || 'Data loading failed!'}</Typography>
        </Box>
    )
}

export default Error