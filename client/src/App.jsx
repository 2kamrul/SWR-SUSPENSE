import 'App.css'
import { Routes, Route } from "react-router-dom"
import SwrRoute from 'APP_SWR/Routes'
import MrtRoutes from 'APP_MRT/Routes'
import CookieRoutes from 'APP_COOKIE/Routes'
import AxiosInterceptors from 'Services/AxiosInterceptors'
import Dashboard from 'Core/Dashboard'
import MuiRoutes from 'APP_MUI/Routes'

const App = () => {
  return (
    <Routes>
      <Route element={<AxiosInterceptors />}>
        <Route index element={<Dashboard />} />
        <Route path="/swr/*" element={<SwrRoute />} />
        <Route path="/mui/*" element={<MuiRoutes />} />
        <Route path="/mrt/*" element={<MrtRoutes />} />
        <Route path="/cookie/*" element={<CookieRoutes />} />
      </Route>
    </Routes>
  )
}

export default App
