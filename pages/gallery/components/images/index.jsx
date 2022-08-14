import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import PropTypes from "prop-types";
import styles from "./images.module.scss";

export default function Images({
  events = [],
  title = "Gallery",
  overlay = false,
}) {
  return (
    <div className={styles.images}>
      <div className={styles.heading}>
        <span>{title}</span>
        <div>
          <Image src="/images/galleryicon.svg" layout="fill" />
        </div>
      </div>

      <div className={styles.gallery}>
        {events.map((event) => (
          <ImageRender key={event._id} event={event} overlay={overlay} />
        ))}
        {!events.length ? (
          <div className={styles.nocontent}>No images for this event</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export function ImageRender({ event = [], overlay = false }) {
  const { image, name, description, _id, url } = event;
  const router = useRouter();

  return (
    <div
      onClick={() => {
        overlay && router.push(`/gallery/${_id}`);
      }}
      style={overlay ? { cursor: "pointer" } : { cursor: "auto" }}
      className={styles.event_item}
    >
      <Image src={image || url} layout="fill" />
      {overlay && (
        <div className={styles.overlay}>
          <div className={styles.title}>{name}</div>
          <div className={styles.description}>{description}</div>
        </div>
      )}
    </div>
  );
}
