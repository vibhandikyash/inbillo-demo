import clsx from "clsx";
import { EmailIcon } from "../Icons";

type ChatComponentType = {
  className?: string;
  initialContent?: string;
  mainContent?: string;
  date?: string;
  receive?: boolean;
};

export const ChatComponent = ({
  className,
  initialContent,
  mainContent,
  date,
  receive,
}: ChatComponentType) => (
  <div className={className}>
    <div className="w-3/4 mb-4">
      <div
        className={clsx(
          "p-4 rounded-lg",
          receive && "bg-sky-600 text-white",
          !receive && "bg-gray-200 text-black"
        )}
      >
        <div>{initialContent}</div> <br />
        <div>{mainContent}</div>
      </div>
      <div className="flex mt-2 px-2">
        <EmailIcon />
        <small className="relative bottom-0.5 text-gray-400"> {date} </small>
      </div>
    </div>
  </div>
);
