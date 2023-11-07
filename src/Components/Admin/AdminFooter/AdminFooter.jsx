//Guada
import { useState } from "react";
import style from "./AdminFooter.module.css"
//POST - EDIT - Envia al back la nueva información

const AdminFooter = () => {

    const [editMode, setEditMode] = useState(false);

    const [footerInfo, setFooterInfo] = useState({
        email: '',
        phone: '',
        adress: '',
        businessHours: '',
    })

    console.log(footerInfo);

    const editHandler = (event) => {
        setFooterInfo({
            ...footerInfo,
            [event.target.name]: event.target.value,
        });
    }

    const submitHandler = (event) => {
        event.preventDefault()

    // try {
    //     await 
    // } catch (error) {
        
    // }
    }

    return(
        <div className={style.AdminFooterContainer}>
            
            <form onSubmit={submitHandler}>
                <div className={style.InfoContactoAdmin}>
                <h2>Información de contacto</h2>
                <div>
                    <label>Dirección</label>
                    <input
                    type="text"
                    name="address"
                    value={footerInfo.address}
                    onChange={editHandler}
                    />
                </div>
                <div>
                    <label>Teléfono</label>
                    <input
                    type="text"
                    name="phone"
                    value={footerInfo.phone}
                    onChange={editHandler}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                    type="email"
                    name="email"
                    value={footerInfo.email}
                    onChange={editHandler}
                    />
                </div>
                <div>
                    <label>Horario de atención</label>
                    <input
                    type="text"
                    name="businessHours"
                    value={footerInfo.businessHours}
                    onChange={editHandler}
                    />
                </div>
                </div>
                {/* <div className={style.infoRedesAdmin}>
                <h2>Redes sociales</h2>
                <label>Link instagram</label>
                <input/>
                <label>Link facebook</label>
                <input/>
                <label>Link Linkedin</label>
                <input/>
                <label>Link whatApp</label>
                <input/>
                </div> */}

                <button type="submit">Guardar</button>
                <button>Cancelar</button>
            </form>
        </div>
    )
}

export default AdminFooter;