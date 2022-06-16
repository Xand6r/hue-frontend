import React, { useState } from "react";
import styles from "./events.module.scss";
import Slider from "react-slick";
import RightArrow from "components/svg/rightArrow";
import ProgressBar from "components/progressbar";

import Event from "components/eventcard";
import CONSTANTS from "utils/constants";

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
  const [progress, setProgress] = useState(30);
  const settings = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    beforeChange: (index) => {
      index++;
      setProgress(index * 100 / 3);
    },
    responsive: [
      {
        breakpoint: 850,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };
  return (
    <div id="eventcomponent" className={styles.event}>
      <div className={styles.top_section}>
        <div className={styles.header__text}>Upcoming Events</div>
        <div className={styles.action_button}>
          See All Events <RightArrow />
        </div>
      </div>

      <div className={styles.progress_bar}>
        <ProgressBar percentage={progress} />
      </div>

      <div className={styles.bottom_section}>
        {EVENTS.map((oneEvent) => {
          const { imageName: image } = oneEvent;
          return <Event key={image} image={image} />;
        })}
      </div>

      {/* mobile bottom section */}
      <div className={styles.bottom_section_mobile}>
        <Slider {...settings}>
          {EVENTS.map((oneEvent) => {
            const { imageName: image } = oneEvent;
            return <Event key={image} image={image} />;
          })}
        </Slider>
      </div>
      {/* mobile bottom section */}

      <div className={styles.action_button_mobile}>
        See All Events <RightArrow />
      </div>
    </div>
  );
}
