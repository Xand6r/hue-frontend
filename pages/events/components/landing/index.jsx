import React from "react";
import styles from "./landing.module.scss";

export default function Index() {
  return (
    <div className={styles.landing}>
      <div>
        <div className={styles.left}>Give your event a unique hue</div>
        <div className={styles.right}>
          <div className={styles.text}>
            Hue Chicago is set up to give your guests premium entertainment and
            hospitality. We set the scene alive through our live music from the
            finest DJs. Our dedicated staff will ensure your guests are
            comfortable and offered first-rate services.
          </div>
          <div className={styles.button}>Book Now</div>
        </div>
      </div>
    </div>
  );
}
