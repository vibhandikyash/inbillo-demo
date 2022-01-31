import data from "../../data/chartData.json";

export const XAxisLabel = () => {
  {
    return (
      <>
        {data?.map(({ name }, index) => (
          <text
            orientation="bottom"
            key={`${index}${name}`}
            width="622"
            height="30"
            type="category"
            x={70 + index * 100}
            y="228"
            stroke="none"
            fill="#666"
            className="recharts-text recharts-cartesian-axis-tick-value"
            textAnchor="middle"
          >
            <tspan x={70 + index * 100} dy="0.71em">
              {name}
            </tspan>
          </text>
        ))}
      </>
    );
  }
};
