// Luissssss
import { useDispatch, useSelector } from 'react-redux';
import MyAccountInfo from '../../../Components/User/MyAccount/MyAccountInfo/MyAccountInfo';
import MyTicketsActive from '../../../Components/User/MyAccount/MyTicketsActive/MyTicketsActive';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './MyAccount.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import { getPaystubById } from '../../../redux/paystubslice';
import { instance } from '../../../axios/config';

export default function MyAccount() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const {paystubs} = useSelector((s) => s.paystub);

    const getPaystub = async () => {
        try {
            const {data} = await instance.get(`/paystub/${params.id}`) // axios.get(`http://localhost:3001/paystub/${params.id}`) | instance.get(`/paystub/${params.id}`)
            // console.log(data)
            return data
        } catch (error) {
            console.log(error)            
        }
    };

    useEffect(() => {
        getPaystub().then((data) => {
            dispatch(getPaystubById(data))
        })
    }, []
    );

    const sortedPaystubs = [...paystubs].sort((a, b) => new Date(b.issueDate) - new Date(a.issueDate))

    // console.log(paystubs)
    // console.log(sortedPaystubs)

    return (
        <div className={styles.myAccountContainer}>
            <div className={styles.myTicketsContainer}>
            <h1 className={styles.myTicketsTitle}>Entradas compradas</h1>
            {sortedPaystubs?.length ? sortedPaystubs?.map((paystub) => (
                <MyTicketsActive
                key={paystub.paystubID}
                eventID={paystub.eventID}
                issueDate={paystub.issueDate}
                paymentNum={paystub.paymentNum}
                paystubID={paystub.paystubID}
                tickets={paystub.tickets}
                />
            )
            ) : (
            <div className={styles.noTicketsContainer}>
            <h1 className={styles.myTicketsSubtitle}>Actualmente no tienes entradas activas. Busca eventos y compra tus entradas <button className={styles.myTicketsSubtitleLink} onClick={()=>{navigate('/')}}>aquí</button></h1>
            </div>
            )}
            </div>
            <MyAccountInfo />
        </div>
    )
}