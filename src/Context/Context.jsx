import { createContext, useState } from "react"

export const Context = createContext()

const ContextProvider = ({ children }) => {
  const [view, setView] = useState(false)

  const contactTrue = () => {
    setView(true)
  }
  const contactFalse = () => {
    setView(false)
  }

  return (
    <Context.Provider
      value={{
        view,
        contactFalse,
        contactTrue,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
