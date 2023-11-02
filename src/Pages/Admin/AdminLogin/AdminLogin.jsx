// Luissssss
import styles from './AdminLogin.module.css';
import logoColor from "../../../assets/logo_mi_butaca_color.svg";

export default function AdminLogin() {

    // Los admin se agregan manualmente a la tabla?
    // Cómo funciona la lógica en este caso? Al hacer clic en ingresar se consulta al back si email y password existen en la bd, y si es el caso se le da acceso?
    // Cómo garantizar que pueda entrar a las otras si no está logueado? Repasar RyM


    return (
        <div>
            <div className={styles.adminLoginBanner}>
            <img className={styles.adminLoginLogo} src={logoColor} alt="imagen logo mi butaca" />
            <p className={styles.adminBannerText}>Login del Administrador</p>
            </div>
            <div className={styles.formContainer}>
                <form>
                    <div>
                    <label>email</label>
                    <input></input>
                    </div>
                    <div>
                    <label>contraseña</label>
                    <input></input>
                    </div>
                    <div>
                    <button>Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}