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

    return (
        <div className={styles.abc}>
            <h1>Edita la pregunta y respuesta</h1>
            <div>
            <label>Pregunta:</label>
            <input
            // placeholder={faqById?.question}
            name="question"
            type="text"
            value={updatedFaq?.question}
            onChange={handleChange}
            />
            </div>
            <div>
            <label>Respuesta:</label>
            <input
            // placeholder={faqById?.answer}
            name="answer"
            type="textarea"
            value={updatedFaq?.answer}
            onChange={handleChange}          
            />
            </div>
            <div>
            <button>Guardar cambios</button>
            <button onClick={handleCancel}>Cancelar</button>
            </div>
        </div>
    )

};