import React from "react";
import Image from "next/image";

import IMAGES from "./data";
import PropTypes from "prop-types";
import styles from "./images.module.scss";

export default function Images() {
  return (
    <div className={styles.images}>
      <div className={styles.heading}>
        <span>Gallery</span>
        <div>
          <Image src="/images/galleryicon.svg" layout="fill" />
        </div>
      </div>

      <div className={styles.gallery}>
        {IMAGES.map(({ image, orientation }) => (
          <ImageRender imageLink={image} orientation={orientation} />
        ))}
      </div>
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
  imageLink: PropTypes.string.isRequired,
  orientation: PropTypes.oneOf(["portrait", "square", "landscape"]).isRequired,
};
ImageRender.defaultProps = {};
