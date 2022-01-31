import { Accordion } from "./AccordionComponent/Accordion";
import { BilliComponent } from "./BilloComponents/BilliComponent";
import { ButtonComponent } from "./ButtonComponents/ButtonComponent";
import { ChartComponent } from "./ChartComponents/ChartComp";
import { CustomScatterDots } from "./ChartComponents/CustomScatterDot";
import NewChart from "./ChartComponents/newChart";
import { ChatComponent } from "./ChatTextComponents/ChatComponent";
import { CyzoinsciComponentContents } from "./CyzoinsciComponents/CyzoinsciPageContent";
import { DaneAwanyContent } from "./DaneAwany/DaneAwanyContent";
import { DaneContrahentPageContent } from "./DaneCkontrahents/DaneCkontrahentPageContent";
import { DescriptionComponent } from "./DescriptionComponents/DescriptionComponent";
import Header from "./HeaderComponents/header";
import { HeaderInputComponent } from "./HeaderInputComponents/HeaderInputComponent";
import { HeaderProfileIcon } from "./HeaderProfileComponents/HeaderProfileIcon";
import { HistoriaComponent } from "./HistoriaComponents/HistoriaComponent";
import { HistoriaComponentContents } from "./HistoriaComponents/HistoriaPage";
import { HrComponent } from "./HrComponents/HrComponent";
import { Input } from "./InputComponent/Input";
import { NotakiComponent } from "./NotakiComponents/NotakiComponent";
import { NotakiComponentContents } from "./NotakiComponents/NotakiPageContent";
import { PilkiComponent } from "./PlikiComponents/PlikiComponent";
import { PilkiComponentContents } from "./PlikiComponents/PlikiPageContent";
import { LeftNavBottomComponent } from "./SideNavComponents/leftNavBottomComponent";
import { LeftNavComponent } from "./SideNavComponents/leftNavComponent";
import { LeftNavContents } from "./SideNavComponents/leftNavContents";
import { RightNavComponent } from "./SideNavComponents/rightNavComponent";
import { RightNavContents } from "./SideNavComponents/rightNavContents";
import { TagiComponentContents } from "./TagiComponents/TagiPageContent";
import { TojKontrahentComponentContents } from "./TojKontrahents/TojKontrahentPageContent";
import { WiadomosciComponentContents } from "./WiadomosciPageComponent/WiadomosciPageContent";
import { ZalozSprawePageContent } from "./ZalozSprawes/ZalozSprawePageContent";

export interface ComponentProps {
  title?: string;
  content?: string;
  initialContent?: string;
  receive?: boolean;
  className?: string;
  isActive?: boolean;
  label?: string;
  tags?: string[];
  active?: boolean;
}

export interface ContentProps {
  title?: string;
  content?: string;
  initialContent?: string;
  receive?: boolean;
  className?: string;
  isActive?: boolean;
  path?: string;
  label?: string;
}

const getContents = (name: string, contentProps?: ContentProps) => {
  switch (name) {
    case "CyzoinsciComponentContents":
      return <CyzoinsciComponentContents />;
    case "DaneAwanyContent":
      return <DaneAwanyContent />;
    case "DaneContrahentPageContent":
      return <DaneContrahentPageContent />;
    case "ZalozSprawe":
      return <ZalozSprawePageContent {...contentProps} />;
    case "HistoriaComponentContents":
      return <HistoriaComponentContents />;
    case "NotakiComponentContents":
      return <NotakiComponentContents />;
    case "PilkiComponentContents":
      return <PilkiComponentContents />;
    case "TagiComponentContents":
      return <TagiComponentContents />;
    case "TojKontrahentComponentContents":
      return <TojKontrahentComponentContents />;
    case "WiadomosciComponentContents":
      return <WiadomosciComponentContents />;
    case "LeftNavContents":
      return <LeftNavContents {...contentProps} />;
    case "RightNavContents":
      return <RightNavContents {...contentProps} />;

    default:
      return "";
  }
};
const getComponents = (name: string, componentProps?: ComponentProps) => {
  switch (name) {
    case "Accordion":
      return <Accordion {...componentProps} />;
    case "BilloComponent":
      return <BilliComponent {...componentProps} />;
    case "CustomChart":
      return <CustomScatterDots cx={0} cy={0} />;
    case "Button":
      return <ButtonComponent {...componentProps} />;
    case "Chart":
      return <NewChart />;
    case "ChartComponent":
      return <ChartComponent />;
    case "ChatTextComponent":
      return <ChatComponent {...componentProps} />;
    case "Description":
      return <DescriptionComponent {...componentProps} />;
    case "Header":
      return <Header />;
    case "HeaderComponent":
      return <Header />;
    case "HeaderInputComponent":
      return <HeaderInputComponent {...componentProps} />;
    case "HeaderProfieComponent":
      return <HeaderProfileIcon {...componentProps} />;
    case "HistoriaComponent":
      return <HistoriaComponent {...componentProps} />;
    case "Hr":
      return <HrComponent />;
    case "Input":
      return <Input {...componentProps} />;
    case "NotakiComponent":
      return <NotakiComponent {...componentProps} />;
    case "PlikiComponent":
      return <PilkiComponent {...componentProps} />;
    case "LeftNavBottomComponent":
      return <LeftNavBottomComponent {...componentProps} />;
    case "RightNavComponent":
      return <RightNavComponent />;
    case "LeftNavComponent":
      return <LeftNavComponent />;
    default:
      return "";
  }
};

export {
  getComponents,
  getContents,
  Accordion,
  Input,
  BilliComponent,
  ButtonComponent,
  HistoriaComponentContents,
  ChatComponent,
  CyzoinsciComponentContents,
  DaneAwanyContent,
  DaneContrahentPageContent,
  DescriptionComponent,
  Header,
  HeaderInputComponent,
  HeaderProfileIcon,
  HistoriaComponent,
  HrComponent,
  NotakiComponent,
  NotakiComponentContents,
  PilkiComponent,
  PilkiComponentContents,
  ZalozSprawePageContent,
  TagiComponentContents,
  TojKontrahentComponentContents,
  WiadomosciComponentContents,
  CustomScatterDots,
  LeftNavBottomComponent,
  LeftNavComponent,
  LeftNavContents,
  RightNavComponent,
  RightNavContents,
  ChartComponent,
};
