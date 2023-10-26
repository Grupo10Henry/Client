// Luissssss
import { NavLink } from 'react-router-dom';
import styles from './AdminNavbar.module.css';

export default function AdminNavbar() {
    return (
        <div className={styles.adminNavContainer}>
            <div>
                <button className={styles.adminNavbarButton}>
                    Ver eventos
                </button>
                </div>
            <div>
                <button className={styles.adminNavbarButton}>
                    Editar eventos
                </button>
            </div>
            <div>
                <button className={styles.adminNavbarButton}>
                    Ver usuarios
                </button>
            </div>
            <div>
                <button className={styles.adminNavbarButton}>
                    Datos de contacto
                </button>
            </div>
            <div>
                <button className={styles.adminNavbarButton}>
                    Preguntas frecuentes
                </button>
            </div>
            <div>
                <button className={styles.adminNavbarButton}>
                    Reseñas
                </button>
            </div>
        </div>
    )
}