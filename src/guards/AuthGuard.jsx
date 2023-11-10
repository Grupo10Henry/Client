import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const AuthGuard = () => {
  const user = useSelector((state) => state.user)

  return user.token ? <Outlet /> : <Navigate replace to="/" />
}
export default AuthGuard
