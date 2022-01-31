import { CartesianGrid } from "./cartesianGrid";
import { ChartArea } from "./chartArea";
import { XAxisLabel } from "./xAxislabel";
import { YAxisLabel } from "./yAxislabel";

export const CustomChart = () => (
  <svg className="recharts-surface w-9/10" viewBox="0 0 712 250" version="1.1">
    <XAxisLabel />
    <YAxisLabel />
    <ChartArea />
    <CartesianGrid />
  </svg>
);
