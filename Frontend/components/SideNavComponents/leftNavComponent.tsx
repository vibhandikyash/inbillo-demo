import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Accordion, LeftNavBottomComponent, LeftNavContents } from "..";
import sprawyList from "../../data/sprawyList.json";
import monitoringList from "../../data/monitoringList.json";
import leftNavContent from "../../data/leftNavContentsList.json";

export const LeftNavComponent: NextPage = () => {
  const { query } = useRouter();
  let qs;
  if (query) {
    qs = Object.keys(query)
      .map(function (key) {
        return key + "=" + query[key];
      })
      .join("&");
  }
  return (
    <>
      <div className="flex flex-col w-1/5 text-sky-600 px-8 mt-8">
        <LeftNavContents label="Portfel" path={`/${qs ? `?` + qs : ""}`} />
        <LeftNavContents
          label="Zaloz sprawe"
          path={`/zaloz${qs ? `?` + qs : ""}`}
        />
        <Accordion title={"Sprawy"} content={sprawyList} />
        <LeftNavContents label="Gielda" path="/gielda" />
        <Accordion title={"Monitoring"} content={monitoringList} />
        <div className="mt-8">
          {leftNavContent?.map(({ label, tags }: any, index) => (
            <LeftNavBottomComponent
              key={`${index}${label}`}
              label={label}
              tags={tags}
            />
          ))}
        </div>
      </div>
    </>
  );
};
