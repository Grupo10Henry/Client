// Luissssss
import { useState } from 'react';
import styles from './AdminNavbar.module.css';

export default function AdminNavbar({display, setDisplay}) {

    return (
        <div className={styles.adminNavContainer}>
            <div>
                <button
                className={`${display.show === 'showEvents' ? styles.adminNavbarButtonActive : styles.adminNavbarButton}`}
                onClick={() => {setDisplay({...display, show: "showEvents"})}}>
                    Ver eventos
                </button>
                </div>
            <div>
                <button
                className={`${display.show === 'createEvents' ? styles.adminNavbarButtonActive : styles.adminNavbarButton}`}
                onClick={() => {setDisplay({...display, show: "createEvents"})}}>
                    Crear eventos
                </button>
            </div>
            <div>
                <button
                className={`${display.show === 'showUsers' ? styles.adminNavbarButtonActive : styles.adminNavbarButton}`}
                onClick={() => {setDisplay({...display, show: "showUsers"})}}>
                    Ver usuarios
                </button>
            </div>
            <div>
                <button
                className={`${display.show === 'editContact' ? styles.adminNavbarButtonActive : styles.adminNavbarButton}`}
                onClick={() => {setDisplay({...display, show: "editContact"})}}>
                    Datos de contacto
                </button>
            </div>
            <div>
                <button
                className={`${display.show === 'editFAQ' ? styles.adminNavbarButtonActive : styles.adminNavbarButton}`}
                onClick={() => {setDisplay({...display, show: "editFAQ"})}}>
                    Preguntas frecuentes
                </button>
            </div>
            <div>
                <button
                className={`${display.show === 'viewReviews' ? styles.adminNavbarButtonActive : styles.adminNavbarButton}`}
                onClick={() => {setDisplay({...display, show: "viewReviews"})}}>
                    Reseñas
                </button>
            </div>
        </div>
    )
}