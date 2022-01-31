import { useRef, useState } from "react";
import { DescriptionComponent, PilkiComponent } from "..";
import { ArrowIcon, DockIcon } from "../Icons";
import { ternaryConditions } from "../AccordionComponent/ternaryCondition";
import pilkiContentList from "../../data/pilkiContentList.json";

export const PilkiComponentContents = () => {
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
          Dodaj nowy plik
          <ArrowIcon
            className={`${ternaryConditions(
              !active,
              "ml-4",
              "rotate-180"
            )} transform duration-700 ml-4`}
          />
        </div>
      </div>

      <DescriptionComponent content="Pliki" />

      <div
        ref={contentSpace}
        style={{
          maxHeight: `${
            !active ? "0px" : `${contentSpace?.current?.scrollHeight}px`
          }`,
        }}
        className="overflow-hidden transition-max-height duration-700 ease-in-out"
      >
        {pilkiContentList?.map(
          ({ className, date, initialContent, mainContent }, index) => (
            <PilkiComponent
              key={`${index}${initialContent}`}
              className={className}
              date={date}
              initialContent={initialContent}
              mainContent={mainContent}
            />
          )
        )}
      </div>
    </>
  );
};
