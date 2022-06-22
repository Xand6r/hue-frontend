import React from "react";
import Image from "next/image";

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
          <ImageRender key={image} imageLink={image} orientation={orientation} />
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


const IMAGES = [
  {
    image: "/gallery/1.png",
    orientation: "landscape",
  },
  {
    image: "/gallery/2.png",
    orientation: "portrait",
  },
  {
    image: "/gallery/3.png",
    orientation: "landscape",
  },
  {
    image: "/gallery/4.png",
    orientation: "portrait",
  },
  {
    image: "/gallery/5.png",
    orientation: "portrait",
  },
  {
    image: "/gallery/6.png",
    orientation: "landscape",
  },
  {
    image: "/gallery/7.png",
    orientation: "square",
  },
  {
    image: "/gallery/8.png",
    orientation: "landscape",
  },
  {
    image: "/gallery/9.png",
    orientation: "square",
  },
  {
    image: "/gallery/10.png",
    orientation: "landscape",
  },
  {
    image: "/gallery/11.png",
    orientation: "square",
  },
  {
    image: "/gallery/12.png",
    orientation: "landscape",
  },
  {
    image: "/gallery/13.png",
    orientation: "square",
  },
  {
    image: "/gallery/14.png",
    orientation: "landscape",
  },
];
