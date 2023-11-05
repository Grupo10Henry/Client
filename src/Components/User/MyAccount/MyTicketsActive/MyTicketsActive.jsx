// Luissssss
import SetReview from '../SetReview/SetReview';
import styles from './MyTicketsActive.module.css';

export default function MyTicketsActive() {
    return (
        <div className={styles.aTicketContainer}>
            <h1 className={styles.activeTicketsTitle}>Entradas activas</h1>
            <div className={styles.aTicketInfoContainer}>
            <div>
                <div>
                    <p className={styles.aTicketInfo}>ID de compra: ASXC6D</p>
                    <p className={styles.aTicketInfo}>Karol G</p>
                    <p className={styles.aTicketInfo}>2 x PLATEA</p>
                    <p className={styles.aTicketInfo}>25-10-2023 - 7:00 PM</p>
                    <p className={styles.aTicketInfo}>Estadio Atanasio Girardot</p>
                </div>
                <div>
                    <button className={styles.aTicketButton}>Ver</button>
                    <button className={styles.aTicketButton}>Imprimir</button>
                    <button className={styles.aTicketButton}>Descargar</button>
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