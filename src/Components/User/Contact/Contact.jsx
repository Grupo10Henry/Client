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

    // se guarda la informacion a enviar al back
    let newConsultation = {
      name: userData.name,
      lastName: userData.lastName,
      email: userData.email,
      phone: userData.phone,
      consultation: userData.consultation,
    }

    try {
      await instance.post('/contactForm', newConsultation)
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
  return (
    <>
    <div className={`${style.contact} ${Show}`}>
        <form onSubmit={handlerSubmit}>
        <h4 className={style.title}>¿Tienes alguna consulta?</h4>
        <h4 className={style.title}>Contáctanos.</h4>
        <div>
          <div>
            <label>Nombre:</label>
            <input
                // className={style.inputField}
                className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                pattern="^[A-Za-zÁáÉéÍíÓóÚúÜüÇçÑñ\s]{1,15}"
                title="Solo letras y espacios, máximo 15 caracteres"
              type="text"
                id="name"
                placeholder="Ingrese su nombre"
              name="name"
                required
              value={userData.name}
              onChange={handlerChange}
            />
          </div>

          <div>
            <label>Apellido:</label>
            <input 
                // className={style.inputField}
                className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="lastName"
                required
                pattern="^[A-Za-zÁáÉéÍíÓóÚúÜüÇçÑñ\s]{1,15}"
                title="Solo letras y espacios, máximo 15 caracteres"
              type="text"
                placeholder="Ingrese su apellido"
              name="lastName"
              value={userData.lastName}
              onChange={handlerChange}
            />
          </div>

          <div>
              <label>Correo Electronico:</label>
            <input 
                // className={style.inputField}
                className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="email"
              type="text"
                placeholder="Ingrese su correo electronico"
              name="email"
              value={userData.email}
                required
              onChange={handlerChange}
            />
          </div>

          <div>
            <label>Telefono:</label>
            <input
                // className={style.inputField}
                className="block w-full flex-grow rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="phone"
              type="text"
                placeholder="Ingrese su numero de telefono"
              name="phone"
              value={userData.phone}
                required
                pattern="^\+?\d{1,19}$"
                title="Debe contener solo números. El primer carácter puede ser el signo '+'. Máximo 20 caracteres."
              onChange={handlerChange}
            />
          </div>

          <div>
            <label>Consulta:</label>
            <input
                // className={style.inputField}
                className="block w-full flex-grow rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="phone"
              type="text"
                placeholder="Ingrese su consulta"
              name="consultation"
              value={userData.consultation}
              onChange={handlerChange}
                title="Debe ingresar una consulta"
                required
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
    </>
  )
}

export default Contact
