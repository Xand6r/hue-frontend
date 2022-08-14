import React, { useEffect, useState } from "react";
import styles from "./upcoming.module.scss";
import Event from "components/eventcard";
import { getRequest } from "api";
import moment from "moment";

const filters = ["all", "today", "this week", "this month"];
export const itemsPerPage = 6;
const unitMap = {
  today: "day",
  "this week": "week",
  "this month": "month",
};

export default function UpcomingEvents({ totalPages, allEvents }) {
  const [activeTab, setActiveTab] = useState("all");
  const [text, setText] = useState("");
  // const [loaded, setLoaded] = useState(false);
  // const [allEvents, setAllEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);

  // // load all events from DB
  // useEffect(() => {
  //   (async function fetchAllEvents() {
  //     const { data: response } = await getRequest("/events");
  //     setAllEvents(response);
  //     setLoaded(true);
  //     setTotalPages(Math.ceil(response.length / itemsPerPage));
  //   })();
  // }, []);

  // on page change add more data
  useEffect(() => {
    // if (!loaded) return;
    const start = 0;
    const stop = page * itemsPerPage;
    let eventsToDisplay = allEvents.slice(start, stop);

    // check for month filter
    if (activeTab != "all") {
      // filter by today
      eventsToDisplay = eventsToDisplay.filter(({ day }) => {
        return moment(day).isSame(moment(), unitMap[activeTab]);
      });
    }

    // check for filter by text
    if (text.length > 0) {
      eventsToDisplay = eventsToDisplay.filter(({ name, description }) => {
        return `${name} ${description}`
          .toLocaleLowerCase()
          .includes(text.toLocaleLowerCase());
      });
    }

    setEvents(eventsToDisplay);
  }, [page, text, activeTab]);

  const incrementPagination = () => setPage((p) => p + 1);

  return (
    <div className={styles.upcoming_wrapper}>
      <div className={styles.title}>
        <span>Upcoming Events</span>
        <span className={styles.mobile_search}>
          <MagnifyingGlass />
        </span>
      </div>

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
        {events.map((oneEvent) => {
          const { image } = oneEvent;
          return <Event key={image} image={image} />;
        })}
        {!events.length ? (<div className={styles.nomessage}>
          No events match your query
        </div>) : ""}
      </div>

      {page < totalPages && events.length ? (
        <div onClick={incrementPagination} className={styles.action}>
          <span> Load More Events </span>
          <DownArrow />
        </div>
      ) : (
        ""
      )}
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
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MagnifyingGlass() {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.55556 8.3125C6.55556 4.27392 9.78905 1 13.7778 1C17.7665 1 21 4.27392 21 8.3125C21 12.3511 17.7665 15.625 13.7778 15.625C11.8372 15.625 10.0754 14.8501 8.77778 13.5892L1 19"
        stroke="#131616"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
