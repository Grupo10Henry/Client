// Kevin :3
import { useContext, useState } from "react"
import { context } from "./Context/Context"

import style from "./Contact.module.css"
// necesito ayuda con el diseño de la tarjeta de Contacto

const Contact = () => {

   const { view } = useContext(context)

   const [userData, setUserData] = useState({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      request: "",
   })

   // const [error, setError] = useState({
   //    name: "",
   //    lastName: "",
   //    email: "",
   //    phone: "",
   //    request: "",
   // })

   return (
      <div className={view ? style.contactTrue : style.contactFalse}>
         <form action="">
            <h1>Contactanos</h1>
            <div>
               <label> Nombre: <input
                  type="text"
                  placeholder="ingrese su nombre"
                  name="name"
                  value={userData.name} />
               </label> <br />
               <label> Apellido: <input
                  type="text"
                  placeholder="ingrese su apellido"
                  name="lastName"
                  value={userData.lastName} />
               </label><br />
               <label> Email: <input
                  type="text"
                  placeholder="ingrese su email"
                  name="email"
                  value={userData.email} />
               </label><br />
               <label> Telefono: <input
                  type="text"
                  placeholder="ingrese su numero de telefono"
                  name="phone"
                  value={userData.phone} />
               </label><br />
               <label> Consulta: <input
                  type="text"
                  placeholder="ingrese su Consulta"
                  name="request"
                  value={userData.request} />
               </label><br />
               <button>Enviar</button>
            </div>
         </form>
      </div>
   )
}

export default Contact