// Kevin -^-

import AllEvents from "../../../Components/User/Events/AllEvents/AllEvents";
import MostPopular from "../../../Components/User/Events/MostPopular/MostPopular";
import NextEvents from "../../../Components/User/Events/NextEvents/NextEvents";

import "./Home.module.css";

export default Home = () => {

   return (
      <div>
         <h1>Home</h1>
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