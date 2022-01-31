import type { NextPage } from "next";
import {
  CyzoinsciComponentContents,
  DaneAwanyContent,
  DaneContrahentPageContent,
  DescriptionComponent,
  Header,
  HistoriaComponentContents,
  HrComponent,
  LeftNavComponent,
  NotakiComponentContents,
  PilkiComponentContents,
  RightNavComponent,
  TagiComponentContents,
  TojKontrahentComponentContents,
  WiadomosciComponentContents,
  ZalozSprawePageContent,
} from "../components";

const Zalot: NextPage = () => {
  return (
    <>
      <div className="font-Nunito">
        <Header />
        <div className="flex">
          <LeftNavComponent />
          <div className="w-1/2 left-1/4 mt-8">
            <ZalozSprawePageContent className={"mb-4"} />
            <div className=" bg-white rounded-xl top-2  p-8 ">
              <TagiComponentContents />
              <TojKontrahentComponentContents />
              <DaneContrahentPageContent />
              <DescriptionComponent content="Dane awany" />
              <DaneAwanyContent />
            </div>

            <div className=" bg-white rounded-xl p-4 mt-8">
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
          <RightNavComponent />
        </div>
      </div>
    </>
  );
};

export default Zalot;
