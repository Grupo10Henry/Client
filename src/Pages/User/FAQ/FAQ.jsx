//Guada

import FAQDetail from "../../../Components/User/FAQDetail/FAQDetail"
import style from "./FAQ.module.css"

const FAQ = () => {
    return(
        <div className={style.FAQDetailContainer}>
            <div>
                <FAQDetail />
            </div>    
        </div>
    )
}

export default FAQ