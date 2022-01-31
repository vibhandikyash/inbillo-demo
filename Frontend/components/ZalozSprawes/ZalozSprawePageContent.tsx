import { LeftArrowIcon } from "../Icons";

type ZalozSprawePageContentType = {
  className?: string;
};

export const ZalozSprawePageContent = ({
  className,
}: ZalozSprawePageContentType) => (
  <div className={className}>
    <div className="flex">
      <LeftArrowIcon />
      <span className="ml-4 font-medium text-gray-400">ZALOZ SPRAWE</span>
    </div>
  </div>
);
