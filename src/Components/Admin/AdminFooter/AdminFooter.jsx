//Guada
import { useState } from "react";
import style from "./AdminFooter.module.css"
//POST - EDIT - Envia al back la nueva información

const AdminFooter = () => {

    const [form, setForm] = useState({
        address: '',
        phone: '',
        email: '',
        businessHours: '',
        dataPolicy: '',
    })

    const editHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }

    const submitHandler = (event) => {
        event.preventDefault()
        //dispatch(postFooter(form))
    }

    return(
        <div className={style.AdminFooterContainer}>
            <h1>Información de contacto</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Dirección</label>
                    <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={editHandler}
                    />
                </div>
                <div>
                    <label>Teléfono</label>
                    <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={editHandler}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={editHandler}
                    />
                </div>
                <div>
                    <label>Horario de atención</label>
                    <input
                    type="text"
                    name="businessHours"
                    value={form.businessHours}
                    onChange={editHandler}
                    />
                </div>
                <div>
                    <label>Politica de datos</label>
                    <textarea
                        name="dataPolicy"
                        value={form.dataPolicy}
                        onChange={editHandler}
                    />
                </div>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}

export default AdminFooter;