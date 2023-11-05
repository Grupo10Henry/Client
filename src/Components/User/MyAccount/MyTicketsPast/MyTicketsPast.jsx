// Luissssss
import SetReview from '../SetReview/SetReview';
import styles from './MyTicketsPast.module.css';

export default function MyTicketsPast() {
    return (
        <div className={styles.pTicketContainer}>
            <h1 className={styles.pastTicketsTitle}>Entradas anteriores</h1>
            <div className={styles.pTicketInfoContainer}>
            <div>
                <div>
                    <p className={styles.pTicketInfo}>ID de compra: XHR7T6</p>
                    <p className={styles.pTicketInfo}>Imagine Dragons</p>
                    <p className={styles.pTicketInfo}>1 x GENERAL</p>
                    <p className={styles.pTicketInfo}>03-07-2023 - 8:30 PM</p>
                    <p className={styles.pTicketInfo}>Estadio Nemesio Camacho</p>
                </div>
            </div>
            <div>
                <h1>Calificación por estrellas</h1>
                <SetReview />
            </div>
        </div>
            </div>
    )
}