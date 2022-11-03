import MrtRootLayout from "Core/RootLayouts/MrtRootLayout"
import { Routes, Route } from "react-router-dom"
import Home from "APP_MRT/Home"
import ServerSide from "APP_MRT/components/ServerSide"

const MrtRoutes = () => {
    return (
        <Routes>
            <Route element={<MrtRootLayout />}>
                <Route index element={<Home />} />
                <Route path='server-side' element={<ServerSide />} />
            </Route>
        </Routes>
    )
}

export default MrtRoutes