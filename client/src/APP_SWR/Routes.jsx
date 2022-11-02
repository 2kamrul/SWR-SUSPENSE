import SwrRootLayout from "Core/RootLayouts/SwrRootLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

const UserRoutes = () => {
    return (
        <Routes>
            <Route element={<SwrRootLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default UserRoutes