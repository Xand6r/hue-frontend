import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "./landing.module.scss";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Index({ selector }) {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: selector("#homeimage"),
        start: "top top+=250",
        end: "+=279",
        scrub: true,
        // toggleActions: "restart none none reverse"
      },
    });
    tl.to(selector("#homeimage"), {
      scale: "0.38",
      duration: 3
    });
    tl.to(selector("#homeimage"), {
      opacity: "0",
      duration: 0.1
    });
  }, []);

  return (
    <div className={styles.landing}>
      <div id="homeimage">
        <Image src="/images/logolarge.svg" width={303} height={145} />
      </div>
    </div>
  );
}
