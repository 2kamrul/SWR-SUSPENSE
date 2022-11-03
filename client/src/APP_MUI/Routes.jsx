import { Routes, Route } from "react-router-dom"
import Home from "APP_MUI/Home"
import ServerSide from "APP_MUI/components/ServerSide"
import MuiRootLayout from "Core/RootLayouts/MuiRootLayout"

const MuiRoutes = () => {
    return (
        <Routes>
            <Route element={<MuiRootLayout />}>
                <Route index element={<Home />} />
                <Route path='server-side' element={<ServerSide />} />
            </Route>
        </Routes>
    )
}

export default MuiRoutes