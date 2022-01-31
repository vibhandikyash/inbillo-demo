import { CheckIcon, HandCoinsIcon, InfoIcon, LightingIcon } from "../Icons";

export const CyzoinsciComponentContents = () => (
  <>
    {" "}
    <div className="flex justify-between">
      <div className="mb-10 font-bold flex w-1/3 text-xl">Czynnosci</div>
      <div className="flex w-1/3">
        <CheckIcon />
        <div className="text-l font-bold text-sky-700">
          Zobacz gotowe czynnosci
        </div>
      </div>
      <div className="flex ml-10 flex-row-reverse w-1/3">
        <div className="font-bold text-sky-700">Wykonaj nowa czynnosc</div>
        <LightingIcon />
      </div>
    </div>
    <div className="flex flex-row">
      <div className="flex flex-col w-1/2 mr-4">
        <div className="flex flex-row w-4/5">
          <HandCoinsIcon />
          <div className="ml-4">
            <div className="flex font-bold">Windkuj</div>
            <small className="flex text-gray-400 flex- wrap">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </small>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/4">
        <div className="flex text-sm font-bold text-gray-300">STATUS</div>
        <div className="flex">
          <div className="w-3 bg-yellow-300 rounded-xl h-3 mt-1 mr-2"></div>
          <small className="flex mr-2 text-yellow-300 font-bold">
            W trakcie
          </small>
          <InfoIcon className="inline mb-0.5 fill-sky-600" />
        </div>
      </div>
      <div className="flex flex-row-reverse w-1/4 font-bold text-sky-600">
        Zobacz
      </div>
    </div>{" "}
  </>
);
