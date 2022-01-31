type SideNavBottomType = {
  label?: string;
  tags?: string[];
};
export const LeftNavBottomComponent = ({ label="", tags=[] }: SideNavBottomType) => (
  <>
    <div className="mt-4">
      <div
        className="
            text-gray-500
            transition-colors
            duration-200
            transform
            rounded-md
          "
      >
        <span className="text-gray">{label}</span>
      </div>
      <div
        className="
            transition-colors
            duration-200
            transform
            rounded-md
          "
      >
        <div className="flex flex-row-3 flex-wrap">
          {tags?.map((tag, index) => (
            <span
              key={`${tag}${index}`}
              className="mx-2 text-sky-600 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </>
);
