import { useEffect, useState } from "react";

function DraggableComponent({ children }) {
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [lastPositionX, setLastPositionX] = useState(0);
  const [lastPositionY, setLastPositionY] = useState(0);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  const handleMouseDown = (e) => {
    console.log("mouse down", e.clientX, e.clientY);

    setIsDragging(true);
    setInitialX(e.clientX);
    setInitialY(e.clientY);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      console.log("mouse move", e.clientX, e.clientY);

      setOffsetX(lastPositionX + e.clientX - initialX);
      setOffsetY(lastPositionY + e.clientY - initialY);
    }
  };

  const handleMouseUp = () => {
    console.log("mouse up", offsetX, offsetY);

    setIsDragging(false);
    setInitialX(0);
    setInitialY(0);
    setLastPositionX(offsetX);
    setLastPositionY(offsetY);
  };

  // useEffect(() => {
  //   console.log(offsetX, offsetY);
  // }, [offsetX, offsetY]);

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
        position: "fixed",
        left: offsetX + "px",
        top: offsetY + "px",
        // transform: `translate(${offsetX}px, ${offsetY}px)`,

        backgroundColor: "white",
      }}
    >
      <div className="h-[100px] w-[100px] bg-[red]"></div>
    </div>
  );
}

export default DraggableComponent;
