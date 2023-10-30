//Guada
import style from "./FAQDetail.module.css"

const FAQDetail = () => {

    const FAQS = [
        {
    question: '¿Cómo me puedo registrar?',
    answer: 'Te puedes registrar haciendo clic en el botón de Registro en la barra de navegación. Acá debes completar todos tus datos y hacer clic en Registrarme'
        },
        {
    question: '¿Me puedo registrar con Google?',
    answer: 'Sí. Puedes hacerlo desde la página de Registro. En la parte inferior encontrarás la opción'
        },
        {
    question: '¿Qué medios de pago hay?',
    answer: 'Puedes comprar tus entradas a través de epayco con tarjeta débito y crédito'
        },
    ]
    
        return(
            <div className={style.faqContainer}>
                <h1>PREGUNTAS FRECUENTES</h1>
            {FAQS.map((faq) => (
                <><p className={style.question}>{faq.question}</p><p className={style.answer}>{faq.answer}</p></>
            ))}
            </div>
        )
    }
    
    export default FAQDetail