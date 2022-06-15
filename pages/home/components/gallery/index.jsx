import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import RightArrow from "components/svg/rightArrow";
import LeftArrow from "components/svg/leftArrow";
import styles from "./gallery.module.scss";

const IMAGE_DETAILS = [
  { imageLink: "/images/firstimage.png", orientation: "landscape" },
  { imageLink: "/images/secondimage.png", orientation: "portrait" },
];

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.top_section}>
        <div className={styles.header__text}>Gallery</div>
        <div className={styles.action_button}>
          See Full Gallery <RightArrow />
        </div>
      </div>

      <section className={styles.image_container_wrapper}>
        <div className={styles.image_container}>
          {IMAGE_DETAILS.map((oneImage) => (
            <ImageRender {...oneImage} />
          ))}
        </div>
      </section>

      <section className={styles.action}>
        <div className={styles.left}>
          <ProgressBar percentage={50} />
        </div>
        <div className={styles.right}>
            <div><LeftArrow /></div>
            <div><RightArrow /></div>
        </div>
      </section>
    </div>
  );
}

function ProgressBar({ percentage = 0 }) {
  return (
    <div className={styles.progresscontainer}>
      <div className={styles.blankline} />
      <div className={styles.filledline} style={{ width: `${percentage}%` }} />
    </div>
  );
}

function ImageRender({ imageLink, orientation }) {
  return (
    <div className={styles[orientation]}>
      <Image src={imageLink} layout="fill" />
    </div>
  );
}
ImageRender.propTypes = {
  imageLink: PropTypes.string,
  orientation: PropTypes.oneOf(["portrait", "landscape"]).isRequired,
};
ImageRender.defaultProps = {};
