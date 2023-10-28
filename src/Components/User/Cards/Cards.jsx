// Kevin uwu

import Card from "./Card";

import events from "../Events/Events";

import style from "./Cards.module.css";

const Cards = () => {
   return (
      <div className={style.cards}>
         {
            events.map(event =>
               <Card event={event} />
            )}
      </div>
   )
}

export default Cards 
