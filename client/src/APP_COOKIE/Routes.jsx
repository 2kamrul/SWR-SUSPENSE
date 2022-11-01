import UserRootLayout from "Core/RootLayouts/UserRootLayout";
import { Routes, Route } from "react-router-dom";
import Home from "APP_COOKIE/Home";
import SetCookies from 'APP_COOKIE/Components/SetCookies';
import GetCookies from 'APP_COOKIE/Components/GetCookies';
import DeleteCookies from 'APP_COOKIE/Components/DeleteCookies';

const CookieRoutes = () => {
    return (
        <Routes>
            <Route element={<UserRootLayout />}>
                <Route index element={<Home />} />
                <Route path='set-cookies' element={<SetCookies />} />
                <Route path='get-cookies' element={<GetCookies />} />
                <Route path='delete-cookies' element={<DeleteCookies />} />
            </Route>
        </Routes>
    )
}

export default CookieRoutes