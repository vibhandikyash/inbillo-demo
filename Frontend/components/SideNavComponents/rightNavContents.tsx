import { useRouter } from "next/router";
import clsx from "clsx";
import { EmptyCircle } from "../Icons/emptyCircle";
import { TickMark } from "../Icons/tickMark";

type RightSideNavType = {
  label?: string;
};

export const RightNavContents = ({ label }: RightSideNavType) => {
  const router = useRouter();
  const { query } = useRouter();
  return (
    <>
      <div
        className={clsx(
          "flex mt-5 items-center px-4 py-2 text-l transition-colors duration-200 transform rounded-md",
          label !== query?.rightNav && "text-gray-400"
        )}
        onClick={() => {
          router.push({
            pathname: router.pathname,
            query: { ...query, rightNav: label },
          });
        }}
      >
        {label === query?.rightNav && <TickMark />}
        {label !== query?.rightNav && <EmptyCircle />}
        <span className="mx-4 font-bold">{label}</span>
        <br />
      </div>
      {label === query?.rightNav && (
        <small className="font-xs pr-2 pl-2 bg-green-200 text-green-700 font-medium p-0.5 ml-16 rounded-lg">
          Gotowe
        </small>
      )}
    </>
  );
};
