import { useRouter } from "next/router";
import clsx from "clsx";

type ButtonComponentType = {
  content?: string;
};

export const ButtonComponent = ({ content = "/" }: ButtonComponentType) => {
  const router = useRouter();
  const { query } = useRouter();
  return (
    <button
      className={clsx(
        "text-sm h-6 pr-3 pl-3 round-1/2 rounded-2xl ml-4 bg-gray-200 text-gray-400",
        content === query?.duration && "bg-sky-600 text-white"
      )}
      onClick={() => {
        router.push({
          pathname: router.pathname,
          query: { ...query, duration: content },
        });
      }}
    >
      {content}
    </button>
  );
};
