import { useRef, useState } from "react";
import { ChatComponent, DescriptionComponent } from "..";
import {
  ArrowIcon,
  ChatIconWithFill,
  DockIcon,
  ThreeDotsWithCircle,
} from "../Icons";
import { ternaryConditions } from "../AccordionComponent/ternaryCondition";
import chatComponentData from "../../data/chatComponentData.json";

export const WiadomosciComponentContents = () => {
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
            <ChatIconWithFill />
          </div>
          Zobacz wszystkie
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
        <div className="flex flex-col justify-center items-center mb-8">
          <ThreeDotsWithCircle />
        </div>
        {chatComponentData?.map(
          (
            { className, initialContent, mainContent, date, receive },
            index
          ) => (
            <ChatComponent
              key={`${index}${initialContent}`}
              className={className}
              initialContent={initialContent}
              mainContent={mainContent}
              date={date}
              receive={receive}
            />
          )
        )}
      </div>
    </>
  );
};
