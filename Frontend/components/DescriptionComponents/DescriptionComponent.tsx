type DescriptionComponentType = {
  content?: string;
};
export const DescriptionComponent = ({ content }: DescriptionComponentType) => (
  <div className="mb-10 font-bold flex w-1/3 text-xl">{content}</div>
);
