import { createContext, useState } from "react";
const context = createContext()

const Context = ({ children }) => {

   const [view, setView] = useState(false)

   const contactTrue = () => {
      setView(true)
   }
   const contactFalse = () => {
      setView(false)
   }


   return (
      <context.Provider
         value={{
            view, contactFalse, contactTrue
         }}>
         {children}
      </context.Provider>
   )
}

export { Context, context }