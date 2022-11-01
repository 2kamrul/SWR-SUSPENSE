import UserRootLayout from "Core/RootLayouts/UserRootLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

const UserRoutes = () => {
    return (
        <Routes>
            <Route element={<UserRootLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default UserRoutes