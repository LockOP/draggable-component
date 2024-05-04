"use client";

import DraggableComponent from "@/components/drag1";
import DraggableComponent2 from "@/components/drag2";
import RangeSlider from "@/components/drag3";

export default function Page() {
  return (
    <>
      <div className="w-screen h-[100dvh] bg-[white] overflow-y-auto">
        {/* <DraggableComponent>hi</DraggableComponent> */}
        <DraggableComponent2>hi</DraggableComponent2>
        {/* <RangeSlider /> */}
      </div>
    </>
  );
}
