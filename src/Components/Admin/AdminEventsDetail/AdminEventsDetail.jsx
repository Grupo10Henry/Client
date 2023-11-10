// Luiiiis...
import { useDispatch } from 'react-redux'
import styles from './AdminEventsDetail.module.css'
import { useParams } from 'react-router-dom';
import { instance } from '../../../axios/config';
import { useEffect, useState } from 'react';

export default function AdminEventsDetail () {

    const dispatch = useDispatch();
    const params = useParams();

    const [updatedEvent, setUpdatedEvent] = useState();


    const getEvent = async () => {
        try {
            const {data} = await instance.get(`event/${params.id}`)
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getEvent()
    }, []
    );

    return (
        <div className={styles.editEventContainer}>
            <h1 className={styles.EventsDetailTitle}> Edita el evento creado</h1>
        </div>
    )

};