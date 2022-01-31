import { FC } from "react";

export const CustomScatterDots: FC<{ cx: number; cy: number }> = ({
  cx,
  cy,
}) => {
  return (
    <>
      <circle
        cx={cx}
        cy={cy}
        r={6}
        stroke="#ffffff"
        style={{ opacity: "0.9" }}
        strokeWidth={2}
        fill={"#0284C7"}
      />
      <div
        className="vl"
        style={{
          borderLeft: "3px solid black",
          height: "2rem",
          zIndex: "50",
        }}
      ></div>
    </>
  );
};
