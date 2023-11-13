// Luissssss
import { useNavigate } from "react-router-dom"
import AdminEvents from "../../../Components/Admin/AdminEvents/AdminEvents"
import AdminEventsCreate from "../../../Components/Admin/AdminEventsCreate/AdminEventsCreate"
import AdminFAQ from "../../../Components/Admin/AdminFAQ/AdminFAQ"
import AdminFooter from "../../../Components/Admin/AdminFooter/AdminFooter"
import AdminNavbar from "../../../Components/Admin/AdminNavbar/AdminNavbar"
import AdminReviews from "../../../Components/Admin/AdminReviews/AdminReviews"
import AdminUsers from "../../../Components/Admin/AdminUsers/AdminUsers"
import styles from "./AdminHome.module.css"
import { useEffect, useState } from "react"
import AdminReports from "../../../Components/Admin/AdminReports/AdminReports"
import { isAuthenticated, isUserAdmin } from "../../../utils/auth"

export default function AdminHome() {
  const [display, setDisplay] = useState({
    show: "home",
  })

  const navigate = useNavigate()

  useEffect(() => {
    const isAdmin = isUserAdmin()
    const isAuth = isAuthenticated()
    if (!isAuth || (isAuth && !isAdmin)) {
      navigate("/")
    }
  }, [])

  return (
    <div className={styles.AdminHomeContainer}>
      <div>
        <AdminNavbar display={display} setDisplay={setDisplay} />
      </div>
      <div>
        {display.show === "home" ? <AdminEvents /> : null}
        {display.show === "showEvents" ? <AdminEvents /> : null}
        {display.show === "createEvents" ? <AdminEventsCreate /> : null}
        {display.show === "showUsers" ? <AdminUsers /> : null}
        {display.show === "editContact" ? <AdminFooter /> : null}
        {display.show === "editFAQ" ? <AdminFAQ /> : null}
        {display.show === "viewReviews" ? <AdminReviews /> : null}
        {display.show === "viewReports" ? <AdminReports /> : null}
      </div>
    </div>
  )
}
