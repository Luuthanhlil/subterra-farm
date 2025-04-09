import React, { useEffect, useState } from "react";

const FRAME_WIDTH = 16; // mỗi frame rộng 16px
const FRAME_HEIGHT = 16; // mỗi frame cao 16px
const FRAME_COUNT = 4; // có 4 frame trên mỗi hàng
const SCALE = 4; // phóng to lên cho dễ nhìn

const CharacterSprite = () => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prevFrame) => (prevFrame + 1) % FRAME_COUNT);
    }, 200); // đổi frame mỗi 200ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: FRAME_WIDTH * SCALE,
        height: FRAME_HEIGHT * SCALE,
        overflow: "hidden",
      }}
    >
      <img
        src="/sprites/character.png"
        alt="Character"
        style={{
          width: FRAME_WIDTH * FRAME_COUNT * SCALE,
          height: FRAME_HEIGHT * SCALE,
          transform: `translateX(-${frame * FRAME_WIDTH * SCALE}px)`,
          imageRendering: "pixelated",
        }}
      />
    </div>
  );
};

export default CharacterSprite;
