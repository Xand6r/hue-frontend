import React from "react";
import Image from "next/image";
import styles from "./mission.module.scss";

export default function Index() {
  return (
    <section className={styles.mission}>
      <div className={styles.image_container}>
        <Image src="/images/mission.png" layout="fill" />
      </div>
      <div className={styles.statement}>
        <div>Mission</div>
        <div>
          We are on a mission to provide a premium social experience for the
          young upper class in Chicago, ensuring A-rated customer service and
          satisfaction.
        </div>
      </div>
    </section>
  );
}
