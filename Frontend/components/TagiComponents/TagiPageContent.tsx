import { DescriptionComponent, HrComponent } from "..";
import { PlusIconBg, WrongIcon } from "../Icons";

export const TagiComponentContents = () => (
  <>
    <DescriptionComponent content="Tagi" />
    <div className="flex">
      <span className="text-sky-600">#Wierzytelnosci</span>
      <WrongIcon />
      <PlusIconBg />
    </div>
    <HrComponent />
  </>
);
