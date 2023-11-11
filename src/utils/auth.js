const isUserAdmin = () => {
  const isAdmin = localStorage.getItem("isAdmin")
  return isAdmin === "true"
}
const isAuthenticated = () => {
  const token = localStorage.getItem("token")
  return token
}

export { isUserAdmin, isAuthenticated }
