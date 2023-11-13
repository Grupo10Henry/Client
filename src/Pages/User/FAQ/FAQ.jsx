//Guada

import DocumentTitle from "../../../Components/DocumentTitle/DocumentTitle"
import FAQDetail from "../../../Components/User/FAQDetail/FAQDetail"
import style from "./FAQ.module.css"

const FAQ = () => {
  return (
    <div className={style.FAQDetailContainer}>
      <DocumentTitle title="Preguntas Frecuentes" />
      <div>
        <FAQDetail />
      </div>
    </div>
  )
}

export default FAQ
