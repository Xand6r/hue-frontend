import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import moment from 'moment';

import styles from "./eventcard.module.scss";

const EventCard = ({ image, name, description, day }) => {
  const date = moment(day);
  console.log({date})
  return (
    <div className={styles.eventcard}>
      <div className={styles.eventimage}>
        <Image src={image} layout="fill" />
      </div>
      <div className={styles.eventcontent}>
        <div className={styles.datetime}>
          <span>{moment(day).format("MMM DD, YYYY")}</span>
          <DotSeperator />
          <span>{moment(day).format('hh a')}</span>
        </div>

        <div className={styles.title}>{name}</div>

        <div className={styles.subtitle}>{description}</div>

        <div className={styles.meta}>
          <div className={styles.button}>Buy Tickets</div>
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
  image: "",
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
