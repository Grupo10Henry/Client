import { useRef } from "react"

export const useScrollTo = () => {
  //scroll to section mostPopular
  const sectionRef = useRef(null)

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const handleScrollClick = () => {
    // Simulación de asignación de referencia a un elemento del DOM (puedes cambiar esto por tu lógica)
    // Aquí se está asignando la referencia al div con id="mostPopular" como ejemplo
    const mostPopularSection = document.getElementById("mostPopular")

    // Asigna la referencia al elemento del DOM que quieres desplazar
    if (mostPopularSection) {
      sectionRef.current = mostPopularSection
      scrollToSection()
    } else {
      console.error("El elemento 'mostPopular' no se encontró en el DOM.")
    }
  }

  return {
    sectionRef,
    handleScrollClick,
  }
}
