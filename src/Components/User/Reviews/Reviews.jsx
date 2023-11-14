//Guada

import ReviewsUser from "./ReviewsUser/ReviewsUser"
import ReviewsEvent from "./ReviewsEvent/ReviewsEvent"

import style from "./Reviews.module.css"
import { useEffect, useState } from "react"
import axios from "axios"

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:3001/review")
      .then((res) => {
        setReviews(res?.data)
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <div>
      <h1 className={style.reviewTitle}>EVENTOS ANTERIORES</h1>
      <ReviewsEvent />
      <ReviewsUser reviews={reviews} />
    </div>
  )
}

export default Reviews
