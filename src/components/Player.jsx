import React from "react";

export default function Player({ x, y }) {
  const size = 32; // pixel
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        backgroundColor: "green",
        left: x,
        top: y,
      }}
    />
  );
}
