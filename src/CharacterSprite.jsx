import React, { useEffect, useState } from "react";

const FRAME_WIDTH = 16;
const FRAME_HEIGHT = 16;
const SCALE = 4; // Tăng gấp 4 lần cho dễ nhìn
const FRAME_COUNT = 4; // Mỗi hàng có 4 frame
const ANIMATION_SPEED = 200; // 200ms mỗi frame

const CharacterSprite = ({ animationRow = 1 }) => {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % FRAME_COUNT);
    }, ANIMATION_SPEED);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: FRAME_WIDTH * SCALE,
        height: FRAME_HEIGHT * SCALE,
        backgroundImage: `url("/sprites/character.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `${FRAME_WIDTH * FRAME_COUNT * SCALE}px ${
          FRAME_HEIGHT * 3 * SCALE
        }px`,
        backgroundPosition: `-${frameIndex * FRAME_WIDTH * SCALE}px -${
          animationRow * FRAME_HEIGHT * SCALE
        }px`,
        imageRendering: "pixelated",
      }}
    />
  );
};

export default CharacterSprite;
