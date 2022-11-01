import { Box } from '@mui/material'
import { RotatingLines } from 'react-loader-spinner'


const Spinner = ({ width = 100, strokeWidht = 2 }) => {
    return (
        <Box sx={{ minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <RotatingLines width={width} strokeWidth={strokeWidht} strokeColor="red" animationDuration="1.75" />
            {/* <RotatingLines width="50" strokeWidth="2" /> */}
        </Box>

    )
}

export default Spinner