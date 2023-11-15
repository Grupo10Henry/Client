import { FaLinkedinIn, FaGithub } from "react-icons/fa"

import style from "./DevelopersAbout.module.css"

const DevelopersProfile = ({ fullName, photo, linkedin, github }) => {
  return (
    <div className={style.profileWrapper}>
      <img src={photo} alt="foto de desarrollador" />
      <h4 className={`gradient-text ${style.profileName}`}>{fullName}</h4>
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
