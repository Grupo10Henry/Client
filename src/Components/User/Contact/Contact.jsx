// Kevin :3
import { useContext, useState } from "react"

import style from "./Contact.module.css"
import { Context } from "../../../Context/Context"
import { instance } from "../../../axios/config"
// necesito ayuda con el diseño de la tarjeta de Contacto :(

const Contact = () => {
  const { view, contactFalse } = useContext(Context)

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    consultation: "",
  })
  const Show = view && style.contactShow;

  const handlerChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const handlerSubmit = async (e) => {
    e.preventDefault();

    //verifica si hay algo en los imputs, si no hay nada o falta alguno, retorna una alerta
    // if (!userData.name
    //   || !userData.lastName
    //   || !userData.email
    //   || !userData.phone
    //   || !userData.consultation) {
    //   alert("Por favor, completa todos los campos para enviar la consulta.");
    //   return;
    // }

    // se guarda la informacion a enviar al back
    let newConsultation = {
      name: userData.name,
      lastName: userData.lastName,
      email: userData.email,
      phone: userData.phone,
      consultation: userData.consultation,
    }

    try {
      await instance.post('/contactForm/', newConsultation) // http://localhost:3001/contactForm //? RUTA
      window.alert('Se envio su consulta exitosamente! los encargados estaran al tanto de su consulta. Gracias por su tiempo')
      setUserData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        consultation: "",
      })

    } catch (error) {
      console.log(error?.response?.data.error || error)
    }
  }
  // onSubmit={handlerSubmit} // esto se pondra una vez quiten el "userID" del modelo del contactForm
  return (
    <div className={`${style.contact} ${Show}`}>
      <form >
        <h4 className={style.title}>¿Tienes alguna consulta?</h4>
        <h4 className={style.title}>Contáctanos.</h4>
        <div>
          <div>
            <label>Nombre:</label>
            <input
              className={style.inputField}
              type="text"
              placeholder="ingrese su nombre"
              name="name"
              value={userData.name}
              onChange={handlerChange}
            />
          </div>

          <div>
            <label>Apellido:</label>
            <input 
              className={style.inputField}
              type="text"
              placeholder="ingrese su apellido"
              name="lastName"
              value={userData.lastName}
              onChange={handlerChange}
            />
          </div>

          <div>
            <label>Email: </label>
            <input 
              className={style.inputField}
              type="text"
              placeholder="ingrese su email"
              name="email"
              value={userData.email}
              onChange={handlerChange}
            />
          </div>

          <div>
            <label>Telefono:</label>
            <input
              className={style.inputField}
              type="text"
              placeholder="ingrese su numero de telefono"
              name="phone"
              value={userData.phone}
              onChange={handlerChange}
            />
          </div>

          <div>
            <label>Consulta:</label>
            <input
              className={style.inputField}
              type="text"
              placeholder="ingrese su consulta"
              name="consultation"
              value={userData.consultation}
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
