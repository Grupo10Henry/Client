import { IoStar } from "react-icons/io5"

const styleStarGray = {
  color: "gray",
}

const StarRating = ({ rating }) => {
  const stars = []

  for (let i = 0; i < Math.round(rating); i++) {
    stars.push(<IoStar key={i} />)
  }

  return (
    <>
      {stars}
      {stars.length < 5
        ? [...Array(5 - stars.length)].map((_, starIndex) => (
            <IoStar key={starIndex} style={styleStarGray} />
          ))
        : null}
    </>
  )
}
export default StarRating
