import SwrRootLayout from "Core/RootLayouts/SwrRootLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

const SwrRoute = () => {
    return (
        <Routes>
            <Route element={<SwrRootLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default SwrRoute