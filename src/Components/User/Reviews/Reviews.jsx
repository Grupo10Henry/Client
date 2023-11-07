//Guada

import ReviewsUser from "./ReviewsUser/ReviewsUser"
import ReviewsEvent from "./ReviewsEvent/ReviewsEvent"

import style from "./Reviews.module.css"

const Reviews = () => {
  return (
    <div>
      <h1 className={style.reviewTitle}>EVENTOS ANTERIORES</h1>
      <ReviewsEvent />
      <ReviewsUser />
    </div>
  )
}

export default Reviews
