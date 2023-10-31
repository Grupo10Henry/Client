import { useSelector } from "react-redux"

const EventsFiltered = () => {
  const { isLoading } = useSelector((s) => s.events)

  if (isLoading) {
    return <h2>LOADING...</h2>
  }

  return <div>EventsFiltered</div>
}
export default EventsFiltered
