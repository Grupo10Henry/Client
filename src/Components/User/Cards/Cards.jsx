// Kevin uwu
import Card from "./Card"

import style from "./Cards.module.css"

const Cards = ({ data }) => {
  return (
    <div className={style.cards}>
      {data?.map((event) => (
        <Card key={event?.eventID} {...event} />
      ))}
    </div>
  )
}

export default Cards
