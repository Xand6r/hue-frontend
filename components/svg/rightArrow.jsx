import React from "react";

export default function RightArrow({ onClick }) {
  return (
    <div onClick={() => onClick && onClick()}>
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 12L13 17L19 9L13 1L13 8C13 8.55228 12.5523 9 12 9L1 9"
          stroke="#131616"
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
