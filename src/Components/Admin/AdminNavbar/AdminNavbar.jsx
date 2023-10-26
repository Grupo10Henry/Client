// Luissssss
import { NavLink } from 'react-router-dom';
import styles from './AdminNavbar.module.css';

export default function AdminNavbar() {
    return (
        <div className={styles.adminNavContainer}>
            <p>AdminNavBar :{")"}</p>
            <div>
            <NavLink to="/adminevents" >
                <button>
                    Ver eventos
                </button>
            </NavLink>
                </div>
                <div>
            <NavLink to="/admineventscreate" >
                <button>
                    Editar eventos
                </button>
            </NavLink>
                </div>
            <div>
            <NavLink to="/adminusers" >
                <button>
                    Ver usuarios
                </button>
            </NavLink>
            </div>
            <div>
            <NavLink to="/adminfooter" >
                <button>
                    Datos de contacto
                </button>
            </NavLink>
            </div>
            <div>
            <NavLink to="/adminfaq" >
                <button>
                    Preguntas frecuentes
                </button>
            </NavLink>
            </div>
            <div>
            <NavLink to="/adminreviews" >
                <button>
                    Reseñas
                </button>
            </NavLink>
            </div>
            {/* <NavLink to="/" >
                <button>
                    Texto
                </button>
            </NavLink>
            Poner link a Login? */}
        </div>
    )
}