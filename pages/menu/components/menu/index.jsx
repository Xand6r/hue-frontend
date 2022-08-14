import React, { useEffect, useState } from "react";
import MenuItem from "components/menuItem";
import styles from "./menu.module.scss";
import { fetchClassics, fetchDrinks, fetchFood } from "./functions";

const filters = ["drinks", "classics", "food"];

const INITIAL_DATA = {
  drinks: [],
  classics: [],
  food: [],
};

export default function Menu({ state }) {
  const [activeTab, setActiveTab] = useState("drinks");
  const [activeData, setActiveData] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const updatedData = state[activeTab];
    setActiveData(updatedData);
    setText("");
  }, [activeTab]);

  useEffect(() => {
    const { drinks, classics, food } = state;
    const allMenu = [...drinks, ...classics, ...food];
    if (text.length < 1) {
      setActiveData(state[activeTab]);
      return;
    }
    const filteredData = allMenu.filter((meniItem) => {
      const searchParam = text.toLowerCase();
      const { title, extraTitle, subtitle } = meniItem;
      const searchText = `${title}${extraTitle}${subtitle}`.toLowerCase();
      return searchText.includes(searchParam);
    });
    setActiveData(filteredData);
  }, [text]);

  return (
    <div className={styles.menu}>
      {/* filters */}
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
            placeholder="Search menu"
          />
        </div>
      </div>
      {/* filters */}

      {/* menu items */}
      <div className={styles.menuitems}>
        {activeData.map((data, index) => (
          <MenuItem key={JSON.stringify(data)} index={index + 1} data={data} />
        ))}
        {!activeData.length ? (
          <div className={styles.not_available}>No menu item available</div>
        ) : (
          ""
        )}
      </div>
      {/* menu items */}
    </div>
  );
}
