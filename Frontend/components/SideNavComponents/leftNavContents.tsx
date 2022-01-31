/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { PlusIcon, StockMarketIcon, WalletIcon } from "../Icons";
type LeftNavItemType = {
  path?: string;
  label?: string;
};

export const LeftNavContents = ({ path = "/", label }: LeftNavItemType) => {
  const router = useRouter();
  return (
    <Link href={path}>
      <div
        className={clsx(
          "flex items-center px-4 py-2 transition-colors duration-200 transform rounded-xl ",
          router.pathname === path.split("?")[0] && "bg-sky-600 text-white"
        )}
      >
        {label === "Portfel" && (
          <WalletIcon
            className={clsx(
              router.pathname !== "/" && "fill-sky-600", //improvev
              router.pathname === "/" && "fill-white"
            )}
          />
        )}
        {label === "Zaloz sprawe" && (
          <PlusIcon
            className={clsx(
              router.pathname !== "/zaloz" && "fill-sky-600",
              router.pathname === "/zaloz" && "fill-white"
            )}
            width={25}
            height={25}
          />
        )}
        {label === "Gielda" && <StockMarketIcon />}

        <span className="mx-4 font-medium">{label}</span>
      </div>
    </Link>
  );
};
