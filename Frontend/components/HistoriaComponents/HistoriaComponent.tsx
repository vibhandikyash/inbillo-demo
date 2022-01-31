import { BadgeIcon, BagIcon, DockIcon, DownloadIcon, PenIcon } from "../Icons";

type HistoriaComponentType = {
  date?: string;
  content?: string;
  id?: string;
};
export const HistoriaComponent = ({
  date,
  content,
  id,
}: HistoriaComponentType) => (
  <div className="flex mt-3">
    <small className=" relative top-3">{date}</small>
    {id === "1" && <BadgeIcon />}
    {id === "2" && <PenIcon />}
    {id === "3" && (
      <DockIcon className="mt-3 ml-3 text-gray-400" width={16} height={16} />
    )}
    {id === "5" && (
      <BagIcon className=" mt-3 ml-3 fill-gray-400" width={19} height={20} />
    )}
    {id === "6" && <DownloadIcon />}
    <div className="p-2 bg-gray-100 text-gray rounded-xl ml-4">{content}</div>
  </div>
);
