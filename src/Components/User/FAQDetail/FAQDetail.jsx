//Guada
import { useDispatch, useSelector } from "react-redux";
import { instance } from "../../../axios/config";
import { useEffect, useState } from "react";
import style from "./FAQDetail.module.css"
import { getAllFaqs } from "../../../redux/faqSlice";

const FAQDetail = () => {

    const dispatch = useDispatch();
    const {allFaqs} = useSelector((s) => s.faq)

    const getFaqs = async () => {
        try {
          const { data } = await instance.get(`/faq/`) // instance.get(`/user/${params.id}`) || axios.get(`http://localhost:3001/user/${params.id}`)
        //   console.log(data)
          return data
        } catch (error) {
          console.log(error)
        }
    };

        useEffect(() => {
          getFaqs().then((data) => {
            dispatch(getAllFaqs(data));
          });
        }, []
    );

    // console.log(allFaqs)

    // const FAQS = [
    //     {
    // question: '¿Cómo me puedo registrar?',
    // answer: 'Te puedes registrar haciendo clic en el botón de Registro en la barra de navegación. Acá debes completar todos tus datos y hacer clic en Registrarme'
    //     },
    //     {
    // question: '¿Me puedo registrar con Google?',
    // answer: 'Sí. Puedes hacerlo desde la página de Registro. En la parte inferior encontrarás la opción'
    //     },
    //     {
    // question: '¿Qué medios de pago hay?',
    // answer: 'Puedes comprar tus entradas a través de epayco con tarjeta débito y crédito'
    //     },
    // ]
    
        return(
            <div className={style.faqContainer}>
                <h1>PREGUNTAS FRECUENTES</h1>
            {allFaqs.map((faq, index) => (
                <div key={`faq-${index}`}>
                    <p className={style.question}>{faq.question}</p>
                    <p className={style.answer}>{faq.answer}</p>
                </div>
            ))}
            </div>
        )
    }
    
    export default FAQDetail