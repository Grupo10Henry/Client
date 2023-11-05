// Luissssss
import styles from './MyTicketsActive.module.css';

export default function MyTicketsActive() {
    return (
        <div>
            <h1 className={styles.activeTickets}>Entradas activas</h1>
            <div>
                <div>
                    <h1>Info de boletas</h1>
                </div>
                <div>
                    <h1>Botones para ver, descargar e imprimir</h1>
                </div>
            </div>
            <div>
                <h1>Calificación por estrellas</h1>
            </div>
        </div>
    )
}