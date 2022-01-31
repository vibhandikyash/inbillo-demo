import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";
import {
  BatchMarkIcon,
  InfoIcon,
  ReturnArrowIcon,
  ThreeDotsIcon,
} from "../Icons";
import {
  ButtonComponent,
  CustomScatterDots,
  DescriptionComponent,
  HrComponent,
} from "..";
import data from "../../data/chartData.json";
import buttonContents from "../../data/buttonComponentData.json";

// for custom chart component
// import { CustomChart } from "../components/CustomChart/customchart";

const ChartComponent = () => {
  return (
    <>
      <div className="float-right flex">
        <BatchMarkIcon />
        <ReturnArrowIcon />
        <ThreeDotsIcon />
      </div>
      <div className="flex font-bold text-2xl mb-4">
        Umowa na dostarcziene cementu{" "}
        <InfoIcon className="inline mt-2 ml-3 fill-sky-600" />
      </div>
      <DescriptionComponent content="Wierzyciel" />
      <div className="text-slate-400">Saldo biezqce sprawy </div>
      <span className="text-sky-600 text-3xl">12 500 </span>
      <span className="text-sky-600 text-2xl">PLN</span>
      <ResponsiveContainer width="98%" height={250}>
        <AreaChart
          width={700}
          height={250}
          data={data}
          margin={{
            top: 40,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="#0284C7" stopOpacity={0.8} />
              <stop offset="99%" stopColor="#144163" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <CartesianGrid
            stroke="gray"
            horizontal={false}
            strokeDasharray="10 3"
          />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#000000" />
          <Area
            type="monotone"
            fillOpacity={1}
            dataKey="uv"
            stroke="#0284C7"
            baseLine={8}
            fill="url(#colorUv)"
            activeDot={{ stroke: "white", strokeWidth: 2, r: 3 }}
            dot={<CustomScatterDots cx={0} cy={0} />}
          />
        </AreaChart>
      </ResponsiveContainer>
      {/* for custom chart component */}
      {/* <CustomChart /> */}

      <div className="flex w-1/2 mt-2 ml-6">
        {buttonContents?.map(({ content }: any) => {
          return (
            <ButtonComponent
              key={`content+${content}`}
              content={content}
            />
          );
        })}
      </div>
      <HrComponent />
    </>
  );
};

export default ChartComponent;
