import { useRef, useState } from "react";
import { DescriptionComponent, HistoriaComponent } from "..";
import { ArrowIcon, DockIcon } from "../Icons";
import { ternaryConditions } from "../AccordionComponent/ternaryCondition";
import historyContentList from "../../data/historiaContentList.json";

export const HistoriaComponentContents = () => {
  const [active, setActive] = useState(true);
  const contentSpace = useRef<any>(null);

  return (
    <>
      <div className="float-right font-bold text-sky-600 flex">
        <div
          className=" p-3 appearance-none cursor-pointer flex justify-between w-full"
          onClick={() => setActive(!active)}
        >
          <div className="mr-2">
            <DockIcon />
          </div>
          Eksportuj do PDF
          <ArrowIcon
            className={`${ternaryConditions(
              !active,
              "ml-4",
              "rotate-180"
            )} transform duration-700 ml-4`}
          />
        </div>
      </div>
      <DescriptionComponent content="Historia zdarzen" />
      <div
        ref={contentSpace}
        style={{
          maxHeight: `${
            !active ? "0px" : `${contentSpace?.current?.scrollHeight}px`
          }`,
        }}
        className="overflow-hidden transition-max-height duration-700 ease-in-out"
      >
        {historyContentList?.map(({ date, content, id }: any, index) => (
          <HistoriaComponent
            key={`${index}${content}`}
            date={date}
            content={content}
            id={id}
          />
        ))}
      </div>
    </>
  );
};