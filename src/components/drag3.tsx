import { useEffect, useRef, useState } from "react";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `$${value}`;
}

export default function RangeSlider() {
  const [value, setValue] = useState<number[]>([0, 1000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  //-----------------
  const [open, setOpen] = useState(true);
  const DropDownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      DropDownRef.current &&
      !DropDownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-auto mt-auto ml-[10vw]">
      <div
        className={`absolute z-[20] w-[200px] block box-border top-4 left-0 shadow-lg bg-[white] rounded-[10px] ani border border-[#C2C6E8] overflow-hidden px-[14px] pt-[15.5px] pb-[7.5px] flex-col ${
          open
            ? "opacity-100 pointer-events-auto translate-y-11"
            : "opacity-0 pointer-events-none translate-y-[-14px]"
        }`}
      >
        <div className="w-full flex flex-col gap-8">
          <div className="flex flex-col w-full gap-[9px]">
            <div className="w-full flex flex-row justify-between items-center text-[black]">
              <p>${value[0]}</p>
              <p>${value[1]}</p>
            </div>
            <Slider
              style={{}}
              min={0}
              max={1000}
              getAriaLabel={() => "Range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </div>

          <div className="w-full flex flex-row justify-between">
            <button className="w-auto h-[36px] border box-border border-[#C2C6E8] rounded-[10px] px-4 flex flex-row items-center text-[#54577A]">
              Clear
            </button>
            <button className="w-auto h-[36px] border box-border border-[#3D53DB] bg-[#3D53DB] rounded-[10px] px-4 flex flex-row items-center text-[#FFF]">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
