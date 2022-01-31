import { TickMark } from "../Icons";
import { DescriptionComponent, HrComponent, Input } from "..";
import daneAwanyContentData from "../../data/daneAwanyContentData.json";

export const TojKontrahentComponentContents = () => (
  <>
    <DescriptionComponent content="Twoj kontrahent" />
    <div className="flex">
      {daneAwanyContentData.slice(0, 2).map(({ content, value }, index) => (
        <Input key={`${index}${content}`} content={content} value={value} />
      ))}
    </div>
    <div className="grid grid-cols-4 mt-4">
      <div className=" col-span-2">
        <Input content="NAZWA FIRMY" value="JANBUDOPLEZ Sp. z o.o" />
      </div>
      <div className="col-span-1">
        <Input content="REGON" value="535725217" />
      </div>
      <div className="col-span-1">
        <Input content="KRS" value="000000127128" />
      </div>
    </div>
    <div className="grid grid-cols-3 mt-4">
      {daneAwanyContentData.slice(0, 3).map(({ content, value }, index) => (
        <Input key={`${index}${content}`} content={content} value={value} />
      ))}
    </div>
    <div className="grid grid-cols-4 mt-4">
      <div className=" col-span-2">
        <Input content="NAZWA FIRMYY" value="JANBUDOPLEZ Sp. z o.o" />
      </div>
      <div className="col-span-1">
        <Input content="REGON" value="535725217" />
      </div>
      <div className="col-span-1">
        <Input content="KRS" value="000000127128" />
      </div>
    </div>
    <div className="mt-6 ml-4 flex">
      <TickMark />{" "}
      <div className="text-green-500 font-semibold ml-3">
        {" "}
        Wykupiles raport o tym kontrahencie
      </div>{" "}
      <div className="text-sky-600 font-bold ml-3">Zobacz raport</div>
    </div>
    <HrComponent />
  </>
);
