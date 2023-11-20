import React from "react"
import convertToRealtiveDate from "../../../../utils/relativeDate"
import Loader from "../../Loader/Loader"
import StarRating from "../../StarRating/StarRating"

import useReviewsEvent from "../../../../hooks/useReviewsEvent"
import style from "./ReviewsEvent.module.css"

const ReviewsEvent = () => {
  const {
    isLoading,
    isError,
    reviews,
    shownPrevEvents,
    calculateAverageRating,
  } = useReviewsEvent()

  if (isLoading) {
    return <Loader />
  } else if (isError) {
    return <div>{isError}</div>
  } else if (shownPrevEvents?.length === 0) {
    return <div>No hay reviews</div>
  }

  return (
    <div className={style.reviewsEvent}>
      {}
      {shownPrevEvents?.map((review) => (
        <div key={review.eventID} className={style.reviewEvent}>
          <div className={style.imgEventContainer}>
            <img
              src={review.image}
              alt={`Imagen de ${review.name}`}
              className={style.eventImage}
            />
          </div>
          <div className={style.infoEventContainer}>
            <h4 className={style.nameEvent}>{review.name}</h4>
            <p className={style.dateEvent}>
              {convertToRealtiveDate(review.date)} a las: {review.time}
              hs.
            </p>
            <div className={style.reviewEventStars}>
              <StarRating
                rating={calculateAverageRating(reviews, review.eventID)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReviewsEvent
