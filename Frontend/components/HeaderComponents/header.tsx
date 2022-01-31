import type { NextPage } from "next";
import { BilliComponent, HeaderInputComponent, HeaderProfileIcon } from "..";
import { DownArrow, SignOut } from "../../public/Images/portlet";
import { ChatsIcon, NotificationIcon } from "../Icons";
const Header: NextPage = () => {
  return (
    <>
      <nav className="flex flex-row h-28 w-full sticky bg-white items-center shadow-md">
        <BilliComponent className="w-1/5 px-8" />
        <HeaderInputComponent className="" />
        <ChatsIcon className="w-1/7 px-6" />
        <NotificationIcon className="w-1/7 px-0" />
        <HeaderProfileIcon className="flex px-6" />
        <DownArrow />
        <div className="absolute right-0">
          <SignOut />
        </div>
      </nav>
    </>
  );
};

export default Header;
