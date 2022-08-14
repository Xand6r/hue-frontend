import React, { useState } from "react";
import styles from "./events.module.scss";
import Slider from "react-slick";
import RightArrow from "components/svg/rightArrow";
import ProgressBar from "components/progressbar";
import { useRouter } from "next/router";

import Event from "components/eventcard";

export default function Index({ events = [] }) {
  const [progress, setProgress] = useState(30);
  const settings = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    beforeChange: (index) => {
      index++;
      setProgress((index * 100) / 3);
    },
    responsive: [
      {
        breakpoint: 850,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  const router = useRouter();

  return (
    <div id="eventcomponent" className={styles.event}>
      <div className={styles.top_section}>
        <div className={styles.header__text}>Upcoming Events</div>
        <div
          onClick={(e) => {
            e.preventDefault();
            router.push("/events");
          }}
          className={styles.action_button}
        >
          See All Events <RightArrow />
        </div>
      </div>

      <div className={styles.progress_bar}>
        <ProgressBar percentage={progress} />
      </div>

      <div className={styles.bottom_section}>
        {events.map((oneEvent) => {
          const { image, name, description, day, _id } = oneEvent;
          return (
            <Event
              key={_id}
              name={name}
              image={image}
              description={description}
              day={day}
            />
          );
        })}
      </div>

      {/* mobile bottom section */}
      <div className={styles.bottom_section_mobile}>
        <Slider {...settings}>
          {events.map((oneEvent) => {
            const { image, name, description, day, _id } = oneEvent;
            return (
              <Event
                key={_id}
                name={name}
                image={image}
                description={description}
                day={day}
              />
            );
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
