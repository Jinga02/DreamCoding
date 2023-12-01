import React, { useState } from "react";
import "../css/MovePointer.css";
const MovePointer = () => {
  // const [x, SetX] = useState(0);
  // const [y, SetY] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div
      className="container"
      onPointerMove={(e) => {
        // SetX(e.clientX);
        // SetY(e.clientY);

        //  객체화
        // setPosition({ x: e.clientX, y: e.clientY });

        // 수평 이동
        // setPosition((prev) => ({ x: e.clientX, y: prev.y }));
        setPosition((prev) => ({ ...prev, x: e.clientX }));
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
};

export default MovePointer;
