import useAuth from '../redux/useAuth'
import {Navigate} from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

    const {currentUser} = useAuth()

  return currentUser ? <Outlet/> : <Navigate to='/login'/>
}

export default ProtectedRoute;