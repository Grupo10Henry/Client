// Kevin :3
import { useContext, useState } from "react"

import style from "./Contact.module.css"
import { Context } from "../../../Context/Context"
// necesito ayuda con el diseño de la tarjeta de Contacto

const Contact = () => {
  const { view, contactFalse } = useContext(Context)

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    request: "",
  })
  const Show = view && style.contactShow

  const handlerChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  return (
    <div className={`${style.contact} ${Show}`}>
      <form>
        <h4 className={style.title}>Contactanos</h4>
        <div>
          <div className={style.inputField}>
            <label>Nombre:</label>

            <input
              type="text"
              placeholder="ingrese su nombre"
              name="name"
              value={userData.name}
              onChange={handlerChange}
            />
          </div>

          <div className={style.inputField}>
            <label>Apellido:</label>
            <input
              type="text"
              placeholder="ingrese su apellido"
              name="lastName"
              value={userData.lastName}
              onChange={handlerChange}
            />
          </div>

          <div className={style.inputField}>
            <label>Email: </label>
            <input
              type="text"
              placeholder="ingrese su email"
              name="email"
              value={userData.email}
              onChange={handlerChange}
            />
          </div>

          <div className={style.inputField}>
            <label>Telefono:</label>
            <input
              type="text"
              placeholder="ingrese su numero de telefono"
              name="phone"
              value={userData.phone}
              onChange={handlerChange}
            />
          </div>

          <div className={style.inputField}>
            <label>Consulta:</label>

            <input
              type="text"
              placeholder="ingrese su Consulta"
              name="request"
              value={userData.request}
              onChange={handlerChange}
            />
          </div>
        </div>
        <button type="submit" className={style.btn}>
          Enviar
        </button>
      </form>
      <button onClick={contactFalse} className={style.close}>
        Cerrar
      </button>
    </div>
  )
}

export default Contact
