// juli
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentDate, setEventID } from '../../../redux/counterSlice';
import { selectEventsCount } from '../../../redux/eventsCountSlice';


const CountdownTimer = ({ eventID }) => {
  const dispatch = useDispatch();
  const events = useSelector(selectEventsCount);
  const event = events[eventID];

  if (!event) {
    return <div>Event not found</div>;
  }

  const { eventDate, eventTime } = event;
  const targetDateTime = new Date(`${eventDate} ${eventTime}`).getTime();
  const currentDate = useSelector((state) => state.counter.currentDate);

  useEffect(() => {
   dispatch(setEventID(eventID));

   const interval = setInterval(() => {
      dispatch(setCurrentDate(new Date().getTime()));
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, eventID]);

  const timeDifference = targetDateTime - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return (
    <div>
      <div>{days} days</div>
      <div>{hours} hours</div>
      <div>{minutes} minutes</div>
      <div>{seconds} seconds</div>
    </div>
  );
};

export default CountdownTimer;
