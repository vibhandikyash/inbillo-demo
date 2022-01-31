import { Input } from "..";
import daneAwanyContentData from "../../data/daneAwanyContentData.json";

export const DaneAwanyContent = () => (
  <>
    <div className="grid grid-cols-3">
      {daneAwanyContentData.slice(0, 3).map(({ content, value }, index) => (
        <Input key={`${index}${content}`} content={content} value={value} />
      ))}
    </div>
    <div className="grid grid-cols-2 mt-4">
      {daneAwanyContentData.slice(0, 2).map(({ content, value }, index) => (
        <Input key={`${index}${content}`} content={content} value={value} />
      ))}
    </div>
  </>
);
