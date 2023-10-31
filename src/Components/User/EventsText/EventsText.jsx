import style from "./EventsText.module.css"

const EventsText = () => {
  return (
    <section className={style.eventsText}>
      <div className={style.eventsTextTitle}>
        <h2 className={style.eventsTextH2}>Eventos:</h2>
      </div>
      <p className={style.eventsTextContent}>
        Explora nuestros emocionantes eventos. Desde conciertos y obras de
        teatro hasta proyecciones de cine y eventos deportivos, en Mi Butaca te
        ofrecemos una amplia variedad de experiencias en vivo. Encuentra tus
        próximas salidas y asegura tus boletos con nosotros. ¡La diversión está
        a solo un clic de distancia!
      </p>
    </section>
  )
}
export default EventsText
