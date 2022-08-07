import React, { useState } from "react";
import MenuItem from "components/menuItem";
import styles from "./menu.module.scss";

const filters = ["Drinks", "Classics", "Food"];

export default function Menu() {
  const [activeTab, setActiveTab] = useState(null);
  const [text, setText] = useState("");

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
        <MenuItem />
      </div>
      {/* menu items */}
    </div>
  );
}
