import React from "react";
import styles from "./menuitem.module.scss";

export default function MenuItem() {
  return (
    <div className={styles.menuitem}>
      <section className={styles.text_wrapper}>
        <div className={styles.index}>1</div>
        <div className={styles.content}>
          <div className={styles.content__heading}>
            RED - Hibiscus - Cosmo <span>MARTINI GLASS</span>
          </div>
          <div className={styles.content__subheading}>
            2 oz duo vodka, 1 oz hibiscus syrup, .5 oz triple sec, .5 oz fresh
            lime, 1/4 oz chereau, (80278X)
          </div>
        </div>
      </section>
      <section className={styles.price}>$175.99</section>
    </div>
  );
}
