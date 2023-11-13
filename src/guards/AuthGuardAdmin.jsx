import { Navigate, Outlet } from "react-router-dom"
import { isUserAdmin } from "../utils/auth"

const AuthGuardAdmin = () => {
  const isAdmin = isUserAdmin()
  return isAdmin ? <Outlet /> : <Navigate replace to="/" />
}
export default AuthGuardAdmin
