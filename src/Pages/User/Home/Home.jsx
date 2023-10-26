// Kevin -^-

import AllEvents from "../../../Components/User/Events/AllEvents/AllEvents";
import MostPopular from "../../../Components/User/Events/MostPopular/MostPopular";
import NextEvents from "../../../Components/User/Events/NextEvents/NextEvents";

import style from "./Home.module.css";

const Home = () => {

   return (
      <div className={style.home}>
         <h1>Home</h1> <br />
         <div>
            <MostPopular />
         </div>
         <div>
            <NextEvents />
         </div>
         <div>
            <AllEvents />
         </div>
      </div>
   )
}

export default Home