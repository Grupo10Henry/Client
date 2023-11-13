import { Navigate, Outlet } from "react-router-dom"
import { isAuthenticated } from "../utils/auth"

const AuthGuardUser = () => {
  const isAuth = isAuthenticated()

  return isAuth ? <Outlet /> : <Navigate replace to="/" />
}
export default AuthGuardUser
