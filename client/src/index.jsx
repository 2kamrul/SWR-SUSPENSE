import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from 'App'
import { SWRConfig } from 'swr'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { axiosPrivateInstanceFetcher } from 'Services/SwrFetchers'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <SWRConfig value={{
        fetcher: axiosPrivateInstanceFetcher,
        suspense: true,
        revalidateIfStale: false, //if SWR should revalidate on mounting if the cache exists (That means it revalidate from cache)
        revalidateOnFocus: false, // User return from another tab
        revalidateOnReconnect: false, // When computer comes online (User return from lock screen)
        errorRetryInterval: 2000,
        shouldRetryOnError: true,
        revalidateOnMount: true
      }}>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </SWRConfig>
    </BrowserRouter>
  </StrictMode>
);
