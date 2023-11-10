import { useDispatch, useSelector } from 'react-redux';
import styles from './AdminFAQDetail.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { instance } from '../../../axios/config';
import { useEffect, useState } from 'react';
import { getFaqById } from '../../../redux/faqSlice';

export default function AdminFAQDetail () {

    const dispatch = useDispatch();
    const {faqById} = useSelector((s) => s.faq);
    const params = useParams();
    // console.log(params.id)
    const navigate = useNavigate();

    const getFaq = async () => {
        try {
            const {data} = await instance.get(`/faq/${params.id}`);
            // console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFaq().then((data) => {
            dispatch(getFaqById(data))
            setUpdatedFaq(data)
        });
        return setUpdatedFaq({
            question: "",
            answer: "",
            faqID: ""
        });
    }, []
    );

    const [updatedFaq, setUpdatedFaq] = useState({
        question: "",
        answer: "",
        faqID: ""
    });

    console.log(updatedFaq);

    const handleChange = (e) => {
        setUpdatedFaq({
            ...updatedFaq,
            [e.target.name]: e.target.value
        })
    }

    const handleCancel = () => {
        navigate('/admin')
    }

    const handleUpdate = async () => {
        try {
            await instance.put(`/faq/${updatedFaq.faqID}`, updatedFaq);
            getFaq().then((data) => {
                dispatch(getFaqById(data))
                setUpdatedFaq(data)
            });
            alert('Se ha actualizado correctamente la pregunta frecuente')
        } catch (error) {
            alert(error.response.data.error)
        }
    }

    return (
        <div className={styles.editFaqContainer}>
            <h1 className={styles.editFaqTitle}>Edita la pregunta y la respuesta</h1>
            <div className={styles.editFaqFieldContainer}>
            <label className={styles.editFaqLabel}>Pregunta:</label>
            <input className={styles.editFaqInput}
            // placeholder={faqById?.question}
            name="question"
            type="text"
            value={updatedFaq?.question}
            onChange={handleChange}
            />
            </div>
            <div className={styles.editFaqFieldContainer}>
            <label className={styles.editFaqLabel}>Respuesta:</label>
            <input className={styles.editFaqInputTA}
            // placeholder={faqById?.answer}
            name="answer"
            type="textarea"
            value={updatedFaq?.answer}
            onChange={handleChange}          
            />
            </div>
            <div className={styles.editFaqFieldContainer}>
            <button className={styles.editFaqButton} onClick={handleUpdate}>Guardar</button>
            <button className={styles.editFaqButtonCancel} onClick={handleCancel}>Cancelar</button>
            <button className={styles.editFaqButtonReturn} onClick={() => {navigate('/admin')}}>Regresar</button>
            </div>
        </div>
    )

};