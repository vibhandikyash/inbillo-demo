import { PrintIcon, SearchIcon } from "../Icons";

type PilkiComponentType = {
  date?: string;
  initialContent?: string;
  mainContent?: string;
  className?: string;
};

export const PilkiComponent = ({
  date,
  initialContent,
  mainContent,
  className,
}: PilkiComponentType) => (
  <div className={className}>
    <small className=" text-gray-400 font-semibold relative top-3">
      {date}
    </small>
    <div className="p-2 text-white bg-gray-400 rounded-xl ml-4">
      {initialContent}
    </div>
    <div className="p-2 ml-4 bg-sky-200 flex rounded-xl ">
      {mainContent}
      <div className="mx-2">
        <SearchIcon />
      </div>
    </div>
    <div className="ml-4 mt-2">
      <PrintIcon />
    </div>
  </div>
);
