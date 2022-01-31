import { HrComponent, Input } from "..";
import daneAwanyContentData from "../../data/daneAwanyContentData.json";

export const DaneContrahentPageContent = () => (
  <>
    <div className="mb-8 font-bold text-xl">
      Dane kontrahent Twojego kontrahent
    </div>
    <div className="grid grid-cols-2 mt-4">
      {daneAwanyContentData.slice(0, 2).map(({ content, value }, index) => (
        <Input key={`${index}${content}`} content={content} value={value} />
      ))}
    </div>
    <HrComponent />
  </>
);
