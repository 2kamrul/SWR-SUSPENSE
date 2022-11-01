import { Fragment } from 'react'
import { Outlet } from "react-router-dom"

const UserRootLayout = () => {
    return (
        <Fragment>
            <Outlet />
        </Fragment>
    )
}

export default UserRootLayout