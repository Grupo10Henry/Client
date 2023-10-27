// Luissssss
import { useState } from 'react';
import styles from './AdminNavbar.module.css';

export default function AdminNavbar({display, setDisplay}) {

    return (
        <div className={styles.adminNavContainer}>
            <div>
                <button className={styles.adminNavbarButton} onClick={() => {setDisplay({...display, show: "showEvents"})}}>
                    Ver eventos
                </button>
                </div>
            <div>
                <button className={styles.adminNavbarButton} onClick={() => {setDisplay({...display, show: "createEvents"})}}>
                    Crear eventos
                </button>
            </div>
            <div>
                <button className={styles.adminNavbarButton} onClick={() => {setDisplay({...display, show: "showUsers"})}}>
                    Ver usuarios
                </button>
            </div>
            <div>
                <button className={styles.adminNavbarButton} onClick={() => {setDisplay({...display, show: "editContact"})}}>
                    Datos de contacto
                </button>
            </div>
            <div>
                <button className={styles.adminNavbarButton} onClick={() => {setDisplay({...display, show: "editFAQ"})}}>
                    Preguntas frecuentes
                </button>
            </div>
            <div>
                <button className={styles.adminNavbarButton} onClick={() => {setDisplay({...display, show: "viewReviews"})}}>
                    Reseñas
                </button>
            </div>
        </div>
    )
}