import AllEvents from "../AllEvents/AllEvents"
import MostPopular from "../MostPopular/MostPopular"
import NextEvents from "../NextEvents/NextEvents"

const EventsSections = () => {
  return (
    <>
      <MostPopular />
      <NextEvents />
      <AllEvents />
    </>
  )
}
export default EventsSections
