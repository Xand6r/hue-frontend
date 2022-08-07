import React from "react";
import styles from "./menuitem.module.scss";

export default function MenuItem({ index, data }) {
  return (
    <div className={styles.menuitem}>
      <section className={styles.text_wrapper}>
        <div className={styles.index}>{index}</div>
        <div className={styles.content}>
          <div className={styles.content__heading}>
            {data.title} <span>{data.extraTitle}</span>
          </div>
          <div className={styles.content__subheading}>{data.subtitle}</div>
        </div>
      </section>
      <section className={styles.price}>
        {data.currency}
        {data.price}
      </section>
    </div>
  );
}
