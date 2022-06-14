import React from "react";
import styles from "./private.module.scss";
import Image from "next/image";

export default function index() {
  return (
    <div className={styles.private}>
      <div className={styles.left_section}>
        <div>
          <div className={styles.top_meta}>PRIVATE EVENTS</div>
          <div className={styles.title}>
            Host your next event at Hue Chicago
          </div>
          <div className={styles.subtitle}>
            We’ve got the atmosphere, bring on your event. Our stunning luxury
            contemporary interiors can’t wait to thrill you and your guests. Our
            team is also ever itching to deliver premium hospitality to you.
          </div>
          <div className={styles.button}>
            Book Now
          </div>
        </div>
      </div>

      <div className={styles.right_section}>
        <Image src="/images/private.png" width={720} height={573} />
      </div>
    </div>
  );
}
