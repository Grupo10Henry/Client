// Kevin :3
import { useState } from "react"


import "./Contact.module.css"

const Contact = () => {

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
      <div>
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
            </div>
         </form>
      </div>
   )
}

export default Contact