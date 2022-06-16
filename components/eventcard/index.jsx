import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import styles from "./eventcard.module.scss";

const EventCard = ({ image }) => {
  return (
    <div className={styles.eventcard}>
      <div className={styles.eventimage}>
        <Image src={image} layout="fill"/>
      </div>
      <div className={styles.eventcontent}>
        <div className={styles.datetime}>
          <span>July 12, 2022</span>
          <DotSeperator />
          <span>5pm</span>
        </div>

        <div className={styles.title}>Holiday Rendevous</div>

        <div className={styles.subtitle}>
          Experience Chicago differently. Let your hair down and unwind to a
          luxury lounging...
        </div>

        <div className={styles.meta}>
          <div className={styles.button}>
            Buy Tickets
          </div>
          <span>See Details</span>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  image: PropTypes.string.isRequired,
};
EventCard.defaultProps = {
  image: "pupu",
};

const DotSeperator = () => (
  <svg
    width="2"
    height="3"
    viewBox="0 0 2 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="1" cy="1.5" r="1" fill="#CAC8C7" />
  </svg>
);
export default EventCard;
