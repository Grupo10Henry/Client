// Luissssss
import MyAccountInfo from '../../../Components/User/MyAccount/MyAccountInfo/MyAccountInfo';
import MyTicketsActive from '../../../Components/User/MyAccount/MyTicketsActive/MyTicketsActive';
import MyTicketsPast from '../../../Components/User/MyAccount/MyTicketsPast/MyTicketsPast';

import styles from './MyAccount.module.css';

export default function MyAccount() {
    return (
        <div>
            <h1>My Account :{")"}</h1>
            <MyTicketsActive />
            <MyTicketsPast />
            <MyAccountInfo />
        </div>
    )
}