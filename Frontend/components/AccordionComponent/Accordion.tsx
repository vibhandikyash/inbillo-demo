import React, { useRef, useState } from "react";
import clsx from "clsx";
import { ternaryConditions } from "./ternaryCondition";
import { ArrowIcon, BagIcon, BarGraphIcon } from "../Icons";

export interface AccordionProps {
  title?: string;
  content?: any;
}

export function Accordion({ title, content }: AccordionProps) {
  const [active, setActive] = useState(true);
  const contentSpace = useRef<any>(null);
  return (
    <>
      <div
        className={clsx(
          " p-3 appearance-none cursor-pointer flex justify-between w-full"
        )}
        onClick={() => setActive(!active)}
      >
        <div className="flex ">
          {title === "Sprawy" && (
            <div className="ml-1 ">
              <BagIcon />
            </div>
          )}
          {title === "Monitoring" && (
            <div className="ml-1 mr-2 ">
              <BarGraphIcon />
            </div>
          )}
          <p className={"text-bold px-2"}>{title}</p>
        </div>
        <div className="">
          <ArrowIcon
            className={`${ternaryConditions(
              !active,
              "",
              "rotate-180"
            )} transform duration-700`}
          />
        </div>
      </div>

      <div
        ref={contentSpace}
        style={{
          maxHeight: `${
            !active ? "0px" : `${contentSpace?.current?.scrollHeight}px`
          }`,
        }}
        className="overflow-hidden transition-max-height duration-700 ease-in-out"
      >
        {content &&
          content?.map((cont: any, index: number) => (
            <div className="ml-6" key={index}>
              <div
                className="vl"
                style={{
                  borderLeft: "3px solid rgb(8,146,208)",
                  height: "2rem",
                }}
              >
                <div className="ml-6">{cont.item}</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
