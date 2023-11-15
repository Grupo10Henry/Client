import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5"

import style from "./DevelopersAbout.module.css"

const DevelopersProfile = ({ fullName, photo, linkedin, github, location }) => {
  return (
    <div className={style.profileWrapper}>
      <img src={photo} alt={`foto de perfil de ${fullName}`} />
      <h4 className={`gradient-text ${style.profileName}`}>{fullName}</h4>
      <span className={style.profileLocation}>
        <IoLocationSharp />
        {location}
      </span>
      <div className={style.profileText}>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  )
}
export default DevelopersProfile
