import React from "react";
import styles from "./events.module.scss";
import RightArrow from "components/svg/rightArrow";

import Event from "components/eventcard";

const EVENTS = [
  {
    imageName: "/images/event1.png",
  },
  {
    imageName: "/images/event2.png",
  },
  {
    imageName: "/images/event3.png",
  },
];

export default function index() {
  return (
    <div className={styles.event}>
      <div className={styles.top_section}>
        <div className={styles.header__text}>Upcoming Events</div>
        <div className={styles.action_button}>
          See All Events <RightArrow />
        </div>
      </div>

      <div className={styles.bottom_section}>
        {EVENTS.map((oneEvent) => {
          const { imageName: image } = oneEvent;
          return <Event image={image} />;
        })}
      </div>
    </div>
  );
}
