import { BadgeIcon } from "./badgeIcon";
import { BagIcon } from "./bagIcon";
import { BarGraphIcon } from "./barGrpahIcon";
import { BatchMarkIcon } from "./batchMarkIcon";
import { ChatIcon } from "./chatIcon";
import { ChatsIcon } from "./chatsIcon";
import { CheckIcon } from "./checkIcon";
import { CheckMark } from "./checkMark";
import { DockIcon } from "./docIcon";
import { DownloadIcon } from "./downloadIcon";
import { EmailIcon } from "./emailIcon";
import { EmptyCircle } from "./emptyCircle";
import { HandCoinsIcon } from "./handIcons";
import { InfoIcon } from "./infoIcono";
import { LeftArrowIcon } from "./leftarrow";
import { LogoutIcon } from "./logoutIcon";
import { NotificationIcon } from "./notificationIcon";
import { PenIcon } from "./penIcon";
import { PlusIconBg } from "./plusIconBg";
import { PlusIcon } from "./plusIconn";
import { PrintIcon } from "./printIcon";
import { ReturnArrowIcon } from "./returnArrow";
import { SearchIcon } from "./searchIcon";
import { ThreeDotsWithCircle } from "./threeDotsWithCircle";
import { TickMark } from "./tickMark";
import { WalletIcon } from "./walletIcon";
import { LightingIcon } from "./currentIcon";
import { WrongIcon } from "./closeIcon";
import { ThreeDotsIcon } from "./threeDotsIcon";
import { BinIcon } from "./binIcon";
import { StockMarketIcon } from "./stockMarket";
import { ArrowIcon } from "./arrowIcon";
import { ChatIconWithFill } from "./chatsIconwithFill";

export interface IconProps {
  color?: string;
  fillColor?: string;
  rotateDegree?: number;
  width?: number;
  height?: number;
  className?: string;
  isActive?: boolean;
}

const getIcon = (name: string, styleProps?: IconProps) => {
  switch (name) {
    case "LightingIcon":
      return <LightingIcon />;
    case "ChatIcon":
      return <ChatIcon {...styleProps} />;
    case "BadgeIcon":
      return <BadgeIcon {...styleProps} />;
    case "BagIcon":
      return <BagIcon />;
    case "BarGraphIcon":
      return <BarGraphIcon />;
    case "BinIcon":
      return <BinIcon />;
    case "BatchMarkIcon":
      return <BatchMarkIcon />;
    case "DoubleChatsIcon":
      return <ChatsIcon {...styleProps} />;
    case "CheckIcon":
      return <CheckIcon />;
    case "CheckMark":
      return <CheckMark />;
    case "DockIcon":
      return <DockIcon />;
    case "DownloadIcon":
      return <DownloadIcon />;
    case "EmailIcon":
      return <EmailIcon />;
    case "ThreeDotsIcon":
      return <ThreeDotsIcon />;
    case "EmptyCircle":
      return <EmptyCircle />;
    case "HandCoinsIcon":
      return <HandCoinsIcon />;
    case "InfoIcon":
      return <InfoIcon />;
    case "ArrowIcon":
      return <ArrowIcon />;
    case "LeftArrowIcon":
      return <LeftArrowIcon />;
    case "LogoutIcon":
      return <LogoutIcon />;
    case "NotificationIcon":
      return <NotificationIcon />;
    case "PenIcon":
      return <PenIcon />;
    case "PlusIconBg":
      return <PlusIconBg />;
    case "PlusIcon":
      return <PlusIcon />;
    case "PrintIcon":
      return <PrintIcon />;
    case "ReturnArrowIcon":
      return <ReturnArrowIcon />;
    case "SearchIcon":
      return <SearchIcon />;
    case "ThreeDotsWithCircle":
      return <ThreeDotsWithCircle />;
    case "TickMark":
      return <TickMark />;
    case "WalletIcon":
      return <WalletIcon />;
    case "WrongIcon":
      return <WrongIcon />;
    case "StockMarketIcon":
      return <StockMarketIcon />;
    case "ChatIconWithFill":
      return <ChatIconWithFill />;
    default:
      return "";
  }
};

export {
  getIcon,
  BadgeIcon,
  ThreeDotsIcon,
  WrongIcon,
  LightingIcon,
  BagIcon,
  BarGraphIcon,
  BatchMarkIcon,
  ChatIcon,
  ChatsIcon,
  CheckIcon,
  CheckMark,
  DockIcon,
  DownloadIcon,
  EmailIcon,
  EmptyCircle,
  HandCoinsIcon,
  InfoIcon,
  LeftArrowIcon,
  LogoutIcon,
  NotificationIcon,
  PenIcon,
  PlusIconBg,
  PlusIcon,
  PrintIcon,
  ReturnArrowIcon,
  SearchIcon,
  BinIcon,
  ThreeDotsWithCircle,
  TickMark,
  WalletIcon,
  ArrowIcon,
  StockMarketIcon,
  ChatIconWithFill,
};
