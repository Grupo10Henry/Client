// Luissssss
import MyAccountInfo from '../../../Components/User/MyAccount/MyAccountInfo/MyAccountInfo';
import MyTickets from '../../../Components/User/MyAccount/MyTickets/MyTickets';
import styles from './MyAccount.module.css';

export default function MyAccount() {
    return (
        <div>
            <h1>My Account :{")"}</h1>
            <MyTickets />
            <MyAccountInfo />
        </div>
    )
}