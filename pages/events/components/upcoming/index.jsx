import React, { useEffect, useState } from "react";
import styles from "./upcoming.module.scss";
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

const filters = ["All", "Today", "This week", "This month"];

export default function UpcomingEvents() {
  const [activeTab, setActiveTab] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log({ text });
  }, [text]);

  return (
    <div className={styles.upcoming_wrapper}>
      <div className={styles.title}>Upcoming Events</div>

      <div className={styles.filters}>
        <div className={styles.left}>
          {filters.map((filter, index) => (
            <span
              className={filter === activeTab ? styles.__active : ""}
              key={index}
              onClick={() => setActiveTab(filter)}
            >
              {filter}
            </span>
          ))}
          <div className={styles.divider} />
        </div>
        <div className={styles.right}>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Search events by name"
          />
        </div>
      </div>

      <div className={styles.events}>
        {[...EVENTS, ...EVENTS].map((oneEvent) => {
          const { imageName: image } = oneEvent;
          return <Event key={image} image={image} />;
        })}
      </div>

      <div className={styles.action}>
        <span> Load More Events </span>
        <DownArrow />
      </div>
    </div>
  );
}

function DownArrow() {
  return (
    <svg
      width="15"
      height="19"
      viewBox="0 0 15 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.0625 12.1667H1L7.5 17.5L14 12.1667L8.5 12.1667C7.94772 12.1667 7.5 11.719 7.5 11.1667L7.5 1.5"
        stroke="#131616"
        stroke-width="1.5"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </svg>
  );
}
