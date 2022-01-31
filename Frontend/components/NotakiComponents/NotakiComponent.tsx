import { BinIcon } from "../Icons";

type NotakiComponentType = {
  content?: string;
  date?: string;
  className?: string;
};
export const NotakiComponent = ({
  content,
  date,
  className,
}: NotakiComponentType) => (
  <>
    <div className={className}>
      <small className=" relative top-3">{date}</small>
      <div className="p-2 bg-yellow-100 text-gray rounded-xl ml-4">
        {content}
      </div>
      <BinIcon />
    </div>
  </>
);
