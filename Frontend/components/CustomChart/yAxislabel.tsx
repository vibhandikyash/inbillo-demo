import data from "../../data/chartData.json";

export const YAxisLabel = () => (
  <>
    {data?.map(({ uv }, index) => (
      <g
        key={`${index}${uv}`}
        className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis"
      >
        <text
          orientation="left"
          width="60"
          height="180"
          type="number"
          x="52"
          y={220 - index * 35}
          stroke="none"
          fill="#666"
          className="recharts-text recharts-cartesian-axis-tick-value"
          textAnchor="end"
        >
          <tspan x="52" dy="0.355em">
            {index * 600}
          </tspan>
        </text>
      </g>
    ))}
  </>
);
