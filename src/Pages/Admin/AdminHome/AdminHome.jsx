// Luissssss
import AdminEvents from '../../../Components/Admin/AdminEvents/AdminEvents';
import AdminEventsCreate from '../../../Components/Admin/AdminEventsCreate/AdminEventsCreate';
import AdminNavbar from '../../../Components/Admin/AdminNavbar/AdminNavbar';
import AdminUsers from '../../../Components/Admin/AdminUsers/AdminUsers';
import styles from './AdminHome.module.css';
import { useState } from 'react';

export default function AdminHome() {

    const [display, setDisplay] = useState({
        show: "home"
    });

    console.log(display)

    return (
        <div className={styles.AdminHomeContainer}>
            <div>
            <AdminNavbar
            display={display}
            setDisplay={setDisplay}
            />
            </div>
            <div>
            {display.show === "home" ? <h1>Admin Home :{")"}</h1> : null}
            {display.show === "showEvents" ? <AdminEvents /> : null}
            {display.show === "createEvents" ? <AdminEventsCreate /> : null}
            {display.show === "showUsers" ? <AdminUsers /> : null}
            </div>
        </div>
    )
}