import { useEffect } from "react";

import styles from "./landing.module.scss";
import Image from "next/image";


export default function Index() {

  return (
    <div className={styles.landing}>
      <div>
        Redefining the social experience in Chicago 
      </div>
    </div>
  );
}
