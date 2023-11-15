// Luissssss
import styles from './MyTickets.module.css';

export default function MyTickets() {
    return (
        <div>
            <h1 className={styles.activeTickets}>My Tickets :{")"} - Active</h1>
            <h1 className={styles.pastTickets}>My Tickets :{")"} - Past</h1>
        </div>
    )
}