import DevelopersProfile from "./DevelopersProfile"
import developers from "./developers"

import style from "./DevelopersAbout.module.css"

const DevelopersCards = () => {
  return (
    <div className={style.cardsWrapper}>
      {developers.map((dev) => (
        <DevelopersProfile key={dev.id} {...dev} />
      ))}
    </div>
  )
}
export default DevelopersCards
