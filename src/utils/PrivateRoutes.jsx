import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = {'loggedIn': JSON.parse(localStorage.getItem('loggedIn')) || false}
    return(
        auth.loggedIn ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes