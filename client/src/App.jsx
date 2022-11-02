import 'App.css'
import { Routes, Route } from "react-router-dom"
import UserRoutes from 'APP_SWR/Routes'
import CookieRoutes from 'APP_COOKIE/Routes'
import AxiosInterceptors from 'Services/AxiosInterceptors'
import Dashboard from 'Core/Dashboard'

const App = () => {
  return (
    <Routes>
      <Route element={<AxiosInterceptors />}>
        <Route index element={<Dashboard />} />
        <Route path="/cookie/*" element={<CookieRoutes />} />
        <Route path="/swr/*" element={<UserRoutes />} />
      </Route>
    </Routes>
  )
}

export default App
