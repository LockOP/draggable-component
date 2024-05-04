import { useEffect, useRef, useState } from "react";

function DraggableComponent2({ children }) {
  const multiplier = 1000;

  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [lastPositionX, setLastPositionX] = useState(0);
  const [lastPositionY, setLastPositionY] = useState(0);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  const [isDragging2, setIsDragging2] = useState(false);
  const [offsetX2, setOffsetX2] = useState(0);
  const [offsetY2, setOffsetY2] = useState(0);
  const [lastPositionX2, setLastPositionX2] = useState(0);
  const [lastPositionY2, setLastPositionY2] = useState(0);
  const [initialX2, setInitialX2] = useState(0);
  const [initialY2, setInitialY2] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setInitialX(e.clientX);
    setInitialY(e.clientY);
  };

  const handleMouseDown2 = (e) => {
    setIsDragging2(true);
    setInitialX2(e.clientX);
    setInitialY2(e.clientY);
  };

  const ref = useRef(null);
  const ref2 = useRef(null);

  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  2;

  const handleMouseMove = (e) => {
    if (isDragging) {
      if (
        Number(window.getComputedStyle(ref.current).left.split("px")[0]) >= 0 &&
        Number(window.getComputedStyle(ref.current).left.split("px")[0]) <=
          Number(
            window.getComputedStyle(containerRef.current).width.split("px")[0] -
              Number(window.getComputedStyle(ref.current).width.split("px")[0])
          )
      ) {
        setOffsetX(
          lastPositionX + e.clientX - initialX <= 0
            ? 0
            : lastPositionX + e.clientX - initialX >=
              Number(
                window
                  .getComputedStyle(containerRef.current)
                  .width.split("px")[0] -
                  Number(
                    window.getComputedStyle(ref.current).width.split("px")[0]
                  )
              )
            ? Number(
                window
                  .getComputedStyle(containerRef.current)
                  .width.split("px")[0] -
                  Number(
                    window.getComputedStyle(ref.current).width.split("px")[0]
                  )
              )
            : lastPositionX + e.clientX - initialX
        );
        setOffsetY(lastPositionY + e.clientY - initialY);
      }

      if (ref.current) {
        "s1",
          console.log(
            window.getComputedStyle(ref.current).left.split("px")[0],
            window.getComputedStyle(containerRef.current).width.split("px")[0],
            e.clientX - initialX
          );
      }
    }
    if (isDragging2) {
      if (
        Number(window.getComputedStyle(ref2.current).left.split("px")[0]) >=
          0 &&
        Number(window.getComputedStyle(ref2.current).left.split("px")[0]) <=
          Number(
            window.getComputedStyle(containerRef.current).width.split("px")[0] -
              Number(window.getComputedStyle(ref2.current).width.split("px")[0])
          )
      ) {
        setOffsetX2(
          lastPositionX2 + e.clientX - initialX2 <= 0
            ? 0
            : lastPositionX2 + e.clientX - initialX2 >=
              Number(
                window
                  .getComputedStyle(containerRef.current)
                  .width.split("px")[0] -
                  Number(
                    window.getComputedStyle(ref2.current).width.split("px")[0]
                  )
              )
            ? Number(
                window
                  .getComputedStyle(containerRef.current)
                  .width.split("px")[0] -
                  Number(
                    window.getComputedStyle(ref2.current).width.split("px")[0]
                  )
              )
            : lastPositionX2 + e.clientX - initialX2
        );
        setOffsetY2(lastPositionY2 + e.clientY - initialY2);
      }

      if (ref2.current) {
        console.log(
          "s2",
          window.getComputedStyle(ref2.current).left.split("px")[0],
          window.getComputedStyle(containerRef.current).width.split("px")[0],
          e.clientX - initialX2
        );
      }
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setInitialX(0);
      setInitialY(0);
      setLastPositionX(offsetX);
      setLastPositionY(offsetY);
    }
    if (isDragging2) {
      setInitialX2(0);
      setInitialY2(0);
      setLastPositionX2(offsetX2);
      setLastPositionY2(offsetY2);
    }
    setIsDragging2(false);
    setIsDragging(false);
  };

  // useEffect(() => {
  //   console.log(offsetX, offsetY);
  // }, [offsetX, offsetY]);

  //
  function getMaxDisplay() {
    if (window && containerRef.current) {
      return Math.floor(
        (Math.max(offsetX, offsetX2) * multiplier) /
          Number(
            window.getComputedStyle(containerRef.current).width.split("px")[0] -
              Number(window?.getComputedStyle(ref.current).width.split("px")[0])
          )
      );
    }
    return null;
  }

  function getMinDisplay() {
    if (window && containerRef.current) {
      return Math.ceil(
        (Math.min(offsetX, offsetX2) * multiplier) /
          Number(
            window.getComputedStyle(containerRef.current).width.split("px")[0] -
              Number(window?.getComputedStyle(ref.current).width.split("px")[0])
          )
      );
    }
    return null;
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className="w-full h-full bg-[pink] flex items-center justify-center"
    >
      <div ref={containerRef} className="relative w-[80vw] h-[40vh] bg-[blue]">
        <div className="w-full flex flex-row justify-evenly">
          <p className="text-[white] text-2xl">{getMinDisplay()}</p>
          <p className="text-[white] text-2xl">{getMaxDisplay()}</p>
        </div>

        <div
          draggable={false}
          onDragStart={(e) => {
            e.preventDefault();
          }}
          ref={ref}
          className="absolute"
          style={{
            left: offsetX + "px",
            top: "50%",
            transform: "translateY(-50%)",
            // top: offsetY + "px",

            // transform: `translate(${offsetX}px, ${offsetY}px)`,

            backgroundColor: "white",
          }}
        >
          <div className="h-[100px] w-[100px] bg-[green] flex items-center justify-center">
            <div
              onClick={(e) => {
                e.preventDefault();
              }}
              onMouseDown={handleMouseDown}
              className="h-[50px] w-[50px] bg-[black] flex items-center justify-center"
            ></div>
          </div>
        </div>
        <div
          draggable={false}
          onDragStart={(e) => {
            e.preventDefault();
          }}
          ref={ref2}
          className="absolute"
          style={{
            left: offsetX2 + "px",
            top: "50%",
            transform: "translateY(-50%)",
            // top: offsetY + "px",

            // transform: `translate(${offsetX}px, ${offsetY}px)`,

            backgroundColor: "white",
          }}
        >
          <div className="h-[100px] w-[100px] bg-[red] flex items-center justify-center">
            <div
              onMouseDown={handleMouseDown2}
              onClick={(e) => {
                e.preventDefault();
              }}
              className="h-[50px] w-[50px] bg-[black] flex items-center justify-center"
            ></div>
          </div>
        </div>
      </div>

      {/* <div
        ref={containerRef2}
        className="relative w-[80vw] h-[40vh] bg-[green]"
      ></div> */}
    </div>
  );
}

export default DraggableComponent2;
