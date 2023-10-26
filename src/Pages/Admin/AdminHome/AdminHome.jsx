// Luissssss
import AdminNavbar from '../../../Components/Admin/AdminNavbar/AdminNavbar';
import styles from './AdminHome.module.css';

export default function AdminHome() {
    return (
        <div className={styles.AdminHomeContainer}>
            <div>
            <AdminNavbar />
            </div>
            <div>
            <h1>Admin Home :{")"}</h1>
            </div>
        </div>
    )
}