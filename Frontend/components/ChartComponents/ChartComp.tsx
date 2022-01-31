import React from "react";
import NewChart from "./newChart";
import {
  CyzoinsciComponentContents,
  DaneAwanyContent,
  DaneContrahentPageContent,
  DescriptionComponent,
  HistoriaComponentContents,
  HrComponent,
  NotakiComponentContents,
  PilkiComponentContents,
  TagiComponentContents,
  TojKontrahentComponentContents,
  WiadomosciComponentContents,
  ZalozSprawePageContent,
} from "..";

export const ChartComponent = () => {
  return (
    <>
      <div className="w-1/2 left-1/4 mt-8 shadow-xl">
        <ZalozSprawePageContent className={"mb-4"} />
        <div className=" bg-white rounded-xl top-2  p-8 ">
          <NewChart />
          <TagiComponentContents />
          <TojKontrahentComponentContents />
          <DaneContrahentPageContent />
          <DescriptionComponent content="Dane awany" />
          <DaneAwanyContent />
        </div>

        <div className=" bg-white rounded-xl p-8 mt-8">
          <CyzoinsciComponentContents />
          <HrComponent />
          <PilkiComponentContents />
          <HrComponent />
          <WiadomosciComponentContents />
          <HrComponent />
          <NotakiComponentContents />
          <HrComponent />
          <HistoriaComponentContents />
        </div>
        <div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};