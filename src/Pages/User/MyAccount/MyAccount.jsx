// Luissssss
import MyAccountInfo from '../../../Components/User/MyAccount/MyAccountInfo/MyAccountInfo';
import MyTicketsActive from '../../../Components/User/MyAccount/MyTicketsActive/MyTicketsActive';
import MyTicketsPast from '../../../Components/User/MyAccount/MyTicketsPast/MyTicketsPast';

import styles from './MyAccount.module.css';

export default function MyAccount() {
    return (
        <div>
            <div className={styles.AccountSections}>
            <button className={styles.AccountSectionsText}>Entradas activas</button>
            <button className={styles.AccountSectionsText}>Entradas anteriores</button>
            <button className={styles.AccountSectionsText}>Datos personales</button>
            </div>
            <MyTicketsActive />
            <MyTicketsPast />
            <MyAccountInfo />
        </div>
    )
}