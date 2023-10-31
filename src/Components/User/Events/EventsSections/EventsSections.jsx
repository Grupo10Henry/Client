import AllEvents from "../AllEvents/AllEvents"
import MostPopular from "../MostPopular/MostPopular"
import NextEvents from "../NextEvents/NextEvents"

const EventsSections = ({ sectionRef }) => {
  return (
    <>
      <MostPopular sectionRef={sectionRef} />
      <NextEvents />
      <AllEvents />
    </>
  )
}
export default EventsSections
