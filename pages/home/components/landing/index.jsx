import styles from "./landing.module.scss";
import Image from "next/image";

export default function index() {
  return (
    <div className={styles.landing}>
      <Image src="/images/logolarge.svg" width={303} height={145} />
    </div>
  );
}
