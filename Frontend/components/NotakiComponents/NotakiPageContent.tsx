import { useRef, useState } from "react";
import { DescriptionComponent, NotakiComponent } from "..";
import { ArrowIcon, DockIcon } from "../Icons";
import notakiPageContents from "../../data/notakiPageContents.json";
import { ternaryConditions } from "../AccordionComponent/ternaryCondition";

export const NotakiComponentContents = () => {
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
          Dodaj nowq
          <ArrowIcon
            className={`${ternaryConditions(
              !active,
              "ml-4",
              "rotate-180"
            )} transform duration-700 ml-4`}
          />
        </div>
      </div>
      <DescriptionComponent content="Notaki" />
      <div
        ref={contentSpace}
        style={{
          maxHeight: `${
            !active ? "0px" : `${contentSpace?.current?.scrollHeight}px`
          }`,
        }}
        className="overflow-hidden transition-max-height duration-700 ease-in-out"
      >
        {notakiPageContents?.map(({ className, date, content }, index) => (
          <NotakiComponent
            key={`${content}${index}`}
            className={className}
            date={date}
            content={content}
          />
        ))}
      </div>
    </>
  );
};
